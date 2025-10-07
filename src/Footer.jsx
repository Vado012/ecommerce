import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">Rois Collection</h1>
        </div>

        
        <div className="flex gap-6">
          <a href="#" className="hover:text-green-500 transition">Home</a>
          <a href="#" className="hover:text-green-500 transition">About</a>
          <a href="#" className="hover:text-green-500 transition">Contact</a>
        </div>

        
        <div className="flex gap-4 text-lg">
          <a href="#" className="hover:text-green-500 transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-green-500 transition"><FaTwitter /></a>
          <a href="#" className="hover:text-green-500 transition"><FaInstagram /></a>
        </div>
      </div>

      
      <div className="text-center text-gray-400 text-sm mt-6">
        &copy; {new Date().getFullYear()} Rois Collection. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
