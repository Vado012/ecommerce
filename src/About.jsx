import React from "react";

function About() {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-green-600 mb-6">
        About Rois Collection
      </h1>

      <p className="max-w-2xl text-gray-700 text-lg leading-relaxed mb-8">
        Welcome to <span className="font-semibold text-green-600">Rois Collection</span> —
        your one-stop destination for stylish fashion, quality accessories, and trendy products.
        We pride ourselves on offering high-quality items for men and women at affordable prices.
      </p>

      <p className="max-w-2xl text-gray-600 text-base leading-relaxed">
        At Rois Collection, we believe fashion is a lifestyle. Our mission is to bring you
        the latest designs in bags, shoes, clothing, and gadgets while ensuring every shopping
        experience is smooth, secure, and satisfying.  
      </p>

      <div className="mt-10">
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition">
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default About;
