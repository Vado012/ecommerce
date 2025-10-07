import React from "react";
import { useCart } from "./CartContext";
import { FaWhatsapp } from "react-icons/fa";

function Cart({ setCurrentPage, setShowCart }) {
  const { cartItems, removeFromCart, clearCart } = useCart();

  
  const message = `Hello! I want to order the following items:\n\n${cartItems
    .map((item) => `${item.name} - ${item.price} (Qty: ${item.quantity})`)
    .join("\n")}\n\nTotal: ${
    cartItems.length > 0
      ? cartItems
          .reduce((total, item) => total + parseFloat(item.price.replace("$", "")) * item.quantity, 0)
          .toFixed(2)
      : "0.00"
  } USD`;

  const whatsappLink = `https://wa.me/2349037867037?text=${encodeURIComponent(message)}`;
  

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-green-600">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 mb-6">Your cart is empty 😢</p>
      ) : (
        <>
          <div className="w-full max-w-3xl grid gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-green-600 font-bold">{item.price}</p>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={clearCart}
            className="mt-6 bg-black text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Clear Cart
          </button>
        </>
      )}

      
      {cartItems.length > 0 && (
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          <FaWhatsapp className="text-2xl" />
          Order via WhatsApp
        </a>
      )}

      
      <button
        onClick={() => {
          setShowCart(false);
          setCurrentPage("home");
        }}
        className="mt-10 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full font-semibold transition"
      >
        Back to Shop
      </button>
    </div>
  );
}

export default Cart;



