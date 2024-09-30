import { HoverEffect } from "./ui/Card-hover/Card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl px-8 mx-auto">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Accesorios Ancestrales ",
    description:
      "Explora nuestra colección de artículos ancestrales, hechos a mano por artesanos del campo. Cada pieza refleja la rica herencia cultural y la dedicación de sus creadores. ¡Lleva la esencia del campo a tu hogar con estos únicos y auténticos accesorios.",
    link: "https://stripe.com",
  },
  {
    title: "Aceites Naturales",
    description:
      "Variedad de aceites para cocinar, extraídos de manera artesanal.",
    link: "https://netflix.com",
  },
  {
    title: "Vinagres Artesanales",
    description:
      "Diferentes tipos de vinagres, elaborados con ingredientes frescos del campo.",
    link: "https://google.com",
  },
  {
    title: "Granos del Campo",
    description:
      "Maíz, frijoles y otras legumbres cultivadas de forma natural.",
    link: "https://meta.com",
  },
  {
    title: "Mantecas y Grasas Naturales",
    description:
      "Manteca de cerdo y otros productos grasos, elaborados artesanalmente.",
    link: "https://amazon.com",
  },
  {
    title: "Dulces y Conservas",
    description:
      "Productos endulzados o conservas hechas con recetas tradicionales.",
    link: "https://microsoft.com",
  },
];
