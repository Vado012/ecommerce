import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home({ setCurrentPage }) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.6, duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="relative w-full overflow-hidden mb-6">
      {/* 🔄 Slider Section */}
      <Slider {...settings}>
        {[
          { src: "cloth.jpg", alt: "Clothing" },
          { src: "shoe.jpg", alt: "Shoes" },
          { src: "watch.jpg", alt: "Watches" },
          { src: "bag.jpg", alt: "Bags" },
        ].map((item, i) => (
          <div key={i} className="relative">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-[250px] sm:h-[300px] md:h-[500px] lg:h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </Slider>

      {/* 🖋️ Text + Button Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          className="bg-black/60 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl text-white max-w-[90%] sm:max-w-[70%] md:max-w-[50%]"
        >
          <motion.h1
            variants={textVariants}
            className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3 leading-tight"
          >
            Rois Collections
          </motion.h1>

          <motion.h4
            variants={textVariants}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl mb-5 font-medium"
          >
            Discover Fashion, Style, and Comfort
          </motion.h4>

          <motion.button
            variants={buttonVariants}
            onClick={() => setCurrentPage("shop")}
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition duration-300 text-sm sm:text-base"
          >
            Shop Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;




