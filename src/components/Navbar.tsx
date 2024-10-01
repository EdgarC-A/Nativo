import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "./img/lg-ng.png";
import logo2 from "./img/lg-bl.png";
import ThemeToggleButton from "./ThemeToggleButton";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("bg-white");
      } else {
        setBgColor("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`fixed left-0 right-0 z-20 transition-colors duration-300 ${bgColor} dark:bg-customDarkBlue`}
      >
        <div className="px-2 max-w-7xl sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className={`${isMenuOpen ? "hidden" : "block"} w-6 h-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className={`${isMenuOpen ? "block" : "hidden"} w-6 h-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
              <div className="flex items-center flex-shrink-0">
                <img
                  className="block w-auto h-12 dark:hidden"
                  src={logo}
                  alt="Nativo-CascajalBolivar"
                />
                <img
                  className="hidden w-auto h-12 dark:block"
                  src={logo2}
                  alt="Nativo-CascajalBolivar"
                />
              </div>
              <div className="relative">
                <ThemeToggleButton />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink
                    to="/InicioPage"
                    className="px-3 py-2 text-sm font-medium text-black transition duration-200 ease-linear rounded-md hover:bg-gray-700 hover:text-white dark:text-white"
                  >
                    Inicio
                  </NavLink>
                  <NavLink
                    to="/AcercaDePage"
                    className="px-3 py-2 text-sm font-medium text-black transition duration-200 ease-linear rounded-md hover:bg-gray-700 hover:text-white dark:text-white"
                  >
                    Acerca de
                  </NavLink>
                  <NavLink
                    to="/ProductosPage"
                    className="px-3 py-2 text-sm font-medium text-black transition duration-200 ease-linear rounded-md hover:bg-gray-700 hover:text-white dark:text-white"
                  >
                    Productos
                  </NavLink>
                  <NavLink
                    to="/ContactoPage"
                    className="px-3 py-2 text-sm font-medium text-black transition duration-200 ease-linear rounded-md hover:bg-gray-700 hover:text-white dark:text-white"
                  >
                    Contacto
                  </NavLink>
                  <NavLink
                    to="/Cart" // Enlace al carrito
                    className="px-3 py-2 text-sm font-medium text-black transition duration-200 ease-linear rounded-md hover:bg-gray-700 hover:text-white dark:text-white"
                  >
                    Carrito
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/InicioPage"
              className="block px-3 py-2 text-base font-medium text-black rounded-md dark:text-white"
            >
              Inicio
            </NavLink>
            <NavLink
              to="/AcercaDePage"
              className="block px-3 py-2 text-base font-medium rounded-md dark:text-white hover:bg-gray-700 hover:text-white"
            >
              Acerca de
            </NavLink>
            <NavLink
              to="/ProductosPage"
              className="block px-3 py-2 text-base font-medium text-black rounded-md dark:text-white hover:bg-gray-700 hover:text-white"
            >
              Productos
            </NavLink>
            <NavLink
              to="/ContactoPage"
              className="block px-3 py-2 text-base font-medium text-black rounded-md dark:text-white hover:bg-gray-700 hover:text-white"
            >
              Contacto
            </NavLink>
            <NavLink
              to="/Cart" // Enlace al carrito en la vista móvil
              className="block px-3 py-2 text-base font-medium text-black rounded-md dark:text-white hover:bg-gray-700 hover:text-white"
            >
              Carrito
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
