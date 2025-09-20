// SiteFooter.tsx
import React from "react";

interface BrandProps {
  brandName?: string;
  logoSrc?: string;
}

type SiteFooterProps = {
  brandName?: string;
  logoSrc?: string;
  links?: {
    home: string;
    cursos: string;
    trilhas: string;
    mentoria: string;
    time: string;
    formulario: string;
  };
  policies?: {
    privacidade: string;
    termos: string;
    cookies: string;
  };
  social?: {
    facebook?: string;
    instagram?: string;
    x?: string;
    linkedin?: string;
    youtube?: string;
  };
};

export default function SiteFooter({
  brandName = "Pipoca Academy",
  logoSrc,
  links = {
    home: "#",
    cursos: "#",
    trilhas: "#",
    mentoria: "#",
    time: "#",
    formulario: "#",
  },
  policies = {
    privacidade: "#",
    termos: "#",
    cookies: "#",
  },
  social = {
    facebook: "#",
    instagram: "#",
    x: "#",
    linkedin: "#",
    youtube: "#",
  },
}: SiteFooterProps) {
  return (
    <footer className="w-full bg-[#581B61] text-white">
      <div className="mx-auto max-w-[1130px] px-6 py-10 flex flex-col justify-between flex-wrap gap-8">
        {/* Top row */}
        <div className="flex items-center gap-x-10 gap-y-6">
          <Brand brandName={brandName} logoSrc={logoSrc} />

          <nav
            aria-label="Principal"
            className="flex flex-wrap justify-center gap-6 text-[16px] leading-[19px] font-medium"
          >
            <a className="hover:underline underline-offset-4" href={links.home}>
              Início
            </a>
            <a
              className="hover:underline underline-offset-4"
              href={links.cursos}
            >
              Cursos oferecidos
            </a>
            <a
              className="hover:underline underline-offset-4"
              href={links.trilhas}
            >
              Trilhas de carreira
            </a>
            <a
              className="hover:underline underline-offset-4"
              href={links.mentoria}
            >
              Mentoria
            </a>
            <a className="hover:underline underline-offset-4" href={links.time}>
              Time
            </a>
            <a
              className="hover:underline underline-offset-4"
              href={links.formulario}
            >
              Formulário
            </a>
          </nav>

          <div className="flex items-center gap-3" aria-label="Redes sociais">
            <SocialIcon href={social.facebook} label="Facebook">
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon href={social.instagram} label="Instagram">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon href={social.x} label="X (Twitter)">
              <XIcon />
            </SocialIcon>
            <SocialIcon href={social.linkedin} label="LinkedIn">
              <LinkedinIcon />
            </SocialIcon>
            <SocialIcon href={social.youtube} label="YouTube">
              <YoutubeIcon />
            </SocialIcon>
          </div>
        </div>

        {/* Divider */}
        <hr className="w-full border-t border-white/60" />

        {/* Bottom row */}
        <div className="flex flex-wrap items-start justify-center gap-6 text-sm font-medium leading-[17px]">
          <span className="text-center">
            © 2025 Pipoca Academy. Todos os direitos reservados.
          </span>

          <div className="flex flex-wrap items-center gap-6">
            <a
              className="hover:underline underline-offset-4"
              href={policies.privacidade}
            >
              Política de Privacidade
            </a>
            <a
              className="hover:underline underline-offset-4"
              href={policies.termos}
            >
              Termos de Serviço
            </a>
            <a
              className="hover:underline underline-offset-4"
              href={policies.cookies}
            >
              Configurações de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============== Helpers ============== */

function SocialIcon({
  href = "#",
  label,
  children,
}: {
  href?: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-6 h-6 transition-opacity rounded hover:opacity-80"
    >
      {children}
    </a>
  );
}

function Brand({ brandName = "Pipoca Academy", logoSrc }: BrandProps) {
  return (
    <a
      href="#hero"
      className="flex items-center gap-2 shrink-0"
      aria-label={brandName}
    >
      {logoSrc ? (
        <img src={logoSrc} alt="Logo" className="rounded h-7 w-7" />
      ) : (
        <span className="grid text-sm font-semibold text-white bg-purple-700 rounded h-7 w-7 place-items-center">
          PA
        </span>
      )}
      <span className="font-serif text-lg tracking-wide text-white sm:text-xl">
        {brandName}
      </span>
    </a>
  );
}

/* Icons: minimal inline SVGs to evitar dependências */
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path
        d="M13.5 21v-7h2.3l.4-3h-2.7V9.1c0-.9.3-1.5 1.7-1.5h1V4.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8v3h2.3v7h3.2z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path
        d="M4 4l7.2 8.2L4.7 20H7l5-5.5L16.9 20H20l-7.5-8.5L19.3 4H17L12 9.2 8.2 4H4z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect x="6.2" y="10" width="2.7" height="7.7" fill="currentColor" />
      <circle cx="7.5" cy="7.2" r="1.4" fill="currentColor" />
      <path
        d="M12 10h2.6a3.4 3.4 0 013.4 3.4v4.3h-2.7v-3.9c0-1.1-.7-1.9-1.8-1.9H12v5.8h-2.7V10H12z"
        fill="currentColor"
      />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <rect
        x="2.5"
        y="6.5"
        width="19"
        height="11"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M11 10.2l4.2 2.3L11 14.8v-4.6z" fill="currentColor" />
    </svg>
  );
}
