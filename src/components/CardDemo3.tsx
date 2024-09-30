"use client";
import { cn } from "../utils/cn";

export function CardDemo3() {
  return (
    <div className="w-full max-w-xs p-2 ">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://ideogram.ai/assets/image/lossless/response/IQzsPwjKRn209DYo7dJ7aQ)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://img.freepik.com/foto-gratis/hombre-ocupado-tareas-domesticas-paisaje_23-2151741293.jpg?t=st=1727312374~exp=1727315974~hmac=fb6a48b9929df10b844062b2431937686fb741a5aa875748874f25c95f760c30&w=740)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://img.freepik.com/foto-gratis/hombre-ocupado-tareas-domesticas-paisaje_23-2151741293.jpg?t=st=1727312374~exp=1727315974~hmac=fb6a48b9929df10b844062b2431937686fb741a5aa875748874f25c95f760c30&w=740)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500 "
        )}
      >
        <div className="relative z-50 ">
          <h1 className="relative text-xl font-bold md:text-3xl text-gray-50">
            Granos de Campo
          </h1>
          <p className="relative my-4 text-base font-normal text-gray-50">
            Los granos traídos directamente del campo ofrecen frescura y
            calidad, llenando tus platos de sabor natural y auténtico.
          </p>
        </div>
      </div>
    </div>
  );
}
