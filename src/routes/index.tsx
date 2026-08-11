import { lazy, Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/kairos/Nav";
import { Hero } from "@/components/kairos/Hero";
import {
  Clase,
  Contacto,
  Deporte,
  Extras,
  Faq,
  Footer,
  Galeria,
  Instructores,
  Planes,
  Playa,
  Testimonios,
} from "@/components/kairos/Sections";

const Booking = lazy(() =>
  import("@/components/kairos/Booking").then((m) => ({ default: m.Booking })),
);

const title = "Clases de surf en Puerto Colombia | Kairos Surf School";
const description =
  "Escuela de surf y paddle en Puerto Colombia, Atlántico. Clases 100% personalizadas para todas las edades y niveles: precios, instructores y cómo es realmente el mar aquí.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Surfista tomando una ola de espuma en agua turquesa en Puerto Colombia",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsActivityLocation",
          name: "Kairos Surf School",
          description,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Puerto Colombia",
            addressRegion: "Atlántico",
            addressCountry: "CO",
          },
          areaServed: "Puerto Colombia, Atlántico, Colombia",
          sameAs: ["https://instagram.com/kairossurf.co"],
          slogan: "¡Vive la experiencia de surfear!",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Playa />
        <Deporte />
        <Instructores />
        <Clase />
        <Planes />
        <Faq />
        <Suspense fallback={null}>
          <Booking />
        </Suspense>
        <Galeria />
        <Extras />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
