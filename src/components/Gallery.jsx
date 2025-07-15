import React from "react";

function Gallery() {
  return (
    <section className="max-w-2xl mx-auto my-12 bg-gradient-to-b from-[#f5f0e6] to-[#e8d3b3] rounded-2xl p-8">
      <h2 className="text-xl font-semibold mb-4 text-[#4a3f35] font-serif" style={{ fontFamily: 'Noto Serif JP, serif' }}>
        配信作品ギャラリー
      </h2>
      <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
        <div className="bg-[#fef9f3] rounded-2xl shadow-md p-4">
          <img
            src="/images/radio-scene.jpg"
            alt="配信スクショ"
            className="rounded-xl w-full sm:w-80 object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default Gallery; 