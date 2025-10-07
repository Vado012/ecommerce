import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Header";
import Home from "./Home";
import Men from "./Men";
import Shoe from "./Shoe";
import Watch from "./Watch";
import Bag from "./Bag";
import Cart from "./Cart";
import { CartProvider } from "./CartContext";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
     <App/>
    </CartProvider>
  </StrictMode>
);




