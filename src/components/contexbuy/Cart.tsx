import { useContext } from "react";
import { CartContext } from "./CartContext"; // Asegúrate de que la ruta sea correcta
import Navbar from "../Navbar";

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
    <section>
      <div>
        <Navbar />
      </div>
      <div className="p-100">
        {cartItems.length === 0 ? (
          <p>No hay artículos en el carrito.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="relative flex items-center justify-between p-4 border-b top-20"
              >
                <div>
                  <h2 className="font-bold">{item.name}</h2>
                  <p>Cantidad: {item.quantity}</p>
                </div>
                <p className="font-semibold">{item.price} $</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Eliminar
                </button>
              </div>
            ))}
            <div className="relative flex justify-between p-4 font-bold top-20">
              <span>Total:</span>
              <span>{totalPrice} $</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartComponent;
