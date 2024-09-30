import { useState } from "react";

export function CarouselDefault() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      src: "https://ideogram.ai/assets/image/lossless/response/cvpDkkC8S5KflixM3CZm0Q",
      alt: "Slide 1",
      caption: "Carteras y Bolsos Artezanales",
      description:
        "Este bolso único, hecho a mano con paja y cuero de alta calidad.",
      buttonText: "Adquirir",
      buttonLink: "#slide1",
    },
    {
      src: "https://ideogram.ai/assets/image/lossless/response/qK4-0OYkTBOsx_1Sp0eYYw",
      alt: "Slide 2",
      caption: "Sombreros Damas y Caballeros",
      description:
        "Este sombrero artesanal, hecho a mano con paja y algodón, combina elegancia y tradición. ",
      buttonText: "Adquirir",
      buttonLink: "#slide1",
    },
    {
      src: "https://kaiho.com.co/wp-content/uploads/2024/08/artesaniasIndigenas-85-scaled.jpg",
      alt: "Slide 3",
      caption: "Abanicos Artesanales ",
      description:
        "Este abanico artesanal, elaborado con palma y tela pintada a mano.",
      buttonText: "Adquirir",
      buttonLink: "#slide3",
    },
  ];

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-full mx-auto ">
      <div className="relative overflow-hidden rounded-lg shadow-lg ">
        <div className="relative h-80 md:h-[42rem]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-all duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={slide.src}
                className="object-cover w-full h-full "
                alt={slide.alt}
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              {/* Texto y Botón */}
              <div className="absolute inset-0 flex flex-col items-start justify-center ml-20 ">
                <h2 className="text-2xl font-bold text-white md:text-4xl">
                  {slide.caption}
                </h2>
                <p className="mt-2 text-lg text-white md:text-xl">
                  {slide.description}
                </p>
                <a
                  href={slide.buttonLink}
                  className="inline-block px-6 py-2 mt-4 text-lg font-semibold text-white transition duration-200 ease-linear rounded-full bg-black/60 hover:bg-blue-500 "
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores */}
        <div className="absolute z-30 flex space-x-2 -translate-x-1/2 bottom-5 left-1/2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentIndex
                  ? "bg-gray-400"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            ></button>
          ))}
        </div>

        {/* Botón anterior */}
        <button
          onClick={handlePrev}
          className="absolute z-40 flex items-center justify-center w-10 h-10 transition rounded-full top-1/2 left-3 bg-gray-200/50 hover:bg-gray-300 focus:outline-none"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Botón siguiente */}
        <button
          onClick={handleNext}
          className="absolute z-40 flex items-center justify-center w-10 h-10 transition rounded-full top-1/2 right-3 bg-gray-200/50 hover:bg-gray-300 focus:outline-none"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
