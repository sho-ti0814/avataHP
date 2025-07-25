import React from "react";

function About() {
  return (
    <section className="max-w-xl mx-auto my-12">
      <div className="bg-[#fef9f3] rounded-2xl shadow-md p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-[#4a3f35] font-serif" style={{ fontFamily: 'Noto Serif JP, serif' }}>
          まめめについて
        </h2>
        <p className="text-[#4a3f35] leading-relaxed font-serif" style={{ fontFamily: 'Noto Serif JP, serif' }}>
          まめめは、心にそっと寄り添う声を届ける配信者。<br />
          ちょっと疲れた夜、ふと寂しくなった時、<br />
          あなたの耳にやさしく届くのは、低くてあたたかな声。<br />
          REALITYで配信中の「BathTimeRadio」では、<br />
          お風呂の中でも聴ける、まったり雑談とささやき声で<br />
          あなただけの癒しの時間をお届けします。
        </p>
      </div>
    </section>
  );
}

export default About; 