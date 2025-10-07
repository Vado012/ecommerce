import React, { useState } from "react";
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


function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showCart, setShowCart] = useState(false);

  const renderPage = () => {
    if (showCart) return <Cart />;

    switch (currentPage) {
      case "about":
        return <About setCurrentPage={setCurrentPage} />;
      case "contact":
        return <Contact setCurrentPage={setCurrentPage} />;
      case "home":
      default:
        return (
          <>
            <Home />
            <Men />
            <Shoe />
            <Watch />
            <Bag />
            <Footer />
            
          </>
        );
    }
  };

  return (
    <div>
      <Header
        onCartClick={() => setShowCart(!showCart)}
        setCurrentPage={setCurrentPage}
        setShowCart={setShowCart}
      />
      {renderPage()}
    </div>
  );
}

export default App;



