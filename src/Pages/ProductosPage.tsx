import { CarouselDefault } from "../components/Carousel";
import Navbar from "../components/Navbar";
import { Card3 } from "../components/ui/3D-Card/Card3";
import NavarCategoria from "../components/Navbar-Categoria";
export default function Productos() {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <article>
        <CarouselDefault />
      </article>

      <section className="p-20 dark:bg-customDarkBlue">
        <NavarCategoria />
        <Card3 />
      </section>
    </div>
  );
}
