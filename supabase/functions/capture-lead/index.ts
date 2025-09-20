// supabase/functions/capture-lead/index.ts
// Deno + Supabase Edge Function
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const BREVO_API_KEY = Deno.env.get("BREVO_API_KEY")!;
const FROM_NAME = Deno.env.get("FROM_NAME") ?? "Sua Marca";
const FROM_EMAIL = Deno.env.get("FROM_EMAIL") ?? "no-reply@seu-dominio.com";

// Supabase client com service role (ignora RLS)
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

// util: CORS
const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // ou troque por seu domínio do GitHub Pages
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req) => {
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

    const body = await req.json().catch(() => ({}));
    const { nome, email, situacao, carreira } = body ?? {};

    // validação básica
    const emailOk = typeof email === "string" && /^\S+@\S+\.\S+$/.test(email);
    const nomeOk = typeof nome === "string" && nome.trim().length > 1;
    const sitOk = typeof situacao === "string" && situacao.length > 0;
    const carOk = typeof carreira === "string" && carreira.length > 0;

    if (!emailOk || !nomeOk || !sitOk || !carOk) {
      return new Response(JSON.stringify({ error: "Dados inválidos" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // grava no banco
    const { error: dbError } = await supabase.from("leads").insert({
      nome,
      email,
      situacao,
      carreira,
    });
    if (dbError) {
      // se houver unique violation (e-mail já existe), ignore para UX suave
      const conflict =
        (dbError as any)?.code === "23505" || String(dbError.message).includes("duplicate");
      if (!conflict) {
        console.error("DB error:", dbError);
        return new Response(JSON.stringify({ error: "Falha ao salvar" }), {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        });
      }
    }

    // envia e-mail via Brevo API v3
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
      const text = await mailRes.text();
      console.error("Brevo error:", text);
      // segue 200 para não travar UX — mas você pode retornar 502 se preferir
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (e) {
    console.error("Function error:", e);
    return new Response(JSON.stringify({ error: "Falha interna" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});


// supabase secrets set \
//   SUPABASE_URL="bawzlwhqnlhaxctghqlz.supabase.co" \
//   SUPABASE_SERVICE_ROLE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhd3psd2hxbmxoYXhjdGdocWx6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODI5MDIyNCwiZXhwIjoyMDczODY2MjI0fQ.fQfeIV3uVOr1Rrc4nkovRC1ZILtpW76SHhAJuw-7Ouw" \
//   BREVO_API_KEY="WVPOqADnmsvtaExJ" \
//   FROM_NAME="Pipoca Agil" \
//   FROM_EMAIL="pipocaagileu@gmail.com"