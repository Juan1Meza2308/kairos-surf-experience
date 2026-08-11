import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { PillButton } from "./Pill";
import { WHATSAPP_NUMBER, instructores, planes } from "./data";
import { cn } from "@/lib/utils";

const franjas = [
  { id: "amanecer", label: "6:00 – 8:00 a.m.", nota: "Mar más ordenado y menos gente" },
  { id: "manana", label: "8:00 – 10:00 a.m.", nota: "Buena luz para fotos" },
  { id: "tarde", label: "3:00 – 5:00 p.m.", nota: "Suele entrar más viento" },
  { id: "atardecer", label: "5:00 – 7:00 p.m.", nota: "Menos viento, atardecer" },
];

const niveles = [
  "Nunca me he subido a una tabla",
  "Ya me paré alguna vez",
  "Remo y elijo mis olas",
];

type Datos = {
  plan: string;
  instructor: string;
  fecha: string;
  franja: string;
  nombre: string;
  contacto: string;
  nivel: string;
  edad: string;
  notas: string;
};

/* Los campos de una línea son píldoras; el textarea recupera esquinas de
   tarjeta más abajo con `rounded-2xl` (tailwind-merge resuelve el conflicto). */
const inputClass =
  "w-full rounded-full border border-input bg-background/60 px-4 py-2.5 text-sm text-cream outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold";

export function Booking() {
  const [step, setStep] = useState(0);
  const [d, setD] = useState<Datos>({
    plan: "",
    instructor: "Sin preferencia",
    fecha: "",
    franja: "",
    nombre: "",
    contacto: "",
    nivel: "",
    edad: "",
    notas: "",
  });

  useEffect(() => {
    const handler = (e: Event) => {
      const planId = (e as CustomEvent<string>).detail;
      const plan = planes.find((p) => p.id === planId);
      if (plan) {
        setD((prev) => ({ ...prev, plan: plan.nombre }));
        setStep(0);
      }
    };
    window.addEventListener("kairos:select-plan", handler);
    return () => window.removeEventListener("kairos:select-plan", handler);
  }, []);

  const set = (k: keyof Datos, v: string) => setD((prev) => ({ ...prev, [k]: v }));

  const stepValid = [
    Boolean(d.plan),
    Boolean(d.fecha && d.franja),
    Boolean(d.nombre.trim() && d.contacto.trim() && d.nivel),
    true,
  ][step];

  const mensaje = encodeURIComponent(
    [
      "Hola Kairos, quiero reservar una clase 🌊",
      `Plan: ${d.plan}`,
      `Instructor: ${d.instructor}`,
      `Fecha: ${d.fecha}`,
      `Franja: ${d.franja}`,
      `Nombre: ${d.nombre}`,
      `Contacto: ${d.contacto}`,
      `Nivel: ${d.nivel}`,
      d.edad ? `Edad (menor de edad): ${d.edad}` : "",
      d.notas ? `Notas: ${d.notas}` : "",
    ]
      .filter(Boolean)
      .join("\n"),
  );

  const steps = ["Plan e instructor", "Fecha y hora", "Tus datos", "Confirmación"];

  return (
    <section id="reserva" className="section-pad bg-secondary/25">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading
          eyebrow="Reserva"
          title="Reserva tu clase en cuatro pasos"
          intro="No hay pago en línea. Al terminar armamos el mensaje con tus datos y lo abrimos en WhatsApp para confirmar cupo y condiciones del mar de ese día."
        />

        <Reveal className="mt-10 rounded-2xl border border-border bg-card/80 p-5 shadow-[var(--shadow-soft)] sm:p-8">
          <ol className="mb-8 flex flex-wrap gap-2">
            {steps.map((s, i) => (
              <li
                key={s}
                className={cn(
                  "flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.68rem] uppercase tracking-[0.14em] transition-colors",
                  i === step
                    ? "border-gold text-gold"
                    : i < step
                      ? "border-turquoise/50 text-turquoise"
                      : "border-border text-muted-foreground/60",
                )}
              >
                <span className="flex size-4 items-center justify-center text-[0.65rem]">
                  {i < step ? <Check className="size-3" /> : i + 1}
                </span>
                {s}
              </li>
            ))}
          </ol>

          <div key={step} className="animate-in fade-in slide-in-from-bottom-3 duration-500">
            {step === 0 ? (
              <div className="space-y-8">
                <div>
                  <p className="mb-3 text-sm text-muted-foreground">Elige el plan</p>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {planes.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => set("plan", p.nombre)}
                        className={cn(
                          "rounded-2xl border p-4 text-left transition-all duration-300 hover:-translate-y-0.5",
                          d.plan === p.nombre
                            ? "border-gold bg-gold/10"
                            : "border-border bg-background/40 hover:border-gold/50",
                        )}
                      >
                        <span className="block font-display text-lg text-cream">{p.nombre}</span>
                        <span className="mt-1 block text-xs text-muted-foreground">{p.precio}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Elige instructor (opcional, según disponibilidad)
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {["Sin preferencia", ...instructores.map((i) => i.nombre)].map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => set("instructor", n)}
                        className={cn(
                          "rounded-full border px-4 py-3 text-left text-sm transition-all duration-300 hover:-translate-y-0.5",
                          d.instructor === n
                            ? "border-turquoise bg-turquoise/10 text-cream"
                            : "border-border bg-background/40 text-muted-foreground hover:border-turquoise/50",
                        )}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}

            {step === 1 ? (
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label htmlFor="fecha" className="mb-3 block text-sm text-muted-foreground">
                    Fecha deseada
                  </label>
                  <input
                    id="fecha"
                    type="date"
                    value={d.fecha}
                    min={new Date().toISOString().slice(0, 10)}
                    onChange={(e) => set("fecha", e.target.value)}
                    className={inputClass}
                  />
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    La fecha queda sujeta a confirmación: si el mar no está en condiciones esa
                    mañana, te avisamos mínimo 2 horas antes y reprogramamos sin costo.
                  </p>
                </div>
                <div>
                  <p className="mb-3 text-sm text-muted-foreground">Franja horaria</p>
                  <div className="space-y-2">
                    {franjas.map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => set("franja", f.label)}
                        className={cn(
                          "flex w-full items-baseline justify-between gap-3 rounded-full border px-4 py-3 text-left transition-colors",
                          d.franja === f.label
                            ? "border-gold bg-gold/10"
                            : "border-border bg-background/40 hover:border-gold/50",
                        )}
                      >
                        <span className="text-sm text-cream">{f.label}</span>
                        <span className="text-xs text-muted-foreground">{f.nota}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}

            {step === 2 ? (
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="nombre" className="mb-2 block text-sm text-muted-foreground">
                    Nombre completo
                  </label>
                  <input
                    id="nombre"
                    value={d.nombre}
                    maxLength={80}
                    onChange={(e) => set("nombre", e.target.value)}
                    className={inputClass}
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="contacto" className="mb-2 block text-sm text-muted-foreground">
                    WhatsApp o correo
                  </label>
                  <input
                    id="contacto"
                    value={d.contacto}
                    maxLength={80}
                    onChange={(e) => set("contacto", e.target.value)}
                    className={inputClass}
                    placeholder="+57 ..."
                  />
                </div>
                <div>
                  <p className="mb-2 text-sm text-muted-foreground">Tu nivel hoy</p>
                  <div className="space-y-2">
                    {niveles.map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => set("nivel", n)}
                        className={cn(
                          "w-full rounded-full border px-4 py-2.5 text-left text-sm transition-colors",
                          d.nivel === n
                            ? "border-gold bg-gold/10 text-cream"
                            : "border-border bg-background/40 text-muted-foreground hover:border-gold/50",
                        )}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-5">
                  <div>
                    <label htmlFor="edad" className="mb-2 block text-sm text-muted-foreground">
                      Edad (solo si el alumno es menor de 18)
                    </label>
                    <input
                      id="edad"
                      inputMode="numeric"
                      value={d.edad}
                      maxLength={2}
                      onChange={(e) => set("edad", e.target.value.replace(/\D/g, ""))}
                      className={inputClass}
                      placeholder="Ej. 9"
                    />
                  </div>
                  <div>
                    <label htmlFor="notas" className="mb-2 block text-sm text-muted-foreground">
                      Algo que debamos saber (lesiones, miedo al agua, no sabes nadar)
                    </label>
                    <textarea
                      id="notas"
                      value={d.notas}
                      maxLength={400}
                      rows={3}
                      onChange={(e) => set("notas", e.target.value)}
                      className={cn(inputClass, "resize-none rounded-2xl")}
                    />
                  </div>
                </div>
              </div>
            ) : null}

            {step === 3 ? (
              <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
                <dl className="divide-y divide-border rounded-2xl border border-border bg-background/40 px-4">
                  {[
                    ["Plan", d.plan],
                    ["Instructor", d.instructor],
                    ["Fecha", d.fecha],
                    ["Franja", d.franja],
                    ["Nombre", d.nombre],
                    ["Contacto", d.contacto],
                    ["Nivel", d.nivel],
                    ["Edad", d.edad],
                    ["Notas", d.notas],
                  ]
                    .filter(([, v]) => v)
                    .map(([k, v]) => (
                      <div key={k} className="flex gap-4 py-3 text-sm">
                        <dt className="w-28 shrink-0 text-muted-foreground">{k}</dt>
                        <dd className="text-cream">{v}</dd>
                      </div>
                    ))}
                </dl>
                <div className="flex flex-col justify-between gap-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Al enviar se abre WhatsApp con este mensaje ya escrito. Un instructor te
                    responde con la disponibilidad real de esa franja y el punto exacto de
                    encuentro. El pago se hace el mismo día, antes de entrar al agua.
                  </p>
                  <PillButton
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`}
                    variant="solid"
                    size="lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="size-4" />
                    Enviar por WhatsApp
                  </PillButton>
                </div>
              </div>
            ) : null}
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-cream disabled:opacity-30"
            >
              <ArrowLeft className="size-4" /> Atrás
            </button>
            {step < 3 ? (
              <PillButton
                variant="outline"
                size="md"
                onClick={() => setStep((s) => Math.min(3, s + 1))}
                disabled={!stepValid}
                className="border-gold/60 text-gold hover:bg-gold hover:text-primary-foreground"
              >
                Continuar <ArrowRight className="size-4" />
              </PillButton>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
