import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SB_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SERVICE_ROLE_KEY");
const BREVO_API_KEY = Deno.env.get("BREVO_API_KEY");
const FROM_NAME = Deno.env.get("FROM_NAME") ?? "Pipoca Agil";
const FROM_EMAIL = Deno.env.get("FROM_EMAIL") ?? "pipocaagileu@gmail.com";

console.log("Configuração carregada:", {
  SUPABASE_URL: SUPABASE_URL ? "✅" : "❌",
  SUPABASE_SERVICE_ROLE_KEY: SUPABASE_SERVICE_ROLE_KEY ? "✅" : "❌",
  BREVO_API_KEY: BREVO_API_KEY ? "✅" : "❌",
  FROM_NAME,
  FROM_EMAIL
});

// Verifique se todas as variáveis necessárias estão presentes
if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error("Variáveis de ambiente faltando:", {
    SUPABASE_URL: !SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY: !SUPABASE_SERVICE_ROLE_KEY,
    BREVO_API_KEY: !BREVO_API_KEY
  });
}

const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req) => {
  console.log("Nova requisição recebida:", req.method);
  
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  
  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Parse seguro do JSON
    let body;
    try {
      const rawBody = await req.text(); // Primeiro leia como texto
      console.log("Raw body received:", rawBody);
      
      body = JSON.parse(rawBody); // Depois parseie como JSON
      console.log("JSON parsed successfully:", body);
    } catch (parseError) {
      console.error("Erro ao parsear JSON:", parseError);
      return new Response(JSON.stringify({ error: "JSON inválido" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const { nome, email, situacao, carreira } = body ?? {};

    // validação básica
    const emailOk = typeof email === "string" && /^\S+@\S+\.\S+$/.test(email);
    const nomeOk = typeof nome === "string" && nome.trim().length > 1;
    const sitOk = typeof situacao === "string" && situacao.length > 0;
    const carOk = typeof carreira === "string" && carreira.length > 0;

    if (!emailOk || !nomeOk || !sitOk || !carOk) {
      console.error("Dados inválidos:", { nome, email, situacao, carreira });
      return new Response(JSON.stringify({ error: "Dados inválidos" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // grava no banco
    console.log("Inserindo no banco...");
    const { data, error: dbError } = await supabase.from("leads").insert({
      nome,
      email,
      situacao,
      carreira,
    }).select();

    if (dbError) {
      console.error("Erro no banco:", dbError);
      const conflict =
        (dbError as any)?.code === "23505" ||
        String(dbError.message).includes("duplicate");
      
      if (!conflict) {
        return new Response(JSON.stringify({ error: "Falha ao salvar" }), {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        });
      }
      console.log("E-mail duplicado, continuando...");
    }

    // envia e-mail via Brevo (se API key estiver configurada e válida)
    if (BREVO_API_KEY && BREVO_API_KEY !== "WVPOqADnmsvtaExJ") {
      console.log("Enviando e-mail via Brevo...");
      try {
        const mailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "api-key": BREVO_API_KEY,
          },
          body: JSON.stringify({
            sender: { name: FROM_NAME, email: FROM_EMAIL },
            to: [{ email, name: nome }],
            subject: "Confirmação da sua inscrição",
            htmlContent: `
              <div style="font-family:system-ui,Arial,sans-serif;font-size:16px;color:#222">
                <p>Olá, ${nome}!</p>
                <p>Recebemos seu cadastro e você já está na nossa lista.</p>
                <p>Em breve enviaremos novidades, materiais e convites de eventos.</p>
                <p>Abraços,<br>${FROM_NAME}</p>
              </div>
            `,
          }),
        });

        if (!mailRes.ok) {
          const errorText = await mailRes.text();
          console.error("Erro no Brevo:", errorText);
          
          // Mensagem mais amigável para o log
          if (errorText.includes("Key not found") || errorText.includes("unauthorized")) {
            console.error("❌ API key do Brevo inválida ou não autorizada");
            console.error("💡 Acesse: https://app.brevo.com/account/keys/api");
            console.error("💡 Verifique se a key tem permissão SMTP");
            console.error("💡 Verifique se o email remetente está verificado");
          }
        } else {
          console.log("✅ E-mail enviado com sucesso via Brevo!");
        }
      } catch (mailError) {
        console.error("Erro ao tentar enviar email:", mailError);
      }
    } else {
      console.log("⚠️  Brevo não configurado ou usando key inválida");
      console.log("💡 Configure uma API key válida em: https://app.brevo.com/account/keys/api");
    }

    return new Response(JSON.stringify({ 
      ok: true,
      message: "Cadastro realizado com sucesso!",
      emailEnviado: BREVO_API_KEY && BREVO_API_KEY !== "WVPOqADnmsvtaExJ"
    }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (e) {
    console.error("Erro na função:", e);
    return new Response(JSON.stringify({ error: "Falha interna" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});