import React from "react";

type ButtonAddToCartProps = {
  onClick: () => void;
};

const ButtonAddToCart: React.FC<ButtonAddToCartProps> = ({ onClick }) => {
  return (
    <div className="text-center rounded-md bg-white/70">
      <button
        onClick={onClick}
        className="px-4 py-2 mt-4 text-white transition-all rounded-md hover:bg-white"
      >
        <img
          width="35"
          height="35"
          src="https://img.icons8.com/ios-filled/100/add-shopping-cart.png"
          alt="add-shopping-cart"
        />
      </button>
    </div>
  );
};

export default ButtonAddToCart;
