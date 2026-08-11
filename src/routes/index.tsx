import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/kairos/Nav";
import { Booking } from "@/components/kairos/Booking";
import {
  Clase,
  Contacto,
  Deporte,
  Extras,
  Faq,
  Footer,
  Galeria,
  Hero,
  Instructores,
  Planes,
  Playa,
  Testimonios,
} from "@/components/kairos/Sections";

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
      { name: "twitter:card", content: "summary_large_image" },
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
मैं: undefined,
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
        <Booking />
        <Galeria />
        <Extras />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
