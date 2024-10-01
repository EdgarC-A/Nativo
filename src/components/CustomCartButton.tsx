import { useContext } from "react";
import { CartContext } from "./contexbuy/CartContext"; // Ajusta la ruta según tu estructura
import { Link } from "react-router-dom";

const CustomCartButton = () => {
  const cartContext = useContext(CartContext);

  // Asegúrate de que el contexto no sea undefined
  if (!cartContext) {
    throw new Error("CustomCartButton must be used within a CartProvider");
  }

  const { cartItems } = cartContext;

  // Calcula el total de productos en el carrito
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Link to="/Cart">
      <button
        type="button"
        className="relative inline-flex items-center p-1 text-sm font-medium text-center text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      >
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/fluency/48/shopping-cart.png"
          alt="shopping-cart"
        />
        <span className="sr-only">Carrito</span>
        {/* Muestra el contador */}
        {totalItems > 0 && (
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            {totalItems}
          </div>
        )}
      </button>
    </Link>
  );
};

export default CustomCartButton;
