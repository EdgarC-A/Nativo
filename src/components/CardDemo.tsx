"use client";
import { cn } from "../utils/cn";

export function CardDemo() {
  return (
    <div className="w-full max-w-xs p-2 ">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://ideogram.ai/assets/image/lossless/response/7GqYZScaSIuU3OM3Q1lkIw)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://img.freepik.com/foto-gratis/diseno-interior-moderno-cocina_23-2150771997.jpg?t=st=1727312242~exp=1727315842~hmac=168a08b1c5a45b9e51f3a55c26ee76c888327bee64a2d7d6d730f56494528e44&w=740)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://img.freepik.com/foto-gratis/diseno-interior-moderno-cocina_23-2150771997.jpg?t=st=1727312242~exp=1727315842~hmac=168a08b1c5a45b9e51f3a55c26ee76c888327bee64a2d7d6d730f56494528e44&w=740)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500 "
        )}
      >
        <div className="relative z-50 ">
          <h1 className="relative text-xl font-bold md:text-3xl text-gray-50">
            Vinagre Artezanal
          </h1>
          <p className="relative my-4 text-base font-normal text-gray-50">
            El vinagre artesanal aporta un sabor único y auténtico, realzando
            tus recetas con ingredientes naturales y sin aditivos.
          </p>
        </div>
      </div>
    </div>
  );
}
