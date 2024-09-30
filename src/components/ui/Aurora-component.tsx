import { motion } from "framer-motion";
import { AuroraBackground } from "../ui/3D-Card/AuroraBackground";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center gap-4 px-4"
      >
        <div className="text-3xl font-bold text-center md:text-7xl dark:text-white">
          Bienvenidos a Nativo
        </div>
        <div className="py-4 text-base text-center font-extralight md:text-4xl dark:text-neutral-200">
          Traemos productos del campo ,totalmente naturales y artezanales
          propios de nuestra cultura.
        </div>
        <button className="px-4 py-2 text-white bg-black rounded-full dark:bg-white w-fit dark:text-black">
          Debug now
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
