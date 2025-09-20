// CadastroSection.tsx
import React, { useState } from "react";

interface CadastroSectionProps {
  className?: string;
  images?: { left: string; center: string; right: string };
}

export default function CadastroSection({
  className = "",
  images = {
    left: "/images/pexels-mart-production-7606061.jpg",
    center: "/images/senhor-estudando.jpg",
    right: "/images/pexels-diva-plavalaguna-6150385.jpg",
  },
}: CadastroSectionProps) {
  type Situacao =
    | "estudante"
    | "buscando"
    | "empregado"
    | "desempregado"
    | "autonomo"
    | "outro";

  type FormData = {
    nome: string;
    email: string;
    situacao: Situacao | "";
    carreira: string;
  };

  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    situacao: "",
    carreira: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value as FormData[keyof FormData],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    
    setLoading(true);
    try {
      const res = await fetch("https://bawzlwhqnlhaxctghqlz.supabase.co/functions/v1/capture-lead", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          situacao: formData.situacao,
          carreira: formData.carreira,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        const errorMsg = data?.error || "Falha ao enviar. Tente novamente.";
        alert(errorMsg);
      } else {
        alert("Inscrição confirmada! Confira seu e-mail para a confirmação.");
        // Limpar o formulário
        setFormData({ 
          nome: "", 
          email: "", 
          situacao: "", 
          carreira: "" 
        });
      }
    } catch (err) {
      console.error("Erro na requisição:", err);
      alert("Falha de rede. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="cadastro"
      className={`scroll-mt-24 w-full bg-[#F1F2F4] ${className}`}
    >
      <div className="mx-auto max-w-[1216px] px-4 md:px-6 py-16 md:py-24">
        {/* === Imagens topo (3 cards) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <figure className="h-[554px] w-full overflow-hidden rounded-[24px]">
            <img
              src={images.left}
              alt="Estudo em grupo"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </figure>
          <figure className="h-[554px] w-full overflow-hidden rounded-[24px]">
            <img
              src={images.center}
              alt="Pessoa estudando"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </figure>
          <figure className="h-[554px] w-full overflow-hidden rounded-[24px]">
            <img
              src={images.right}
              alt="Aula prática"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </figure>
        </div>

        {/* === Conteúdo (texto + formulário) === */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Coluna esquerda: texto */}
          <div className="flex flex-col">
            {/* Pill */}
            <span className="inline-flex w-fit rounded-full bg-[#FEF0CD] px-4 py-1 text-[14px] font-semibold leading-[19px] text-[#876202]">
              PRÓXIMO PASSO
            </span>

            <h3 className="mt-3 text-[32px] leading-[42px] font-medium text-[#2A1140] max-w-[475px]">
              Dê o primeiro passo para transformar sua carreira
            </h3>

            <p className="mt-4 max-w-[511px] text-[18px] leading-[22px] font-medium text-[#2A1140]">
              Ao se cadastrar, você entra na nossa comunidade e fica por dentro
              de todas as novidades, eventos exclusivos e lançamento de novas
              turmas. Não perca a chance de acelerar seu futuro.
            </p>

            {/* Bullets */}
            <ul className="mt-6 space-y-4">
              <Bullet>Receba materiais de estudo exclusivos.</Bullet>
              <Bullet>Seja o primeiro a saber sobre novas trilhas.</Bullet>
              <Bullet>Participe de webinars e workshops gratuitos.</Bullet>
            </ul>
          </div>

          {/* Coluna direita: card do formulário */}
          <div className="lg:justify-self-end">
            <div className="w-full lg:w-[556px] rounded-2xl bg-white p-8 shadow-[0px_20px_25px_rgba(67,27,97,0.15),0px_4px_6px_rgba(0,0,0,0.05),0px_10px_15px_rgba(0,0,0,0.10)]">
              <h4 className="text-[24px] leading-[34px] font-medium text-[#343A40]">
                Comece sua jornada agora
              </h4>
              <p className="mt-2 text-[18px] leading-[22px] font-medium text-[#6C757D]">
                Preencha o formulário abaixo para começar.
              </p>

              <form onSubmit={handleSubmit} className="mt-6">
                {/* Nome */}
                <FormField
                  id="nome"
                  label="Nome"
                  icon={<UserIcon className="h-4 w-4 text-[#CED4DA]" />}
                >
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="h-[42px] w-full rounded-lg border border-[#DEE2E6] bg-white pl-10 pr-3 text-[16px] leading-6 placeholder-[#ADAEBC] focus:outline-none focus:ring-2 focus:ring-[#581B61]"
                    required
                    disabled={loading}
                  />
                </FormField>

                {/* Email */}
                <FormField
                  id="email"
                  label="E-mail"
                  icon={<MailIcon className="h-4 w-4 text-[#CED4DA]" />}
                >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seuemail@dominio.com"
                    className="h-[42px] w-full rounded-lg border border-[#DEE2E6] bg-white pl-10 pr-3 text-[16px] leading-6 placeholder-[#ADAEBC] focus:outline-none focus:ring-2 focus:ring-[#581B61]"
                    required
                    disabled={loading}
                  />
                </FormField>

                {/* Situação Profissional */}
                <FormField
                  id="situacao"
                  label="Situação Profissional"
                  icon={<BriefcaseIcon className="h-4 w-4 text-[#CED4DA]" />}
                >
                  <select
                    id="situacao"
                    name="situacao"
                    value={formData.situacao}
                    onChange={handleChange}
                    className="h-[42px] w-full rounded-lg border border-[#DEE2E6] bg-white pl-10 pr-3 text-[16px] leading-6 text-[#000] placeholder-[#ADAEBC] focus:outline-none focus:ring-2 focus:ring-[#581B61]"
                    required
                    disabled={loading}
                  >
                    <option value="" disabled>
                      Selecione sua situação
                    </option>
                    <option value="estudante">Estudante</option>
                    <option value="buscando">Buscando 1º emprego</option>
                    <option value="empregado">Empregado</option>
                    <option value="desempregado">Desempregado</option>
                    <option value="autonomo">Autônomo / Freelancer</option>
                    <option value="outro">Outro</option>
                  </select>
                </FormField>

                {/* Carreira Desejada */}
                <FormField
                  id="carreira"
                  label="Carreira Desejada"
                  icon={<TargetIcon className="h-4 w-4 text-[#CED4DA]" />}
                >
                  <input
                    type="text"
                    id="carreira"
                    name="carreira"
                    value={formData.carreira}
                    onChange={handleChange}
                    placeholder="Ex: Desenvolvedor Full-Stack, Cientista de Dados"
                    className="h-[42px] w-full rounded-lg border border-[#DEE2E6] bg-white pl-10 pr-3 text-[16px] leading-6 placeholder-[#ADAEBC] focus:outline-none focus:ring-2 focus:ring-[#581B61]"
                    required
                    disabled={loading}
                  />
                </FormField>

                {/* Botão */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-3 h-12 w-full rounded-lg bg-[#431B61] text-white shadow-[0px_2px_4px_rgba(0,0,0,0.10),0px_4px_6px_rgba(0,0,0,0.10)] transition-colors hover:bg-[#3a1653] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#581B61] font-bold text-[16px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Enviando..." : "Enviar Cadastro"}
                </button>
              </form>

              {/* Termos */}
              <p className="mt-6 text-center text-[12px] leading-4 text-[#ADB5BD]">
                Ao se cadastrar, você concorda com nossos{" "}
                <a href="#" className="text-[#431B61] hover:underline">
                  Termos de Uso
                </a>{" "}
                e{" "}
                <a href="#" className="text-[#431B61] hover:underline">
                  Política de Privacidade
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



/* ====== Subcomponentes ====== */
function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-[#2A1140] text-[16px] leading-[19px] font-medium">
      <span className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#18AFBB]">
        <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none">
          <path
            d="M5 10l3 3 7-7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {children}
    </li>
  );
}

function FormField({
  id,
  label,
  icon,
  children,
}: {
  id: string;
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="mb-2 block text-[14px] leading-[19px] text-[#495057]"
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
            {icon}
          </span>
        )}
        {children}
      </div>
    </div>
  );
}

/* ====== Ícones (inline SVG minimalistas) ====== */
function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="16" {...props}>
      <path
        d="M12 12a4 4 0 100-8 4 4 0 000 8zm7 8a7 7 0 10-14 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...props}>
      <path
        d="M4 6h16v12H4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M22 6l-10 7L2 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...props}>
      <path
        d="M4 7h16v12H4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M9 7V5h6v2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M4 12h16" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function TargetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...props}>
      <circle
        cx="12"
        cy="12"
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 2v3M12 19v3M2 12h3M19 12h3"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
