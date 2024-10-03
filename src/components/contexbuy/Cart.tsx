import { useContext } from "react";
import { CartContext } from "./CartContext"; // Asegúrate de que la ruta sea correcta
import Navbar from "../Navbar";
import Pagos from "./Pagos";

const CartComponent = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("CartComponent must be used within a CartProvider");
  }

  const { cartItems, removeFromCart } = context;

  // Calcular el precio total
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="dark:bg-customDarkBlue dark:text-white">
      <div>
        <Navbar />
      </div>
      <div className="relative p-100 top-20 dark:text-white dark:bg-customDarkBlue">
        <div className="relative z-10 text-center dark:bg-customDarkBlue top-24">
          <h1 className="text-3xl dark:text-white">NATIVO</h1>
        </div>
        {cartItems.length === 0 ? (
          <h1 className="ml-8 text-2xl font-semibold ">
            No hay artículos en el carrito.
          </h1>
        ) : (
          <div className="">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="relative flex items-center justify-between p-4 border-b dark:text-white dark:bg-customDarkBlue top-20"
              >
                <div className="flex-1">
                  <h2 className="font-bold">{item.name}</h2>
                  <p>Cantidad: {item.quantity}</p>
                </div>
                <div className="flex-1">
                  <p className="font-semibold ">{item.price} $</p>
                </div>
                <div className="">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-white transition duration-200 ease-linear bg-black rounded-full dark:text-black dark:bg-white bg- hover:text-blue-500 "
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
            <div className="relative flex justify-between p-4 font-bold bg-slate-300 dark:text-white dark:bg-customDarkBlue top-20">
              <span>Total:</span>
              <span>{totalPrice} $</span>
              <button
                // onClick={}
                className="p-2 text-white transition duration-200 ease-linear bg-blue-500 rounded-full dark:text-black dark:bg-white bg- hover:text-black "
              >
                Comprar
              </button>
            </div>
          </div>
        )}
      </div>
      <section className="relative top-52">
        <Pagos />
      </section>
    </section>
  );
};

export default CartComponent;
