import React from "react";

function Gallery() {
  return (
    <section className="max-w-2xl mx-auto my-12">
      <h2 className="text-xl font-semibold mb-4 text-blue-600">配信作品ギャラリー</h2>
      <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
        <img
          src="/images/radio-scene.jpg"
          alt="配信スクショ"
          className="rounded-xl shadow-md w-full sm:w-80 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
}

export default Gallery; 