import React from "react";

function TwitterEmbed() {
  return (
    <section className="flex flex-col items-center mt-4">
      <h2 className="text-xl font-semibold mb-2">X（旧Twitter）</h2>
      <a
        href="https://x.com/your_x_account" // ←ここを実際のアカウントに変更してください
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition"
      >
        X（旧Twitter）で最新情報を見る
      </a>
    </section>
  );
}

export default TwitterEmbed; 