import React from "react";
import { motion } from "framer-motion";
import { useCart } from "./CartContext";

function Shop({ searchTerm }) {
  const { addToCart } = useCart();


  const products = [
   
    { id: 1, name: "Baggy Jeans", price: "$25", image: "1.jpg", category: "clothes" },
    { id: 2, name: "Drawstring Elastic Jeans", price: "$40", image: "2.jpg", category: "clothes" },
    { id: 3, name: "Jacket for Men", price: "$70", image: "3.jpg", category: "clothes" },
    { id: 4, name: "Berrykey Men's Casual T-Shirt", price: "$50", image: "4.jpg", category: "clothes" },
    { id: 5, name: "Plain Wine Shorts", price: "$50", image: "5.jpg", category: "clothes" },
    { id: 6, name: "Men's Sport Tops", price: "$50", image: "6.jpg", category: "clothes" },
    { id: 7, name: "Action Shorts", price: "$50", image: "7.jpg", category: "clothes" },
    { id: 8, name: "Tactical Short Men", price: "$50", image: "8.jpg", category: "clothes" },
    { id: 9, name: "Men's Large Elastic Jeans", price: "$50", image: "yy.jpg", category: "clothes" },
    { id: 10, name: "Men's Stretch Jeans", price: "$50", image: "tt.jpg", category: "clothes" },
    { id: 11, name: "Pantalon Pour Femme Baggy Men", price: "$50", image: "pp.jpg", category: "clothes" },
    { id: 12, name: "Unisex Premium Top", price: "$23", image: "18.jpg", category: "clothes" },


    { id: 13, name: "Smart Silicone LED Digital Sports Watch", price: "$25", image: "41.jpg", category: "watch" },
    { id: 14, name: "POEDAGAR Men's Wristwatch", price: "$40", image: "42.jpg", category: "watch" },
    { id: 15, name: "Men's Fashion Sports Quartz Watch", price: "$70", image: "40.jpg", category: "watch" },
    { id: 16, name: "Men's Quartz Watch", price: "$50", image: "39.jpg", category: "watch" },
    { id: 17, name: "Men's Quartz Steel Band Watch", price: "$50", image: "38.jpg", category: "watch" },
    { id: 18, name: "Fngeen Top Luxury Mechanical Watch", price: "$50", image: "37.jpg", category: "watch" },
    { id: 19, name: "4-Piece Men's Watch Set", price: "$50", image: "36.jpg", category: "watch" },
    { id: 20, name: "Men Casual Quartz Watch", price: "$50", image: "35.jpg", category: "watch" },
    { id: 21, name: "Men's Business Quartz Watch", price: "$50", image: "34.jpg", category: "watch" },
    { id: 22, name: "Men's Waterproof Sport Watch", price: "$50", image: "33.jpg", category: "watch" },
    { id: 23, name: "Stone Iced Men's Wristwatch", price: "$50", image: "32.jpg", category: "watch" },
    { id: 24, name: "5-Piece Men's Watch & Bracelet Set", price: "$50", image: "31.jpg", category: "watch" },

   
    { id: 25, name: "Trendy Board Shoe", price: "$25", image: "30.jpg", category: "shoe" },
    { id: 26, name: "Men's Casual Board Shoes", price: "$40", image: "29.jpg", category: "shoe" },
    { id: 27, name: "Men's Casual Warrior Shoes", price: "$70", image: "28.jpg", category: "shoe" },
    { id: 28, name: "Unisex Premium Sneaker", price: "$50", image: "27.jpg", category: "shoe" },
    { id: 29, name: "Lug Sole Oxford Shoe", price: "$50", image: "26.jpg", category: "shoe" },
    { id: 30, name: "High-Quality Leather Shoe", price: "$50", image: "f25.jpg", category: "shoe" },
    { id: 31, name: "Men's Casual Oxford Shoe", price: "$50", image: "24.jpg", category: "shoe" },
    { id: 32, name: "Half Shoe", price: "$50", image: "23.jpg", category: "shoe" },
    { id: 33, name: "Men's Oxford Formal Shoe", price: "$50", image: "22.jpg", category: "shoe" },
    { id: 34, name: "Formal Italian Wedding Shoe", price: "$50", image: "21.jpg", category: "shoe" },
    { id: 35, name: "Men's Italian Wedding Shoe", price: "$50", image: "19.jpg", category: "shoe" },
    { id: 36, name: "Men's Casual Shoe Black", price: "$50", image: "20.jpg", category: "shoe" },

    
    { id: 37, name: "Men Laptop Bags", price: "$25", image: "54.jpg", category: "bag" },
    { id: 38, name: "Bro Toumi Backpack", price: "$40", image: "53.jpg", category: "bag" },
    { id: 39, name: "Smart Business Backpack with USB Port", price: "$70", image: "52.jpg", category: "bag" },
    { id: 40, name: "Unisex Leather Travel Backpack", price: "$50", image: "51.jpg", category: "bag" },
    { id: 41, name: "Business Office Briefcase", price: "$50", image: "50.jpg", category: "bag" },
    { id: 42, name: "Shoulder Bag", price: "$50", image: "49.jpg", category: "bag" },
    { id: 43, name: "Crossbody Bag Multi-layer Blue", price: "$50", image: "48.jpg", category: "bag" },
    { id: 44, name: "Casual Sports Shoulder Bag", price: "$50", image: "47.jpg", category: "bag" },
    { id: 45, name: "Shoulder Bag", price: "$50", image: "46.jpg", category: "bag" },
    { id: 46, name: "Messenger Bag Casual", price: "$50", image: "45.jpg", category: "bag" },
    { id: 47, name: "Men's Shoulder Crossbody Bag", price: "$50", image: "44.jpg", category: "bag" },
    { id: 48, name: "Casual Sling Sports Bag", price: "$50", image: "43.jpg", category: "bag" },
  ];

  
  const filteredProducts = products.filter((item) => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (
      item.name.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term)
    );
  });

  return (
    <div className="px-3 sm:px-6 md:px-10 lg:px-16 py-10 bg-gray-50 min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800"
      >
        {searchTerm ? `Search Results for "${searchTerm}"` : "🛍️ Welcome to Our Shop"}
      </motion.h1>

   
      <motion.div
        layout
        className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                type: "spring",
              }}
              whileHover={{ y: -5 }}
              className="bg-white shadow-md hover:shadow-2xl rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300"
            >
             
              <div className="bg-gray-100 flex items-center justify-center p-2">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-contain transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                />
              </div>

           
              <div className="p-3 sm:p-4 flex flex-col items-center text-center flex-grow">
                <h2 className="font-semibold text-sm sm:text-base md:text-lg text-gray-800 mb-1 line-clamp-2">
                  {item.name}
                </h2>
                <p className="text-green-600 font-bold mb-3 text-sm sm:text-base">
                  {item.price}
                </p>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => addToCart(item)}
                  className="bg-black hover:bg-green-600 text-white w-full sm:w-auto px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm transition"
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg mt-6">
            No products found.
          </p>
        )}
      </motion.div>
    </div>
  );
}

export default Shop;








