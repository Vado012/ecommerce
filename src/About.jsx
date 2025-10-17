import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

function About({ setCurrentPage }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace these with your actual EmailJS IDs
    const SERVICE_ID = "service_2vo0yde";
    const TEMPLATE_ID = "template_8ez1g2o";
    const PUBLIC_KEY = "YLzWOdqyiyiBlAV_W";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setIsSending(false);
        setSent(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      })
      .catch((err) => {
        setIsSending(false);
        alert("Something went wrong. Please try again later.");
        console.error("EmailJS Error:", err);
      });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-green-50 to-white px-6 py-16 flex flex-col items-center justify-center">
      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-green-600 mb-6">
          About Rois Collection
        </h1>
        <p className="max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed mb-6">
          Welcome to <span className="font-semibold text-green-600">Rois Collection</span> — your one-stop
          destination for stylish fashion, quality accessories, and trendy products.
          We offer high-quality items for men and women at affordable prices.
        </p>
        <p className="max-w-2xl mx-auto text-gray-600 text-base leading-relaxed">
          At Rois Collection, we believe fashion is more than clothing — it’s a lifestyle. Our mission
          is to bring you the latest designs in bags, shoes, clothing, and gadgets while ensuring
          every shopping experience is smooth, secure, and satisfying.
        </p>

        <div className="mt-8">
          <button
            onClick={() => setCurrentPage("shop")}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Shop Now
          </button>
        </div>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8"
      >
        <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            disabled={isSending}
            type="submit"
            className={`w-full ${
              isSending ? "bg-green-400" : "bg-green-600 hover:bg-green-700"
            } text-white font-semibold py-3 rounded-lg transition`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </motion.button>
        </form>

        {sent && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 text-center mt-4 font-semibold"
          >
            ✅ Message sent successfully!
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}

export default About;


