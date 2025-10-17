import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import Home from "./Home";
import Men from "./Men";
import Shoe from "./Shoe";
import Watch from "./Watch";
import Bag from "./Bag";
import Cart from "./Cart";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Shop from "./Shop";


function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showCart, setShowCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const pageVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, x: 80, transition: { duration: 0.4, ease: "easeIn" } },
  };

  const renderPage = () => {
    if (showCart)
      return (
        <motion.div key="cart" variants={pageVariants} initial="hidden" animate="visible" exit="exit">
          <Cart setShowCart={setShowCart} />
        </motion.div>
      );

    switch (currentPage) {
      case "shop":
        return (
          <motion.div key="shop" variants={pageVariants} initial="hidden" animate="visible" exit="exit">
            <Shop searchTerm={searchTerm} setCurrentPage={setCurrentPage} />
          </motion.div>
        );

      case "about":
        return (
          <motion.div key="about" variants={pageVariants} initial="hidden" animate="visible" exit="exit">
            <About setCurrentPage={setCurrentPage} />
          </motion.div>
        );

      case "contact":
        return (
          <motion.div key="contact" variants={pageVariants} initial="hidden" animate="visible" exit="exit">
            <Contact setCurrentPage={setCurrentPage} />
          </motion.div>
        );

     


      case "home":
      default:
        return (
          <motion.div key="home" variants={pageVariants} initial="hidden" animate="visible" exit="exit">
            <Home setCurrentPage={setCurrentPage} />
            <Men />
            <Shoe />
            <Watch />
            <Bag />
            <Footer />
          </motion.div>
        );
    }
  };

  return (
    <div>
      <Header
        onCartClick={() => setShowCart(!showCart)}
        setCurrentPage={setCurrentPage}
        setShowCart={setShowCart}
        setSearchTerm={setSearchTerm}
      />

      <AnimatePresence mode="wait">{renderPage()}</AnimatePresence>
    </div>
  );
}

export default App;









