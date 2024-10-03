import Navbar from "../components/Navbar";
import banner from "./img/cascajal-bolivar.jpg";
import "./AcercaPage.css";
import { FocusCardsDemo } from "../components/ui/Focus-Cards/FocusCardsDemo";
import Formulario from "../components/Form";

export default function AcercaDe() {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div
        className="relative w-full h-auto overflow-hidden bg-gray-200"
        id="banner"
      >
        <div className="absolute z-10 p-4 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <p className="text-xs text-white/80 font-extralight">
            CASCAJAL | BOLIVAR
          </p>
          <h1 className="text-6xl font-bold text-white/80">
            Acerca de Nosotros
          </h1>
          <p className="mt-5 text-base font-normal text-white/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam
            molestiae veritatis
          </p>
        </div>

        <img src={banner} alt="" className="min-h-96" id="imgbanner" />

        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <article className="bg-[#272727] text-center p-14">
        <h1 className="text-3xl text-white ">NATIVO</h1>
        <p className="text-white">
          Dedes el corregiemiento de cascajal bolivar ubicado a unos minutos de
          magangue bolivar , nos encontramos con personas con talentos muy
          interesantes{" "}
        </p>
      </article>
      <section className="bg-[#272727] ">
        <FocusCardsDemo />
      </section>
      <section className="bg-[#272727] p-10 ">
        <div className="p-10 text-center">
          <p className="text-white">
            Si deseas adquirir uno de nuestros productos no dudes en estar en
            contacto con nosotros
          </p>
          <h1 className="text-3xl font-semibold text-white">CONTACTAME</h1>
        </div>
        <Formulario />
      </section>
    </section>
  );
}
