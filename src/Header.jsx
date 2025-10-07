import React, { useState } from "react";
import { FaXbox, FaShoppingCart } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "./CartContext";

function Header({ onCartClick, setCurrentPage, setShowCart }) {
  const [open, setOpen] = useState(false);
  const { cartItems } = useCart();
  const cartCount = cartItems.length;

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setShowCart(false);
    setOpen(false);
  };

  return (
    <header className="h-[60px] sticky top-0 z-50 bg-black/90 backdrop-blur-md text-white flex items-center justify-between px-6 md:px-10 shadow-md">
      
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick("home")}>
        <FaXbox className="text-green-500 text-3xl" />
        <h1 className="font-bold text-lg md:text-xl tracking-wide">
          Rois Collection
        </h1>
      </div>

      
      <nav className="hidden md:flex items-center gap-8">
        <button onClick={() => handleNavClick("home")} className="hover:text-green-500 transition">Home</button>
        <button onClick={() => handleNavClick("about")} className="hover:text-green-500 transition">About</button>
        <button onClick={() => handleNavClick("contact")} className="hover:text-green-500 transition">Contact</button>

        
        <button
          onClick={onCartClick}
          className="relative flex items-center hover:text-green-500 transition"
        >
          <FaShoppingCart className="text-2xl" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      </nav>

      
      <button onClick={() => setOpen(!open)} className="md:hidden">
        {open ? <X className="text-2xl" /> : <Menu className="text-2xl" />}
      </button>

      
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[60px] left-0 w-full bg-black flex flex-col items-center gap-6 py-6 md:hidden border-t border-gray-800"
          >
            <button onClick={() => handleNavClick("home")} className="hover:text-green-500 transition">Home</button>
            <button onClick={() => handleNavClick("about")} className="hover:text-green-500 transition">About</button>
            <button onClick={onCartClick} className="hover:text-green-500 transition">Cart</button>
            <button onClick={() => handleNavClick("contact")} className="hover:text-green-500 transition">Contact</button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;





