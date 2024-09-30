"use client";
import { cn } from "../utils/cn";

export function CardDemo2() {
  return (
    <div className="w-full max-w-xs p-2 ">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://ideogram.ai/assets/image/lossless/response/fQWC32C8QVCcGV6peilEjw)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://img.freepik.com/foto-gratis/paisaje-vinedos-naturaleza-vides_23-2151514914.jpg?t=st=1727312146~exp=1727315746~hmac=e278b95e438d27bfcda009a19c23fc6803f88bc099133073da2ea78ff18413ab&w=740)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://img.freepik.com/foto-gratis/paisaje-vinedos-naturaleza-vides_23-2151514914.jpg?t=st=1727312146~exp=1727315746~hmac=e278b95e438d27bfcda009a19c23fc6803f88bc099133073da2ea78ff18413ab&w=740)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500 "
        )}
      >
        <div className="relative z-50 ">
          <h1 className="relative text-xl font-bold md:text-3xl text-gray-50">
            Aceites Naturalez
          </h1>
          <p className="relative my-4 text-base font-normal text-gray-50">
            Los aceites artesanales y naturales elevan el sabor de tus platos,
            ofreciendo pureza y salud en cada gota.
          </p>
        </div>
      </div>
    </div>
  );
}
