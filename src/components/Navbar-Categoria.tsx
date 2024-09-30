import { useState } from "react";
import logo from "./img/lg-bl.png";
import logo2 from "./img/lg-ng.png";

export default function NavbarCategoria() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="hidden h-8 dark:block"
              alt="Artezania-Cascajal-Bolivar"
            />
            <img
              src={logo2}
              className="block h-8 dark:hidden"
              alt="Artesania-Cascajal-Bolivar"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Categorias
            </span>
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${isOpen ? "flex" : "hidden"} w-full`}
            id="navbar-hamburger"
          >
            <ul className="flex flex-col mt-4 font-medium rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 text-white bg-blue-700 rounded dark:bg-blue-600"
                  aria-current="page"
                >
                  Vinagres Artezanales
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Granos y Legumbres
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Aceites del Campo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Accesorios Artezanales
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
