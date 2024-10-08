import { cn } from "../../../utils/cn";
// import ButtonBuy from "../button/ButtonBuy";
import ButtonAddToCart from "../../ButtonBuy";
import { useContext } from "react";
import { CartContext } from "../../contexbuy/CartContext";
import { AnimatedModalDemo } from "../../AnimatedModalDemo";

// Define la interfaz para el producto
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
}

export function Card5() {
  const cartContext = useContext(CartContext);

  // Asegúrate de que el contexto no sea undefined
  if (!cartContext) {
    throw new Error("Card3 must be used within a CartProvider");
  }

  const { addToCart } = cartContext;

  // Asegúrate de que el tipo del parámetro sea Product
  const handleAddToCart = (product: Product) => {
    addToCart(product);
    console.log("Producto agregado al carrito:", product);
  };

  return (
    <section className="flex flex-col justify-around mt-20 md:flex-col lg:flex-row">
      {/* Vinagre Original */}
      <div className="flex-1 mt-10 group/card md:mt-10">
        <div
          className={cn(
            "bg-center cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
            "bg-[url(https://ideogram.ai/assets/image/lossless/response/fQWC32C8QVCcGV6peilEjw)] bg-cover"
          )}
        >
          <div className="absolute top-0 left-0 w-full h-full transition duration-300 group-hover/card:bg-black opacity-60"></div>
          <div className="z-10 flex flex-row items-center space-x-4">
            <div className="flex flex-col ">
              <p className="relative z-10 text-base font-normal text-gray-50">
                Cascajal | Bolívar
              </p>
              <p className="text-sm text-gray-50">20,000$</p>
            </div>
          </div>
          <div className="text content">
            <h1 className="relative z-10 text-xl font-bold md:text-2xl text-gray-50">
              Aceite de minerales
            </h1>
            <p className="relative z-10 my-4 text-sm font-normal text-gray-50">
              Para un día soleado, hecho a mano de los mejores artesanos de
              Bolívar.
            </p>
            <div className="z-20">
              {/* <ButtonBuy /> */}
              <div className="relative">
                <ButtonAddToCart
                  onClick={() =>
                    handleAddToCart({
                      id: 7,
                      name: "Aceite de minerales",
                      price: 15000,
                      quantity: 1,
                      description: "Aceite extraido de algunas plantas",
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <AnimatedModalDemo />
        </div>
      </div>

      {/* Vinagre Picante */}
      <div className="flex-1 mt-10 group/card md:mt-10">
        <div
          className={cn(
            "bg-center cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
            "bg-[url(https://ideogram.ai/assets/image/lossless/response/Hr_TC2GBTb-YHFq40nUXlQ)] bg-cover"
          )}
        >
          <div className="absolute top-0 left-0 w-full h-full transition duration-300 group-hover/card:bg-black opacity-60"></div>
          <div className="z-10 flex flex-row items-center space-x-4">
            <div className="flex flex-col ">
              <p className="relative z-10 text-base font-normal text-gray-50">
                Cascajal | Bolívar
              </p>
              <p className="text-sm text-gray-50">21,000$</p>
            </div>
          </div>
          <div className="text content">
            <h1 className="relative z-10 text-xl font-bold md:text-2xl text-gray-50">
              Mantenga de cerdo
            </h1>
            <p className="relative z-10 my-4 text-sm font-normal text-gray-50">
              Un toque picante para tus comidas.
            </p>
            <div className="z-20">
              {/* <ButtonBuy /> */}
              <div className="relative">
                <ButtonAddToCart
                  onClick={() =>
                    handleAddToCart({
                      id: 8,
                      name: "Mantenga de cerdo",
                      price: 16000,
                      quantity: 1,
                      description: "Manteca extraida de la grasa del cerdo.",
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <AnimatedModalDemo />
        </div>
      </div>

      {/* Vinagre Mixto */}
      <div className="flex-1 mt-10 group/card md:mt-10">
        <div
          className={cn(
            "bg-center cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
            "bg-[url(https://ideogram.ai/assets/image/lossless/response/HExftPYiSPmIKKDMqxBX1g)] bg-cover"
          )}
        >
          <div className="absolute top-0 left-0 w-full h-full transition duration-300 group-hover/card:bg-black opacity-60"></div>
          <div className="z-10 flex flex-row items-center space-x-4">
            <div className="flex flex-col ">
              <p className="relative z-10 text-base font-normal text-gray-50">
                Cascajal | Bolívar
              </p>
              <p className="text-sm text-gray-50">23,000$</p>
            </div>
          </div>
          <div className="text content">
            <h1 className="relative z-10 text-xl font-bold md:text-2xl text-gray-50">
              Aceite de achote
            </h1>
            <p className="relative z-10 my-4 text-sm font-normal text-gray-50">
              Para un día soleado, hecho a mano de los mejores artesanos de
              Bolívar.
            </p>
            <div className="z-20">
              {/* <ButtonBuy /> */}
              <div className="relative">
                <ButtonAddToCart
                  onClick={() =>
                    handleAddToCart({
                      id: 9,
                      name: "Aceite de achote",
                      price: 16000,
                      quantity: 1,
                      description: "Aceite de achote de alta calidad.",
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <AnimatedModalDemo />
        </div>
      </div>
    </section>
  );
}
