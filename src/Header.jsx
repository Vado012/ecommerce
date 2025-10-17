import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "./CartContext";

function Header({ onCartClick, setCurrentPage, setShowCart, setSearchTerm }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { cartItems } = useCart();
  const cartCount = cartItems.length;

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setShowCart(false);
    setOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      setSearchTerm(query);
      setCurrentPage("shop");
      setShowCart(false);
      setOpen(false);
    }
  };

  useEffect(() => {
    if (query.trim() === "") {
      setSearchTerm("");
      setCurrentPage("home");
    }
  }, [query, setCurrentPage, setSearchTerm]);

  // Animation variants
  const slideFromLeft = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 80 } },
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.3 } },
  };

  const searchSlide = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <header className="h-[60px] sticky top-0 z-50 bg-black/90 backdrop-blur-md text-white flex items-center justify-between px-4 md:px-10 shadow-md">
    
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => handleNavClick("home")}
      >
        <div className="bg-green-500 text-black font-extrabold text-xl h-8 w-8 rounded-full flex items-center justify-center">
          R
        </div>
        <h1 className="font-bold text-lg md:text-xl tracking-wide">
          Rois Collection
        </h1>
      </div>

     
      <motion.form
        onSubmit={handleSearch}
        variants={searchSlide}
        initial="hidden"
        animate="visible"
        className="hidden md:flex items-center bg-white rounded-full overflow-hidden w-[220px] md:w-[280px]"
      >
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-3 py-1 text-black text-sm outline-none"
        />
        <button
          type="submit"
          className="bg-green-500 px-3 py-1 text-black font-semibold hover:bg-green-600 transition"
        >
          search
        </button>
      </motion.form>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        <button onClick={() => handleNavClick("home")} className="hover:text-green-500 transition">Home</button>
        <button onClick={() => handleNavClick("shop")} className="hover:text-green-500 transition">Shop</button>
        <button onClick={() => handleNavClick("about")} className="hover:text-green-500 transition">About</button>
        <button onClick={() => handleNavClick("contact")} className="hover:text-green-500 transition">Contact</button>

        {/* Cart */}
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

      {/* Mobile Menu Button */}
      <button onClick={() => setOpen(!open)} className="md:hidden">
        {open ? <X className="text-2xl" /> : <Menu className="text-2xl" />}
      </button>

      {/* Mobile Menu Slide-in */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 left-0 h-[400px] w-[70%] sm:w-[60%] bg-black z-40 flex flex-col items-start gap-6 px-6 py-8 border-r border-gray-800 md:hidden"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white"
            >
              <X />
            </button>

            {/* Animated Search inside mobile nav */}
            <motion.form
              onSubmit={handleSearch}
              variants={searchSlide}
              initial="hidden"
              animate="visible"
              className="flex items-center bg-white rounded-full overflow-hidden w-full"
            >
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-3 py-1 text-black text-sm outline-none"
              />
              <button
                type="submit"
                className="bg-green-500 px-3 py-1 text-black font-semibold"
              >
                search
              </button>
            </motion.form>

            {/* Navigation links */}
            <button onClick={() => handleNavClick("home")} className="text-lg hover:text-green-500 transition">Home</button>
            <button onClick={() => handleNavClick("shop")} className="text-lg hover:text-green-500 transition">Shop</button>
            <button onClick={() => handleNavClick("about")} className="text-lg hover:text-green-500 transition">About</button>
            <button onClick={() => handleNavClick("contact")} className="text-lg hover:text-green-500 transition">Contact</button>
            <button onClick={onCartClick} className="text-lg hover:text-green-500 transition">Cart</button>
        
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;











