import React from "react";

function About() {
  return (
    <section className="max-w-xl mx-auto my-12">
      <div className="bg-[#fef9f3] rounded-2xl shadow-md p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-[#4a3f35] font-serif" style={{ fontFamily: 'Noto Serif JP, serif' }}>
          まめめについて
        </h2>
        <p className="text-[#4a3f35] leading-relaxed font-serif" style={{ fontFamily: 'Noto Serif JP, serif' }}>
          Vライバー「まめめ」です。BathTimeRadio名義で配信やBOOTH作品を展開中！<br />
          お風呂タイムのようにリラックスできる配信を目指しています。
        </p>
      </div>
    </section>
  );
}

export default About; 