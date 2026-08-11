import { Instagram, MapPin, MessageCircle } from "lucide-react";
import { INSTAGRAM_URL, WHATSAPP_NUMBER, planes } from "./data";
import { Chip, IconCircle, PillButton } from "./Pill";
import { Reveal } from "./Reveal";
import { selectPlan } from "./select-plan";
import heroImg from "@/assets/hero-surf-dia.jpg";
import logo from "@/assets/kairos-logo.jpg";

/* Hero a pantalla completa: la foto es el fondo y el contenido se ancla a las
   esquinas, dejando el centro libre para la imagen. La sección lleva
   `surface-light`, que redefine los tokens semánticos para todo lo que cuelga
   dentro; de ahí en adelante la página vuelve a la base oscura. */
export function Hero() {
  return (
    <section
      id="inicio"
      className="surface-light relative isolate min-h-[100svh] overflow-hidden rounded-b-[2rem] sm:rounded-b-[3rem]"
    >
      <img
        src={heroImg}
        alt="Vista aérea de un surfista tomando una ola de espuma en agua turquesa, con más personas esperando olas al fondo"
        width={1600}
        height={1200}
        fetchPriority="high"
        className="absolute inset-0 -z-10 size-full object-cover object-top"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{ background: "var(--hero-scrim)" }}
      />

      <div className="flex min-h-[100svh] flex-col justify-between gap-10 px-5 pb-9 pt-28 sm:px-8 sm:pb-11 sm:pt-32">
        {/* Titular a sangre. Los dos niveles viven dentro del mismo <h1> para
            no perder la keyword principal en el encabezado. */}
        <Reveal className="relative">
          <h1>
            <span className="display-xl block">Kairos Surf</span>
            <span className="mt-4 block max-w-2xl font-display text-2xl leading-tight sm:text-4xl">
              Clases de surf en Puerto Colombia
            </span>
          </h1>
          <p className="mt-2 font-script text-2xl text-teal-deep sm:text-3xl">
            ¡Vive la experiencia de surfear!
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed opacity-90 sm:text-base">
            Escuela local de surf y paddle. Clases 100% personalizadas, para todas las edades y
            niveles.
          </p>
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            width={112}
            height={112}
            className="absolute right-0 top-3 hidden size-24 rounded-full object-cover shadow-[0_10px_40px_-12px_rgba(0,0,0,0.45)] ring-1 ring-white/50 lg:block xl:size-28"
          />
        </Reveal>

        {/* Ubicación y servicios, como las cápsulas de la referencia. */}
        <Reveal delay={140}>
          <Chip variant="ink" size="md" className="tracking-[0.02em]">
            <MapPin className="size-4" />
            Puerto Colombia, Atlántico
          </Chip>
          <div className="no-scrollbar mt-4 flex max-w-xl snap-x gap-2.5 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible md:pb-0">
            {planes.map((p) => (
              <Chip
                key={p.id}
                variant="glass"
                size="md"
                className="shrink-0 snap-start"
                onClick={() => selectPlan(p.id)}
              >
                {p.nombre}
              </Chip>
            ))}
          </div>
        </Reveal>

        {/* Redes a la izquierda, CTAs a la derecha. */}
        <Reveal delay={240}>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div className="flex gap-2.5">
              <IconCircle
                href={INSTAGRAM_URL}
                label="Instagram de Kairos Surf School"
                variant="ink"
              >
                <Instagram className="size-5" />
              </IconCircle>
              <IconCircle
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                label="Escribir a Kairos Surf School por WhatsApp"
                variant="ink"
              >
                <MessageCircle className="size-5" />
              </IconCircle>
            </div>
            {/* Sobre la espuma clara del fondo, el contorno blanco desaparece:
                los dos CTA van en tinta oscura, como en la referencia. */}
            <div className="flex flex-wrap gap-2.5">
              <PillButton
                href="#reserva"
                variant="solid"
                size="lg"
                className="shadow-[0_12px_32px_-12px_rgba(0,0,0,0.55)]"
              >
                Reserva tu clase
              </PillButton>
              <PillButton href="#el-deporte" variant="ink" size="lg">
                Conoce más
              </PillButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
