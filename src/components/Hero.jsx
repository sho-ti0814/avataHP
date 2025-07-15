import React from "react";

function Hero() {
  return (
    <section className="flex flex-col items-center py-12 bg-white">
      <img
        src="/images/mame-face.png"
        alt="まめめ立ち絵"
        className="w-40 h-40 rounded-full shadow-lg mb-6 border-4 border-blue-100 object-cover"
      />
      <h1 className="text-4xl font-bold text-blue-700 font-[M_PLUS_Rounded_1c] tracking-wide mb-2">
        BathTimeRadio
      </h1>
      <p className="text-base text-gray-500">配信者「まめめ」の活動紹介ページ</p>
    </section>
  );
}

export default Hero; 