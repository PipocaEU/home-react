// SiteHeader.tsx
import React, { useEffect, useRef, useState } from "react";

/* ========================= Tipos ========================= */
interface NavItem {
  label: string;
  href: string;
}
interface BrandProps {
  brandName?: string;
  logoSrc?: string;
}
interface DesktopNavProps {
  items: NavItem[];
}
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}
interface SiteHeaderProps {
  brandName?: string;
  logoSrc?: string;
  navItems?: NavItem[];
  className?: string;
  ctaText?: string;
}

/* ====================== Constantes ======================= */
// Ordem e rótulos conforme o layout (Cursos, Trilhas, Mentoria, Equipe)
const DEFAULT_NAV: NavItem[] = [
  { label: "Cursos", href: "#cursos" },
  { label: "Trilhas", href: "#trilhas" },
  { label: "Mentoria", href: "#mentoria" },
  { label: "Equipe", href: "#equipe" },
];

/* ===================== Utilitários ======================= */
function classNames(...xs: (string | boolean | undefined)[]) {
  return xs.filter(Boolean).join(" ");
}

// Scroll suave até o alvo (fallback p/ âncora padrão)
function smoothScrollTo(hash: string) {
  const id = hash.replace("#", "");
  const el =
    typeof document !== "undefined" ? document.getElementById(id) : null;
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    return true;
  }
  return false;
}

/* ====================== Componentes ====================== */
function Brand({ brandName = "Pipoca Academy", logoSrc }: BrandProps) {
  return (
    <a
      href="#hero"
      className="flex items-center gap-2 shrink-0"
      aria-label={brandName}
    >
      {logoSrc ? (
        <img src={logoSrc} alt="Logo" />
      ) : (
        <span className="grid text-sm font-semibold text-white bg-purple-700 rounded h-7 w-7 place-items-center">
          PA
        </span>
      )}
    </a>
  );
}

function DesktopNav({ items }: DesktopNavProps) {
  return (
    <nav aria-label="Principal" className="items-center hidden md:flex h-14">
      <ul className="flex items-center">
        {items.map((it) => (
          <li key={it.href} className="h-14">
            <a
              href={it.href}
              className="flex h-14 items-center px-6 text-[16px] leading-6 font-normal text-black hover:text-[#581B61] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#581B61] rounded-md"
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function CTAButton({ text = "Cadastre-se grátis!" }: { text?: string }) {
  const onClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    // tenta scroll suave; se achar o alvo, previne o default
    if (smoothScrollTo("#cadastro")) e.preventDefault();
  };

  return (
    <a
      href="#cadastro"
      onClick={onClick}
      className="hidden md:inline-flex h-11 items-center justify-center rounded-lg bg-[#FBBB18] px-6 text-[16px] font-semibold text-black hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#581B61]"
      title="Ir para cadastro"
    >
      {text}
    </a>
  );
}

function IconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden width={24} height={24} {...props}>
      <path
        d="M4 6h16M4 12h16M4 18h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden width={24} height={24} {...props}>
      <path
        d="M6 6l12 12M18 6l-12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MobileMenu({ isOpen, onClose, items }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    const { style } = document.body;
    if (isOpen) {
      const prev = style.overflow;
      style.overflow = "hidden";
      return () => {
        style.overflow = prev;
      };
    }
  }, [isOpen]);

  // Adicionar: Fechar menu ao clicar em qualquer link
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Tenta scroll suave primeiro
    if (smoothScrollTo(href)) {
      e.preventDefault();
    }
    // Fecha o menu após o clique
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="z-40 md:hidden" role="dialog" aria-modal>
      <div
        className="fixed inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden
      />
      <div
        ref={panelRef}
        className="fixed z-50 p-4 bg-white border shadow-xl inset-x-3 top-3 rounded-2xl border-slate-200"
      >
        <nav aria-label="Menu móvel" className="flex flex-col gap-2">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              onClick={(e) => handleLinkClick(e, it.href)}
              className="rounded-lg px-3 py-3 text-base text-slate-900 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#581B61]"
            >
              {it.label}
            </a>
          ))}

          {/* CTA visível no mobile */}
          <a
            href="#cadastro"
            onClick={(e) => {
              if (smoothScrollTo("#cadastro")) e.preventDefault();
              onClose();
            }}
            className="mt-2 inline-flex h-11 items-center justify-center rounded-lg bg-[#FBBB18] px-4 font-semibold text-black"
          >
            Cadastre-se grátis!
          </a>
        </nav>
      </div>
    </div>
  );
}

/* ================= Componente principal ================= */
export default function SiteHeader({
  brandName = "Pipoca Academy",
  logoSrc,
  navItems = DEFAULT_NAV,
  className,
  ctaText = "Cadastre-se grátis!",
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={classNames(
        // sticky + fundo 95% branco, altura 72px, padding 8px 80px no desktop
        "sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80",
        "border-b border-slate-200",
        className
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-4 md:px-20">
        <Brand brandName={brandName} logoSrc={logoSrc} />

        <DesktopNav items={navItems} />

        <div className="flex items-center gap-3">
          <CTAButton text={ctaText} />
          <button
            type="button"
            className="-mr-2 inline-flex items-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#581B61] md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={open}
        onClose={() => setOpen(false)}
        items={navItems}
      />
    </header>
  );
}