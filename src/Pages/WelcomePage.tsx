import { Link } from "react-router-dom";
import vid from "./img/nativo-cascajalbolivar.mp4";

const WelcomePage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden ">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 object-cover w-full h-full"
        src={vid} // Ruta del video que quieres usar
        autoPlay
        loop
        muted
      />

      {/* Overlay oscuro para mejorar la visibilidad del texto */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 "></div>

      {/* Contenido (botón en el centro) */}
      <div className="relative flex items-center justify-center w-full h-full">
        <Link to="/InicioPage">
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Explorar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
