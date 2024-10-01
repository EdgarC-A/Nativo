import React from "react";

type ButtonAddToCartProps = {
  onClick: () => void; // función que se ejecutará al hacer clic en el botón
};

const ButtonAddToCart: React.FC<ButtonAddToCartProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 mt-4 text-white transition-all bg-blue-500 rounded-md hover:bg-blue-600"
    >
      Agregar al Carrito
    </button>
  );
};

export default ButtonAddToCart;
