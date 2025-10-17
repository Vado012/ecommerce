import React, { useState } from "react";
import { useCart } from "./CartContext";
import { FaWhatsapp, FaCreditCard, FaMoneyBillWave } from "react-icons/fa";

function Cart({ setCurrentPage, setShowCart }) {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("delivery");

  
  const total =
    cartItems.length > 0
      ? cartItems
          .reduce(
            (total, item) =>
              total +
              parseFloat(item.price.replace("$", "")) * item.quantity,
            0
          )
          .toFixed(2)
      : "0.00";

 
  const message = `Hello! I want to order the following items:\n\n${cartItems
    .map((item) => `${item.name} - ${item.price} (Qty: ${item.quantity})`)
    .join("\n")}\n\nTotal: $${total} USD\nPayment Method: ${
    paymentMethod === "delivery" ? "Pay on Delivery" : "Online Payment"
  }`;

  const whatsappLink = `https://wa.me/2349037867037?text=${encodeURIComponent(
    message
  )}`;


  const handleOnlinePayment = () => {
    alert(
      "✅ Payment initialized! (In real setup, integrate Paystack/Flutterwave here.)"
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-green-600 text-center">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 mb-6 text-center">Your cart is empty 😢</p>
      ) : (
        <>
          
          <div className="w-full max-w-4xl grid gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 sm:w-20 sm:h-20 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h2 className="font-semibold text-lg text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-green-600 font-bold">{item.price}</p>
                    <p className="text-sm text-gray-600">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-3 sm:mt-0 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

       
          <div className="mt-6 w-full max-w-4xl flex flex-col sm:flex-row justify-between items-center bg-white rounded-xl shadow p-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              Total: <span className="text-green-600 font-bold">${total}</span>
            </h2>

            <button
              onClick={clearCart}
              className="mt-3 sm:mt-0 bg-black hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold transition"
            >
              Clear Cart
            </button>
          </div>

         
          <div className="mt-8 bg-white p-6 rounded-2xl shadow-md w-full max-w-3xl">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Choose Payment Method
            </h3>

            <div className="flex flex-col sm:flex-row gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="delivery"
                  checked={paymentMethod === "delivery"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="accent-green-600"
                />
                <FaMoneyBillWave className="text-green-600" />
                <span>Pay on Delivery</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="online"
                  checked={paymentMethod === "online"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="accent-green-600"
                />
                <FaCreditCard className="text-blue-600" />
                <span>Pay Online</span>
              </label>
            </div>

         
            {paymentMethod === "delivery" ? (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition"
              >
                <FaWhatsapp className="text-2xl" />
                Order via WhatsApp
              </a>
            ) : (
              <button
                onClick={handleOnlinePayment}
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
              >
                Proceed to Payment
              </button>
            )}
          </div>
        </>
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




