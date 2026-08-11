import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { PillButton } from "./Pill";
import logo from "@/assets/kairos-logo.jpg";
import { cn } from "@/lib/utils";

/* `primary` marca los enlaces que se ven en desktop. El menú móvil los
   despliega todos: la barra se mantiene aireada sin perder anclas. */
const links = [
  { href: "#la-playa", label: "la playa", primary: true },
  { href: "#el-deporte", label: "el deporte", primary: true },
  { href: "#instructores", label: "instructores", primary: true },
  { href: "#la-clase", label: "la clase", primary: false },
  { href: "#planes", label: "planes", primary: true },
  { href: "#preguntas", label: "preguntas", primary: true },
  { href: "#galeria", label: "galería", primary: false },
  { href: "#contacto", label: "contacto", primary: true },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Sin scroll flota sobre el hero claro y toma su tinta; al bajar se
     encoge en una barra tipo píldora con la paleta oscura de la página. */
  const light = !scrolled;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
      <nav
        className={cn(
          "mx-auto flex items-center justify-between transition-all duration-500",
          scrolled
            ? "max-w-5xl rounded-full border border-border bg-background/80 px-4 py-2.5 text-cream backdrop-blur-xl"
            : "max-w-7xl border border-transparent px-2 py-3 sm:px-5",
        )}
        style={light ? { color: "var(--hero-ink)" } : undefined}
      >
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo de Kairos Surf School"
            width={44}
            height={44}
            className={cn(
              "rounded-full object-cover ring-1 transition-all duration-500",
              scrolled ? "size-9 ring-gold/40" : "size-11 ring-white/50",
            )}
          />
          <span className="hidden font-display text-lg tracking-[0.18em] sm:block">KAIROS</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links
            .filter((l) => l.primary)
            .map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[0.82rem] font-medium opacity-80 transition-opacity duration-300 hover:opacity-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
        </ul>

        <div className="flex items-center gap-2">
          <PillButton href="#reserva" variant="solid" size="sm">
            Reservar
          </PillButton>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-current/30 p-2.5 transition-colors duration-300 hover:border-gold hover:text-gold lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="mx-auto mt-2 max-w-5xl rounded-3xl border border-border bg-background/95 p-3 backdrop-blur-xl lg:hidden">
          <ul className="grid grid-cols-2 gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-full px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/40 hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
