import { CardDemo } from "../components/CardDemo";
import { AuroraBackgroundDemo } from "../components/ui/Aurora-component";
import { CardDemo2 } from "../components/CardDemo2";
import { CardDemo3 } from "../components/CardDemo3";
import { CardHoverEffectDemo } from "../components/CardHoverEffectDemo";
import Testimonios from "../components/Testimonials";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function Inicio() {
  return (
    <div className="dark:bg-customDarkBlue">
      <section>
        <div>
          <Navbar />
        </div>
        <AuroraBackgroundDemo />
      </section>

      <article className="flex flex-col p-10 border-b border-white co bg-black/90 dark:bg-customDarkBlue md:flex-col lg:flex-row ">
        <div className="flex flex-col justify-center flex-1 min-h-max ">
          <h1 className="text-2xl text-center text-white ">Acerca de </h1>
        </div>
        <div className="flex-1">
          <p className="text-center text-white">
            En Nativo, ofrecemos productos de cocina y accesorios de alta
            calidad, traídos directamente del campo. Nuestros sazonadores,
            especias y aceites naturales son 100% libres de aditivos,
            garantizando un sabor auténtico en cada plato. Descubre la
            diferencia y transforma tus recetas con nosotros.
          </p>
        </div>
      </article>
      <header className="flex p-10 dark:bg-customDarkBlue ">
        <div className="flex-1 dark:bg-customDarkBlue">
          <p className="text-sm font-medium text-white dark:bg-customDarkBlue">
            POPULAR
          </p>
          <h1 className="text-xl font-semibold text-white dark:bg-customDarkBlue">
            Nuestros Productos mas populares
          </h1>
        </div>
        <div className="flex-1 dark:bg-customDarkBlue">
          <a href="/ProductosPage">
            <h1 className="text-xl font-semibold text-right text-white transition duration-200 ease-linear dark:bg-customDarkBlue hover:text-blue-500">
              Explore todo
            </h1>
          </a>
        </div>
      </header>
      <section className="flex flex-col justify-around md:flex-col lg:flex-row min-h-max dark:bg-customDarkBlue">
        <div className="flex justify-center min-h-max ">
          {" "}
          <CardDemo />
        </div>
        <div className="flex justify-center min-h-max ">
          {" "}
          <CardDemo2 />
        </div>
        <div className="flex justify-center min-h-max">
          {" "}
          <CardDemo3 />
        </div>
      </section>
      <article className="flex justify-center p-5 mt-20 text-center text-white min-h-max dark:bg-customDarkBlue">
        <div className="">
          <h1 className="text-3xl font-semibold text-black dark:text-white ">
            CATEGORIAS
          </h1>
          <p className="text-lg text-black font-extralight dark:text-white ">
            Desde accesorios artezanales propios de la cultura cascajalera hasta
            aceites, especias, frutas, endulzantes naturales
          </p>
        </div>
      </article>
      <div className="dark:bg-customDarkBlue">
        <CardHoverEffectDemo />
      </div>
      <section>
        <Testimonios />
      </section>
      <Footer />
    </div>
  );
}
