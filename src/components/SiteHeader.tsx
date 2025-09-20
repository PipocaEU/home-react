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

function IconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ========================= Componentes ========================= */
function Brand({ brandName = "Minha Marca", logoSrc }: BrandProps) {
  return (
    <a href="/" className="flex items-center gap-2">
      {logoSrc ? (
        <img src={logoSrc} alt="Logo" className="h-7 w-7 rounded" />
      ) : (
        <span className="grid text-sm font-semibold text-white bg-purple-700 rounded h-7 w-7 place-items-center">
          PA
        </span>
      )}
      <span className="font-semibold">{brandName}</span>
    </a>
  );
}

function DesktopNav({ items }: DesktopNavProps) {
  return (
    <nav aria-label="Principal" className="hidden md:flex items-center gap-6">
      {items.map((item) => (
        <a key={item.href} href={item.href} className="text-sm hover:text-purple-700 transition-colors">
          {item.label}
        </a>
      ))}
    </nav>
  );
}

function MobileMenu({ isOpen, onClose, items }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Fecha com ESC
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Fecha ao rolar / gesto (sem travar o body!)
  useEffect(() => {
    if (!isOpen) return;

    const close = () => onClose();

    // Observa rolagem/gestos da janela
    window.addEventListener("scroll", close, { passive: true });
    window.addEventListener("wheel", close, { passive: true });
    window.addEventListener("touchmove", close, { passive: true });

    return () => {
      window.removeEventListener("scroll", close);
      window.removeEventListener("wheel", close);
      window.removeEventListener("touchmove", close);
    };
  }, [isOpen, onClose]);

  // Impede que o gesto de rolagem dentro do painel borbulhe para o body (opcional)
  useEffect(() => {
    if (!isOpen || !panelRef.current) return;
    const el = panelRef.current;
    const stop = (e: Event) => e.stopPropagation();
    el.addEventListener("wheel", stop, { passive: true });
    el.addEventListener("touchmove", stop, { passive: true });
    return () => {
      el.removeEventListener("wheel", stop);
      el.removeEventListener("touchmove", stop);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay que fecha ao clicar */}
      <button
        aria-label="Fechar menu"
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px] md:hidden"
      />

      {/* Painel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        className="fixed inset-x-0 top-0 z-50 md:hidden"
      >
        <div className="ml-auto mr-3 mt-3 w-[88%] max-w-sm rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <span className="font-semibold">Menu</span>
            <button
              onClick={onClose}
              aria-label="Fechar"
              className="p-2 rounded hover:bg-zinc-100"
            >
              <IconClose className="h-6 w-6" />
            </button>
          </div>

          {/* Lista rolável sem travar o body */}
          <nav className="max-h-[80vh] overflow-auto p-3 space-y-1">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="block rounded px-3 py-2 text-base hover:bg-zinc-100"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Itens de exemplo — troque pelos seus
  const navItems: NavItem[] = [
    { label: "Início", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Portfólio", href: "/portfolio" },
    { label: "Contato", href: "/contato" },
  ];

  // Fecha ao redimensionar para desktop (evita ficar preso aberto ao mudar viewport)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && open) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header className="sticky top-0 z-30 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Brand brandName="Minha Marca" />

        <DesktopNav items={navItems} />

        {/* Botão mobile */}
        <div className="md:hidden">
          <button
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="inline-flex items-center justify-center rounded-lg p-2 hover:bg-zinc-100 outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu isOpen={open} onClose={() => setOpen(false)} items={navItems} />
    </header>
  );
}
