import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(delay);
  return (
    <Tag ref={ref as never} data-visible={visible} className={cn("reveal", className)}>
      {children}
    </Tag>
  );
}

/* `size="display"` cambia el serif por la grotesca pesada del hero, para las
   secciones que aguantan un título con más peso visual. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  size = "default",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  size?: "default" | "display";
}) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={cn(
          "mt-3",
          size === "display"
            ? "display-md text-[2rem] sm:text-5xl md:text-6xl"
            : "text-3xl leading-tight sm:text-4xl md:text-5xl",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p>
      ) : null}
    </Reveal>
  );
}
