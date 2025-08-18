import React, { useEffect, useRef, useState } from "react";

// === Tipos ==============================================================
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
}

// === Constantes =========================================================
const DEFAULT_NAV: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Cursos", href: "#cursos" },
];

// === Utilitários ========================================================
function classNames(...xs: (string | boolean | undefined)[]): string {
  return xs.filter(Boolean).join(" ");
}

// === Componentes ========================================================
function Brand({ brandName = "Pipoca Academy", logoSrc }: BrandProps) {
  return (
    <a href="#home" className="flex items-center gap-2 shrink-0" aria-label={brandName}>
      {logoSrc ? (
        <img src={logoSrc} alt="Logo" className="h-7 w-7 rounded" />
      ) : (
        <span className="grid h-7 w-7 place-items-center rounded bg-purple-700 text-white text-sm font-semibold">
          PA
        </span>
      )}
      <span className="font-serif text-lg tracking-wide text-purple-900 sm:text-xl">{brandName}</span>
    </a>
  );
}

function DesktopNav({ items }: DesktopNavProps) {
  return (
    <div className="hidden items-center gap-8 md:flex">
      <nav aria-label="Principal" className="contents">
        {items.map((it) => (
          <a
            key={it.href}
            href={it.href}
            className="text-sm text-slate-700 hover:text-slate-900 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-700 focus-visible:ring-offset-2"
          >
            {it.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

function IconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden width={24} height={24} {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden width={24} height={24} {...props}>
      <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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

  if (!isOpen) return null;

  return (
    <div className="md:hidden" role="dialog" aria-modal>
      <div
        className="fixed inset-0 z-40 bg-black/30"
        onClick={onClose}
        aria-hidden
      />

      <div
        ref={panelRef}
        className="fixed inset-x-3 top-3 z-50 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl"
      >
        <nav aria-label="Menu móvel" className="flex flex-col gap-2">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              onClick={onClose}
              className="rounded-lg px-3 py-2 text-base text-slate-800 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-700"
            >
              {it.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

// === Componente principal ================================================
export default function SiteHeader({
  brandName = "Pipoca Academy",
  logoSrc,
  navItems = DEFAULT_NAV,
  className,
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={
        classNames(
          "sticky top-0 z-30 w-full border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60",
          className
        )
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Brand brandName={brandName} logoSrc={logoSrc} />

        <DesktopNav items={navItems} />

        <button
          type="button"
          className="-mr-2 inline-flex items-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-700 md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      <MobileMenu isOpen={open} onClose={() => setOpen(false)} items={navItems} />
    </header>
  );
}