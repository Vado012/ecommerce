import React from "react";

function Contact({ setCurrentPage }) {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-green-600 mb-6">
        Contact Us
      </h1>

      <p className="max-w-2xl text-gray-700 text-lg leading-relaxed mb-8">
        We'd love to hear from you! Whether you have questions about our products,
        orders, or collaborations — we’re here to help.
      </p>

      <p className="text-gray-600 mb-6">
        Email: <span className="text-green-600 font-semibold">support@roiscollection.com</span>
      </p>

      <button
        onClick={() => setCurrentPage("home")}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition"
      >
        Back to Home
      </button>
    </section>
  );
}

export default Contact;
