import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Rois Collection</h2>
          <p className="text-gray-400 text-sm">
            Your one-stop shop for fashion and lifestyle products. Quality and style delivered to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-500 transition-colors">Home</a></li>
            <li><a href="/shop" className="hover:text-green-500 transition-colors">Shop</a></li>
            <li><a href="/about" className="hover:text-green-500 transition-colors">About</a></li>
            <li><a href="/contact" className="hover:text-green-500 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-green-500 transition-colors">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-green-500 transition-colors">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-green-500 transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-green-500 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to get the latest updates and offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded text-gray-900 flex-1"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors">
              Subscribe
            </button>
          </form>

          <div className="flex gap-4 mt-6 text-lg">
            <a href="#" aria-label="Facebook" className="hover:text-green-500 transition-colors"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="hover:text-green-500 transition-colors"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-green-500 transition-colors"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-green-500 transition-colors"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-12 border-t border-gray-800 pt-6">
        &copy; {new Date().getFullYear()} Rois Collection. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

