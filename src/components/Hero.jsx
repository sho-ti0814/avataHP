import React from "react";

function Hero() {
  return (
    <section className="flex flex-col items-center py-14 bg-[#f5f0e6]">
      <div className="bg-[#fef9f3] rounded-2xl shadow-md p-6 flex flex-col items-center">
        <img
          src="/images/mame-face.png"
          alt="まめめ立ち絵"
          className="w-40 h-40 rounded-full shadow mb-6 border-4 border-[#e8d3b3] object-cover"
        />
        <h1 className="text-4xl font-bold text-[#4a3f35] font-serif tracking-wide mb-2" style={{ fontFamily: 'Noto Serif JP, serif' }}>
          BathTimeRadio
        </h1>
        <p className="text-base text-[#4a3f35] font-serif" style={{ fontFamily: 'Noto Serif JP, serif' }}>
          配信者「まめめ」の活動紹介ページ
        </p>
      </div>
    </section>
  );
}

export default Hero; 