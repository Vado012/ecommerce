import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import emailjs from "emailjs-com";

function Contact({ setCurrentPage }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_2vo0yde", // your service ID
        "template_k6zn4on", // your template ID
        formData,
        "YLzWOdqyiyiBlAV_W" // your public key
      )
      .then(() => {
        setSending(false);
        setSent(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      })
      .catch((err) => {
        setSending(false);
        alert("Something went wrong. Please try again later.");
        console.error("EmailJS Error:", err);
      });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center justify-center px-6 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-green-600 mb-4">
          Contact Us
        </h1>
        <p className="max-w-2xl text-gray-700 text-lg leading-relaxed mx-auto">
          We'd love to hear from you! Whether you have questions about our
          products, orders, or collaborations — we’re here to help.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8 space-y-5"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Subject of your message"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Type your message..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          ></textarea>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          disabled={sending}
          type="submit"
          className={`w-full ${
            sending ? "bg-green-400" : "bg-green-600 hover:bg-green-700"
          } text-white font-semibold py-3 rounded-lg transition`}
        >
          {sending ? "Sending..." : "Send Message"}
        </motion.button>

        {sent && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 text-center font-semibold mt-4"
          >
            ✅ Message sent successfully!
          </motion.p>
        )}
      </motion.form>

      {/* Map */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="w-full max-w-3xl mt-12 rounded-2xl overflow-hidden shadow-lg"
      >
        <iframe
          title="Rois Collection Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2030405270385!2d3.352!3d6.604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92dc!2sLagos%20Nigeria!5e0!3m2!1sen!2sng!4v1234567890"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>

      {/* Social Media Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="flex space-x-6 mt-10"
      >
        <a
          href="https://wa.me/2349037867037"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:text-green-700 text-3xl transition"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://instagram.com/roiscollection"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-600 text-3xl transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://facebook.com/roiscollection"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 text-3xl transition"
        >
          <FaFacebook />
        </a>
        <a
          href="https://tiktok.com/@roiscollection"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-700 text-3xl transition"
        >
          <FaTiktok />
        </a>
      </motion.div>

      {/* Back to Home */}
      <button
        onClick={() => setCurrentPage("home")}
        className="mt-12 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold transition"
      >
        Back to Home
      </button>
    </section>
  );
}

export default Contact;

