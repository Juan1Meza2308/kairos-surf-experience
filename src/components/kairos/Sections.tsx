import { useState, type ReactNode } from "react";
import { Instagram, MapPin, MessageCircle, Quote, Sunrise, Waves, Wind, X } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import {
  INSTAGRAM_URL,
  MAP_EMBED,
  MEETING_POINT,
  WHATSAPP_NUMBER,
  faqs,
  instructores,
  planes,
  testimonios,
  timeline,
} from "./data";
import heroImg from "@/assets/hero-surf.jpg";
import playaImg from "@/assets/playa-malecon.jpg";
import yogaImg from "@/assets/yoga-surf.jpg";
import logo from "@/assets/kairos-logo.jpg";
import { cn } from "@/lib/utils";

function selectPlan(id: string) {
  window.dispatchEvent(new CustomEvent("kairos:select-plan", { detail: id }));
  document.getElementById("reserva")?.scrollIntoView({ behavior: "smooth" });
}

/* Carrusel táctil en móvil (scroll-snap) que en pantallas grandes se
   convierte en grilla. Reduce drásticamente el scroll vertical en celular. */
function HScroll({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:-mx-0 md:grid md:gap-6 md:overflow-visible md:px-0 md:pb-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[88vh] items-end overflow-hidden sm:min-h-[92vh]"
    >
      <img
        src={heroImg}
        alt="Surfista caminando por la orilla con una tabla turquesa al atardecer en Puerto Colombia"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-dusk)" }} />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-12 pt-24 sm:pb-20 sm:pt-32">
        <Reveal>
          <img
            src={logo}
            alt="Isotipo de Kairos Surf School: vela dorada sobre círculo verde azulado"
            width={88}
            height={88}
            className="size-16 rounded-full object-cover ring-1 ring-gold/50 sm:size-22"
          />
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 max-w-3xl font-display text-[2.4rem] leading-[1.05] text-cream sm:text-6xl md:text-7xl">
            Clases de surf en Puerto Colombia
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-4 font-script text-2xl text-gold sm:text-3xl">
            ¡Vive la experiencia de surfear!
          </p>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/80">
            Escuela local de surf y paddle en el Atlántico. Clases 100% personalizadas, para todas
            las edades y niveles. Antes de reservar, aquí te contamos exactamente cómo es el mar, la
            clase y lo que puedes esperar el primer día.
          </p>
        </Reveal>
        <Reveal delay={380}>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#reserva"
              className="rounded-sm bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-transform duration-300 hover:scale-[1.03] hover:bg-gold-bright"
            >
              Reserva tu clase
            </a>
            <a
              href="#el-deporte"
              className="rounded-sm border border-cream/40 px-7 py-3.5 text-sm uppercase tracking-[0.16em] text-cream transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              Conoce más
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const datosPlaya = [
  {
    icon: Waves,
    titulo: "Oleaje típico",
    texto:
      "Entre 0,5 y 1,2 m la mayor parte del año, con fondo de arena y olas de espuma largas: es un mar de aprendizaje, no de olas grandes. Entre diciembre y marzo entra brisa fuerte y algunos días el mar se pica demasiado para principiantes.",
  },
  {
    icon: Sunrise,
    titulo: "Mejor momento del día",
    texto:
      "Temprano, entre 6 y 9 a.m.: menos viento, agua más ordenada y menos gente en el agua. Al final de la tarde también sirve, aunque suele haber más brisa cruzada.",
  },
  {
    icon: Wind,
    titulo: "Clima por temporada",
    texto:
      "Diciembre a abril: seco, ventoso, agua 26–28 °C. Mayo a noviembre: más caliente y húmedo, con lluvias cortas en la tarde y mar generalmente más suave por la mañana.",
  },
  {
    icon: MapPin,
    titulo: "Cómo llegar",
    texto:
      "Desde Barranquilla son unos 20 km por la vía al mar: 25–35 minutos en carro, o buseta hacia Puerto Colombia desde la carrera 45. Nos encontramos en Kairos Surf School, a pocos pasos de la playa; hay parqueo informal a una cuadra.",
  },
];

export function Playa() {
  return (
    <section id="la-playa" className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="La playa"
          title="Puerto Colombia, sin adornos"
          intro="Antes de venir conviene saber cómo es realmente el mar aquí: qué tan grandes son las olas, a qué hora está mejor y qué esperar según la época del año."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <Reveal className="overflow-hidden rounded-md">
            <img
              src={playaImg}
              alt="Muelle de madera y malecón de Puerto Colombia con kioscos de palma al atardecer"
              width={1400}
              height={1000}
              loading="lazy"
              className="h-56 w-full object-cover transition-transform duration-500 hover:scale-[1.03] sm:h-72 lg:h-full"
            />
          </Reveal>
          <HScroll className="md:grid-cols-2 md:gap-5">
            {datosPlaya.map((d, i) => (
              <Reveal
                key={d.titulo}
                delay={i * 90}
                className="w-[82%] shrink-0 snap-start md:w-auto"
              >
                <article className="grain-panel h-full rounded-md border border-border p-5">
                  <d.icon className="size-5 text-gold" />
                  <h3 className="mt-3 text-lg text-cream sm:text-xl">{d.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.texto}</p>
                </article>
              </Reveal>
            ))}
          </HScroll>
        </div>

        <Reveal className="mt-10 hidden overflow-hidden rounded-md border border-border lg:block">
          <iframe
            title="Mapa del punto de encuentro de Kairos Surf School en Puerto Colombia"
            src={MAP_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[380px] w-full"
          />
        </Reveal>
        <p className="mt-3 text-sm text-muted-foreground">
          Punto de encuentro: {MEETING_POINT}. Llega 10 minutos antes con el vestido de baño puesto.
        </p>
      </div>
    </section>
  );
}

export function Deporte() {
  return (
    <section id="el-deporte" className="section-pad bg-secondary/25">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="El deporte"
          title="Qué es surfear (y qué no es) cuando estás empezando"
          intro="La primera clase se parece poco a los videos. Esto es lo que de verdad pasa."
        />

        <HScroll className="mt-10 md:grid-cols-3">
          {[
            {
              t: "Qué se siente al empezar",
              p: "Los primeros 20 minutos son de remada y de tragar algo de agua salada. La tabla de principiante es grande y estable, así que casi nadie se golpea. Lo más difícil no es el equilibrio: es el momento exacto de levantarse.",
            },
            {
              t: "Cuánto toma pararse",
              p: "Con instructor empujando la tabla, la mayoría se para en la primera clase entre el intento 5 y el 15. Remar solo, leer la ola y elegirla toma entre 4 y 8 sesiones. Nadie sale surfeando de una clase, y quien te diga lo contrario te está vendiendo algo.",
            },
            {
              t: "Beneficios reales",
              p: "Trabajo de espalda, hombros y core, y bastante cardio en la remada. Además obliga a estar atento al mar durante dos horas seguidas: mucha gente vuelve por eso más que por la ola.",
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 100} className="w-[82%] shrink-0 snap-start md:w-auto">
              <article className="h-full rounded-md border border-border bg-card/70 p-6">
                <h3 className="text-xl text-cream sm:text-2xl">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.p}</p>
              </article>
            </Reveal>
          ))}
        </HScroll>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-md border border-turquoise/30 bg-background/40 p-6">
              <p className="eyebrow">Surf</p>
              <h3 className="mt-2 text-2xl text-cream">Para quién es</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Para quien no le molesta caerse muchas veces y disfruta el intento. Exige más
                paciencia y depende del estado del mar ese día. Si vienes un solo día y quieres
                garantía de que algo va a pasar, el paddle es más seguro.
              </p>
            </article>
          </Reveal>
          <Reveal delay={100}>
            <article className="h-full rounded-md border border-terracotta/30 bg-background/40 p-6">
              <p className="eyebrow">Paddle (SUP)</p>
              <h3 className="mt-2 text-2xl text-cream">Para quién es</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Para quien quiere estar de pie desde el minuto diez, para familias y para días de
                mar plano. Es más tranquilo, se recorre más y también entrena el core, pero no da la
                sensación de deslizarse en una ola.
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="mt-8 rounded-md border border-gold/30 bg-gold/5 p-6 sm:p-8">
            <h3 className="text-2xl text-cream">
              Qué significa "100% personalizada" en la práctica
            </h3>
            <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-muted-foreground sm:grid-cols-2">
              <li>
                · El instructor elige la tabla según tu peso y estatura, no la que quede libre.
              </li>
              <li>· Si no nadas bien, la clase entera ocurre donde haces pie.</li>
              <li>· Si ya te paras, saltamos la teoría básica y trabajamos tu vicio concreto.</li>
              <li>
                · Si te cansas antes, se para y se descansa: nadie cuenta los minutos exactos.
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Instructores() {
  return (
    <section id="instructores" className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Instructores"
          title="Quién te va a enseñar"
          intro="No todos enseñan igual, y eso cambia mucho la primera clase. Lee los tres estilos y elige el que te encaje: puedes pedir instructor al reservar."
        />

        <HScroll className="mt-10 md:hidden">
          {instructores.map((ins, i) => (
            <Reveal key={ins.id} delay={i * 80} className="w-[85%] shrink-0 snap-start">
              <article className="flex h-full flex-col rounded-md border border-border bg-card/60 p-5">
                <div aria-hidden="true" className="h-44 w-full shrink-0 rounded-sm bg-white" />
                <p className="eyebrow mt-5">{ins.estiloTag}</p>
                <h3 className="mt-1 text-2xl text-cream">{ins.nombre}</h3>
                <p className="text-sm text-turquoise">{ins.rol}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ins.historia}</p>
                <details className="mt-4 group">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-gold">
                    Cómo enseña
                    <span className="float-right transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ins.estilo}</p>
                </details>
                <p className="mt-4 border-l-2 border-gold/50 pl-4 text-sm text-cream/90">
                  Encaja mejor con: {ins.mejorPara}
                </p>
              </article>
            </Reveal>
          ))}
        </HScroll>

        <div className="mt-10 hidden space-y-8 md:block">
          {instructores.map((ins, i) => (
            <Reveal key={ins.id} delay={i * 80}>
              <article
                className={cn(
                  "grid gap-8 rounded-md border border-border bg-card/60 p-7 md:grid-cols-[300px_1fr]",
                  i % 2 === 1 && "md:grid-cols-[1fr_300px]",
                )}
              >
                <div
                  aria-hidden="true"
                  className={cn("h-full w-full rounded-sm bg-white", i % 2 === 1 && "md:order-2")}
                />
                <div className={cn(i % 2 === 1 && "md:order-1")}>
                  <p className="eyebrow">{ins.estiloTag}</p>
                  <h3 className="mt-2 text-3xl text-cream">{ins.nombre}</h3>
                  <p className="mt-1 text-sm text-turquoise">{ins.rol}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {ins.historia}
                  </p>
                  <h4 className="mt-5 text-lg text-gold">Cómo enseña</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{ins.estilo}</p>
                  <p className="mt-4 border-l-2 border-gold/50 pl-4 text-sm text-cream/90">
                    Suele encajar mejor con: {ins.mejorPara}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Clase() {
  return (
    <section id="la-clase" className="section-pad bg-secondary/25">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Cómo es una clase"
          title="Dos horas, paso a paso"
          intro="De esas dos horas, entre 40 y 60 minutos son dentro del agua. El resto es preparación, lectura del mar y devolución final: es la parte que hace que la siguiente sesión rinda."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ol className="relative space-y-8 border-l border-border pl-7">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.titulo} delay={i * 90}>
                <span className="absolute -left-[7px] mt-2 block size-3 rounded-full bg-gold" />
                <p className="eyebrow">{t.hora}</p>
                <h3 className="mt-1 text-2xl text-cream">{t.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.texto}</p>
              </Reveal>
            ))}
          </ol>

          <HScroll className="md:grid-cols-1">
            <Reveal className="w-[85%] shrink-0 snap-start md:w-auto">
              <div className="h-full rounded-md border border-border bg-card/70 p-6">
                <h3 className="text-xl text-cream">Qué incluye</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Tabla, licra, instructor certificado en primeros auxilios y fotos de la sesión. En
                  clases de niños, además chaleco.
                </p>
              </div>
            </Reveal>
            <Reveal delay={90} className="w-[85%] shrink-0 snap-start md:w-auto">
              <div className="h-full rounded-md border border-border bg-card/70 p-6">
                <h3 className="text-xl text-cream">Qué debes traer</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Vestido de baño puesto, protector solar resistente al agua, toalla, agua y muda
                  seca. Deja en casa gafas, cadenas y reloj.
                </p>
              </div>
            </Reveal>
            <Reveal delay={180} className="w-[85%] shrink-0 snap-start md:w-auto">
              <div className="h-full rounded-md border border-terracotta/40 bg-terracotta/10 p-6">
                <h3 className="text-xl text-cream">Si el mar no está para clase</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  La decisión la toma el instructor la mañana misma y te avisamos por WhatsApp al
                  menos 2 horas antes. Puedes reprogramar para cualquier día dentro de los 60 días
                  siguientes, sin costo, o cambiar la sesión por paddle si el mar está plano. Si ya
                  pagaste y prefieres no reprogramar, se devuelve el 100%.
                </p>
              </div>
            </Reveal>
          </HScroll>
        </div>
      </div>
    </section>
  );
}

export function Planes() {
  return (
    <section id="planes" className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Planes y precios"
          title="Compara y decide tú"
          intro="No hay plan recomendado. Cada uno sirve para algo distinto; abajo está lo que incluye, cuánta atención recibes y para quién suele funcionar mejor."
        />

        <Reveal className="mt-12 hidden overflow-x-auto rounded-md border border-border lg:block">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-secondary/40">
                {[
                  "Plan",
                  "Precio",
                  "Duración",
                  "Personas por instructor",
                  "Incluye",
                  "Mejor para",
                  "",
                ].map((h) => (
                  <th
                    key={h}
                    className="border-b border-border px-4 py-4 text-[0.7rem] uppercase tracking-[0.16em] text-gold"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {planes.map((p) => (
                <tr key={p.id} className="align-top transition-colors hover:bg-card/60">
                  <td className="border-b border-border px-4 py-5 font-display text-lg text-cream">
                    {p.nombre}
                  </td>
                  <td className="border-b border-border px-4 py-5 text-cream">{p.precio}</td>
                  <td className="border-b border-border px-4 py-5 text-muted-foreground">
                    {p.duracion}
                  </td>
                  <td className="border-b border-border px-4 py-5 text-muted-foreground">
                    {p.ratio}
                  </td>
                  <td className="border-b border-border px-4 py-5 text-muted-foreground">
                    {p.incluye.join(", ")}
                  </td>
                  <td className="border-b border-border px-4 py-5 text-muted-foreground">
                    {p.paraQuien}
                  </td>
                  <td className="border-b border-border px-4 py-5">
                    <button
                      type="button"
                      onClick={() => selectPlan(p.id)}
                      className="whitespace-nowrap rounded-sm border border-gold px-4 py-2 text-xs uppercase tracking-[0.14em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
                    >
                      Reservar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <HScroll className="mt-10 sm:grid sm:grid-cols-2 sm:gap-5 sm:-mx-0 sm:px-0 sm:pb-0 lg:hidden">
          {planes.map((p, i) => (
            <Reveal key={p.id} delay={i * 70} className="w-[82%] shrink-0 snap-start sm:w-auto">
              <article className="flex h-full flex-col rounded-md border border-border bg-card/70 p-6">
                <h3 className="text-2xl text-cream">{p.nombre}</h3>
                <p className="mt-1 text-gold">{p.precio}</p>
                <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <div>
                    <dt className="text-cream/70">Duración</dt>
                    <dd>{p.duracion}</dd>
                  </div>
                  <div>
                    <dt className="text-cream/70">Personas por instructor</dt>
                    <dd>{p.ratio}</dd>
                  </div>
                  <div>
                    <dt className="text-cream/70">Incluye</dt>
                    <dd>{p.incluye.join(", ")}</dd>
                  </div>
                  <div>
                    <dt className="text-cream/70">Mejor para</dt>
                    <dd>{p.paraQuien}</dd>
                  </div>
                </dl>
                <button
                  type="button"
                  onClick={() => selectPlan(p.id)}
                  className="mt-6 rounded-sm border border-gold px-4 py-2.5 text-xs uppercase tracking-[0.14em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
                >
                  Reservar este plan
                </button>
              </article>
            </Reveal>
          ))}
        </HScroll>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="preguntas" className="section-pad bg-secondary/25">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Lo que casi todos preguntan antes de la primera clase"
        />
        <div className="mt-10 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-display text-xl text-cream">{f.q}</span>
                <span
                  className={cn(
                    "shrink-0 text-gold transition-transform duration-300",
                    open === i && "rotate-45",
                  )}
                >
                  +
                </span>
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300 ease-out",
                  open === i ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <p className="overflow-hidden text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const galeria = [
  { src: heroImg, alt: "Surfista con tabla turquesa caminando por la orilla al atardecer" },
  { src: playaImg, alt: "Muelle de Puerto Colombia visto desde la madera al atardecer" },
  { src: yogaImg, alt: "Grupo practicando yoga en la arena al amanecer junto a una tabla" },
];

export function Galeria() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="galeria" className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Galería"
          title="Días de clase"
          intro="Fotos del muelle, las tablas y la gente que pasa por aquí."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {galeria.map((g, i) => (
            <Reveal key={g.alt} delay={i * 60}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group block w-full overflow-hidden rounded-sm"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  width={800}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-5 animate-in fade-in duration-300"
          onClick={() => setActive(null)}
          role="presentation"
        >
          <button
            type="button"
            aria-label="Cerrar galería"
            className="absolute right-5 top-5 text-cream"
            onClick={() => setActive(null)}
          >
            <X className="size-6" />
          </button>
          <img
            src={galeria[active]!.src}
            alt={galeria[active]!.alt}
            className="max-h-[85vh] max-w-full rounded-sm object-contain"
          />
        </div>
      ) : null}
    </section>
  );
}

export function Extras() {
  return (
    <section id="actividades" className="section-pad bg-secondary/25">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Actividades extra" title="Más allá de la clase" />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
          <Reveal className="overflow-hidden rounded-md">
            <img
              src={yogaImg}
              alt="Sesión de yoga en la arena al amanecer antes de una clase de surf"
              width={1400}
              height={1000}
              loading="lazy"
              className="h-56 w-full object-cover sm:h-72 lg:h-full"
            />
          </Reveal>
          <HScroll className="md:grid-cols-1">
            <Reveal className="w-[85%] shrink-0 snap-start md:w-auto">
              <article className="h-full rounded-md border border-border bg-card/70 p-6">
                <h3 className="text-2xl text-cream">Yoga y Surf</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Una hora de yoga en la arena al amanecer y después la clase de agua. Grupos de
                  hasta 6 personas, dos sábados al mes. No hace falta experiencia previa en ninguna
                  de las dos cosas.
                </p>
              </article>
            </Reveal>
            <Reveal delay={90} className="w-[85%] shrink-0 snap-start md:w-auto">
              <article className="h-full rounded-md border border-border bg-card/70 p-6">
                <h3 className="text-2xl text-cream">Jornadas con fundaciones locales</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Cada cierto tiempo dictamos clases gratuitas para niños de Puerto Colombia junto a
                  fundaciones del municipio. Si quieres apadrinar cupos o prestar tablas,
                  escríbenos.
                </p>
              </article>
            </Reveal>
            <Reveal delay={180} className="w-[85%] shrink-0 snap-start md:w-auto">
              <article className="h-full rounded-md border border-border bg-card/70 p-6">
                <h3 className="text-2xl text-cream">Limpiezas de playa</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Una mañana al mes recogemos basura en el tramo del muelle antes de entrar al agua.
                  Abierto a cualquiera, se avisa por Instagram.
                </p>
              </article>
            </Reveal>
          </HScroll>
        </div>
      </div>
    </section>
  );
}

export function Testimonios() {
  return (
    <section id="testimonios" className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Testimonios" title="Lo que cuentan quienes ya vinieron" />
        <HScroll className="mt-10 md:grid-cols-2">
          {testimonios.map((t, i) => (
            <Reveal key={t.autor} delay={i * 80} className="w-[85%] shrink-0 snap-start md:w-auto">
              <figure className="h-full rounded-md border border-border bg-card/60 p-6">
                <Quote className="size-5 text-gold/70" />
                <blockquote className="mt-3 text-base leading-relaxed text-cream/90">
                  {t.texto}
                </blockquote>
                <figcaption className="mt-4 text-sm text-muted-foreground">
                  {t.autor} · {t.detalle}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </HScroll>
      </div>
    </section>
  );
}

export function Contacto() {
  return (
    <section id="contacto" className="section-pad bg-secondary/25">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Ubicación y contacto"
          title="Nos vemos en Kairos Surf School"
          intro={`Punto de encuentro: ${MEETING_POINT}. Escríbenos y te decimos cómo está el mar hoy.`}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="overflow-hidden rounded-md border border-border">
            <iframe
              title="Ubicación de Kairos Surf School en Puerto Colombia, Atlántico"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[260px] w-full sm:h-[360px]"
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="flex h-full flex-col justify-between rounded-md border border-border bg-card/70 p-7">
              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                  {MEETING_POINT}
                </p>
                <p>
                  Clases todos los días, según condiciones del mar. Reserva con al menos un día.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform duration-300 hover:scale-[1.02]"
                >
                  <MessageCircle className="size-4" /> Escríbenos por WhatsApp
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-cream/30 px-6 py-3.5 text-sm uppercase tracking-[0.14em] text-cream transition-colors hover:border-gold hover:text-gold"
                >
                  <Instagram className="size-4" /> @kairossurf.co
                </a>
                <a
                  href="#reserva"
                  className="inline-flex items-center justify-center rounded-sm border border-gold/50 px-6 py-3.5 text-sm uppercase tracking-[0.14em] text-gold transition-colors hover:bg-gold/10"
                >
                  Reserva tu clase
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Logo de Kairos Surf School"
            width={52}
            height={52}
            loading="lazy"
            className="size-13 rounded-full object-cover ring-1 ring-gold/40"
          />
          <div>
            <p className="font-display tracking-[0.18em] text-cream">KAIROS SURF SCHOOL</p>
            <p className="text-sm text-muted-foreground">Puerto Colombia, Atlántico · Colombia</p>
          </div>
        </div>
        <div className="flex items-center gap-5 text-sm text-muted-foreground">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold"
          >
            Instagram
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold"
          >
            WhatsApp
          </a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
