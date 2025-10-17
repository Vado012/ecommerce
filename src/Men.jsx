import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "./CartContext"; 

function Men() {
  const { addToCart } = useCart(); 
  const [selectedItem, setSelectedItem] = useState(null);

  const menProducts = [
    { id: 1, name: "Baggy jeans", price: "$25", image: "1.jpg" },
    { id: 2, name: "DrawString Elastic jeans", price: "$40", image: "2.jpg" },
    { id: 3, name: "Jacket for men", price: "$70", image: "3.jpg" },
    { id: 4, name: "Berrykey men's casual business T-shirt", price: "$50", image: "4.jpg" },
    { id: 5, name: "Plain wine short", price: "$50", image: "5.jpg" },
    { id: 6, name: "Men's sport Tops", price: "$50", image: "6.jpg" },
    { id: 7, name: "Action short", price: "$50", image: "7.jpg" },
    { id: 8, name: "Tactical short men", price: "$50", image: "8.jpg" },
    { id: 9, name: "Men's large Elastic jean", price: "$50", image: "yy.jpg" },
    { id: 10, name: "Men's stretch jean", price: "$50", image: "tt.jpg" },
    { id: 11, name: "Pantalon pour femme baggy men", price: "$50", image: "pp.jpg" },
    { id: 12, name: "Unisex premium Top", price: "$23", image: "18.jpg" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const card = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="py-10 px-4 sm:px-6 md:px-10 bg-gray-50">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-center md:text-left"
      >
        Men Wears
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 justify-items-center"
      >
        {menProducts.map((item) => (
          <motion.div
            key={item.id}
            variants={card}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedItem(item)}
            className="bg-white shadow-md hover:shadow-xl cursor-pointer transition-transform duration-300 rounded-xl overflow-hidden w-full max-w-[160px] sm:max-w-[200px] md:max-w-[230px]"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-[150px] sm:h-[180px] md:h-[200px] w-full object-cover"
            />
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm sm:text-base md:text-lg">{item.name}</h3>
              <p className="text-green-600 font-bold text-sm sm:text-base">{item.price}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); 
                  addToCart(item); 
                }}
                className="mt-2 bg-black text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-green-600 transition"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl p-5 sm:p-8 max-w-[400px] w-[90%] text-center"
            >
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-[250px] object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{selectedItem.name}</h2>
              <p className="text-green-600 font-semibold text-lg mb-4">{selectedItem.price}</p>
              <motion.button
                onClick={() => {
                  addToCart(selectedItem);
                  setSelectedItem(null);
                }}
                whileHover={{ backgroundColor: "#16a34a", scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-5 py-2 rounded-lg mr-2"
              >
                Add to Cart
              </motion.button>
              <motion.button
                whileHover={{ backgroundColor: "#dc2626", scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-300 text-black px-5 py-2 rounded-lg"
                onClick={() => setSelectedItem(null)}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Men;



