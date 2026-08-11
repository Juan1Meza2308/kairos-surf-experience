import type { ComponentProps, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* Todo elemento interactivo del sitio es una píldora. Antes esta cadena de
   clases estaba copiada a mano en Nav, Hero, Planes, Contacto, Footer y
   Booking; aquí vive una sola vez. */
const pill = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold uppercase " +
    "tracking-[0.14em] whitespace-nowrap transition-all duration-300 " +
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold " +
    "motion-safe:hover:-translate-y-0.5",
  {
    variants: {
      variant: {
        /* CTA principal: dorado de marca. Legible sobre foto clara y oscura. */
        solid: "bg-gold text-primary-foreground hover:bg-gold-bright",
        /* Relleno con la tinta del contexto — el "BOOK NOW" de la referencia. */
        ink: "bg-foreground text-background hover:opacity-90",
        /* Contorno que hereda el color del contexto. */
        outline: "border border-current/40 hover:border-gold hover:text-gold",
        glass: "glass-panel hover:border-gold/50",
      },
      size: {
        sm: "px-4 py-2 text-[0.7rem]",
        md: "px-6 py-3 text-[0.78rem]",
        lg: "px-7 py-3.5 text-sm",
      },
    },
    defaultVariants: { variant: "solid", size: "md" },
  },
);

type PillButtonProps = VariantProps<typeof pill> & {
  children: ReactNode;
  className?: string;
  /* Con href renderiza un <a>; sin él, un <button>. */
  href?: string;
  onClick?: ComponentProps<"button">["onClick"];
  target?: string;
  rel?: string;
  "aria-label"?: string;
  disabled?: boolean;
};

export function PillButton({
  children,
  className,
  variant,
  size,
  href,
  onClick,
  target,
  rel,
  disabled,
  "aria-label": ariaLabel,
}: PillButtonProps) {
  const classes = cn(pill({ variant, size }), className);

  if (href !== undefined) {
    return (
      <a href={href} className={classes} target={target} rel={rel} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={cn(classes, disabled && "cursor-not-allowed opacity-50")}
    >
      {children}
    </button>
  );
}

/* Píldora informativa o de filtro: los chips de servicios del hero, las
   etiquetas de estilo de cada instructor y los distintivos de los planes. */
const chip = cva(
  "inline-flex items-center gap-2 rounded-full font-sans whitespace-nowrap transition-all duration-300",
  {
    variants: {
      variant: {
        outline: "border border-current/35 hover:border-gold hover:text-gold",
        glass: "glass-panel",
        ink: "bg-foreground text-background",
        gold: "border border-gold/45 text-gold",
      },
      size: {
        sm: "px-3 py-1 text-[0.68rem] tracking-[0.12em] uppercase",
        md: "px-4 py-2 text-[0.8rem]",
      },
      interactive: { true: "cursor-pointer motion-safe:hover:-translate-y-0.5", false: "" },
    },
    defaultVariants: { variant: "outline", size: "md", interactive: false },
  },
);

type ChipProps = VariantProps<typeof chip> & {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export function Chip({ children, className, variant, size, onClick }: ChipProps) {
  const classes = cn(chip({ variant, size, interactive: Boolean(onClick) }), className);

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={cn(
          classes,
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
        )}
      >
        {children}
      </button>
    );
  }

  return <span className={classes}>{children}</span>;
}

/* Botón circular de red social — las cápsulas de la esquina del hero. */
const iconCircle = cva(
  "inline-flex size-11 items-center justify-center rounded-full transition-all duration-300 " +
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold " +
    "motion-safe:hover:-translate-y-0.5",
  {
    variants: {
      variant: {
        glass: "glass-panel hover:border-gold/60 hover:text-gold",
        ink: "bg-foreground text-background hover:opacity-90",
        outline: "border border-current/40 hover:border-gold hover:text-gold",
      },
    },
    defaultVariants: { variant: "glass" },
  },
);

export function IconCircle({
  children,
  href,
  label,
  variant,
  className,
}: VariantProps<typeof iconCircle> & {
  children: ReactNode;
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(iconCircle({ variant }), className)}
    >
      {children}
    </a>
  );
}
