"use client";

// import { useRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { cn } from "../utils/cn";
import { DirectionAwareHover } from "../components/ui/Card-Direction/DirectionAwareHover";

export function DirectionAwareHoverDemo2() {
  const imageUrl =
    "https://img.freepik.com/foto-gratis/inspiracion-vaquera-sombrero-cuerda_23-2149484763.jpg?t=st=1727473225~exp=1727476825~hmac=3903f61955b4f25b3fe89e7fe75ea39c9bcd01a06c104aed8b6bbc0d4231787c&w=1380";
  return (
    <section>
      <div className="h-[35rem] relative  flex items-center  ">
        <DirectionAwareHover imageUrl={imageUrl}>
          <p className="text-xl font-bold">In the mountains</p>
          <p className="text-sm font-normal">$1299 / night</p>
        </DirectionAwareHover>
      </div>
    </section>
  );
}
