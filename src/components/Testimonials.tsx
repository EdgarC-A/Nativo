import logo from "./img/lg-ng.png";
import logo2 from "./img/lg-bl.png";

export default function Testimonios() {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row ">
      <section className="relative px-6 py-24 overflow-hidden bg-white isolate sm:py-32 lg:px-8 dark:bg-customDarkBlue ">
        <div className=" absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="dark:bg-customDarkBlue  absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="max-w-2xl mx-auto lg:max-w-4xl ">
          <img alt="" src={logo2} className="hidden h-12 mx-auto dark:block" />
          <img src={logo} alt="" className="block h-12 mx-auto dark:hidden" />
          <figure className="mt-10 ">
            <blockquote className="text-xl font-semibold leading-8 text-center text-gray-900 sm:text-2xl sm:leading-9">
              <p className="font-light dark:text-white">
                “Compré el aceite de cocina natural y es increíble! El sabor es
                mucho más intenso que cualquier otro aceite que he probado.
                Definitivamente volveré a comprar más productos de esta tienda.
                ¡Recomendada al 100%.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="w-10 h-10 mx-auto rounded-full"
              />
              <div className="flex items-center justify-center mt-4 space-x-3 text-base">
                <div className="font-light text-gray-900 dark:text-white">
                  Judith Castellano
                </div>
                <svg
                  width={3}
                  height={3}
                  viewBox="0 0 2 2"
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div className="font-light text-gray-600 dark:text-white">
                  Cartagena-Bolivar
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="relative px-6 py-24 overflow-hidden bg-white isolate sm:py-32 lg:px-8 dark:bg-customDarkBlue ">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="dark:bg-customDarkBlue absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="max-w-2xl mx-auto lg:max-w-4xl">
          <img alt="" src={logo2} className="hidden h-12 mx-auto dark:block" />
          <img src={logo} alt="" className="block h-12 mx-auto dark:hidden" />
          <figure className="mt-10">
            <blockquote className="text-xl font-semibold leading-8 text-center text-gray-900 sm:text-2xl sm:leading-9">
              <p className="font-light dark:text-white">
                “Adquirí algunos granos y especias, y debo decir que la calidad
                es excepcional. Se nota que son productos frescos y artesanales.
                Mis comidas han mejorado mucho desde que los empecé a usar.
                ¡Estoy muy contento con mi compra.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="w-10 h-10 mx-auto rounded-full"
              />
              <div className="flex items-center justify-center mt-4 space-x-3 text-base">
                <div className="font-light text-gray-900 dark:text-white">
                  Mauricio Villamar
                </div>
                <svg
                  width={3}
                  height={3}
                  viewBox="0 0 2 2"
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div className="font-light text-gray-600 dark:text-white">
                  Bogota D.C-Colombia
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="relative px-6 py-24 overflow-hidden bg-white isolate sm:py-32 lg:px-8 dark:bg-customDarkBlue">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="dark:bg-customDarkBlue absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="max-w-2xl mx-auto lg:max-w-4xl">
          <img alt="" src={logo2} className="hidden h-12 mx-auto dark:block" />
          <img src={logo} alt="" className="block h-12 mx-auto dark:hidden" />
          <figure className="mt-10">
            <blockquote className="text-xl font-semibold leading-8 text-center text-gray-900 sm:text-2xl sm:leading-9">
              <p className="font-light dark:text-white">
                “Los vinagres artesanales que compré son simplemente deliciosos.
                Le dan un toque único a mis ensaladas y platos. Además, el envío
                fue rápido y la presentación del paquete era hermosa. Sin duda,
                seguiré comprando aquí.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="w-10 h-10 mx-auto rounded-full"
              />
              <div className="flex items-center justify-center mt-4 space-x-3 text-base">
                <div className="font-light text-gray-900 dark:text-white">
                  Patricia Cuadrado
                </div>
                <svg
                  width={3}
                  height={3}
                  viewBox="0 0 2 2"
                  aria-hidden="true"
                  className="fill-gray-900 dark:text-white"
                >
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div className="font-light text-gray-600 dark:text-white">
                  Carmen de Bolivar-Colombia
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}
