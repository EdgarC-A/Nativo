import { useState } from "react";
import { CarouselDefault } from "../components/Carousel";
import Navbar from "../components/Navbar";
import NavbarCategoria from "../components/Navbar-Categoria";
import VinagresArtezanales from "./CategoriasProd/VinagresArtezanales";
import AceitesNaturales from "./CategoriasProd/AceitesNaturales";
import Granos from "./CategoriasProd/Granos";
import Accesorios from "./CategoriasProd/Accesorios";
import { Card3 } from "../components/ui/3D-Card/Card3";
import { Card4 } from "../components/ui/3D-Card/Card4";
import { Card5 } from "../components/ui/3D-Card/Card5";
import { Card6 } from "../components/ui/3D-Card/Card6";

export default function Productos() {
  const [componenteSeleccionado, setComponenteSeleccionado] =
    useState<React.ReactNode>(null);

  const handleCategoriaClick = (categoria: string) => {
    switch (categoria) {
      case "vinagres":
        setComponenteSeleccionado(<VinagresArtezanales />);
        break;
      case "aceites":
        setComponenteSeleccionado(<AceitesNaturales />);
        break;
      case "granos":
        setComponenteSeleccionado(<Granos />);
        break;
      case "accesorios":
        setComponenteSeleccionado(<Accesorios />);
        break;
      default:
        setComponenteSeleccionado(null);
    }
  };

  return (
    <div>
      <section>
        <Navbar />
      </section>
      <article>
        <CarouselDefault />
      </article>

      <section className="p-20 dark:bg-customDarkBlue">
        <NavbarCategoria onCategoriaClick={handleCategoriaClick} />
        <div>
          {componenteSeleccionado ? (
            componenteSeleccionado
          ) : (
            <div>
              <h1 className="text-2xl">
                Seleccione una categoría para ver los productos.
              </h1>
              <Card3 />
              <Card4 />
              <Card5 />
              <Card6 />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
