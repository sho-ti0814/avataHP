import React from "react";

function Sidebar() {
  return (
    <nav className="hidden md:flex flex-col w-56 min-h-screen bg-white/90 border-r border-blue-100 px-6 py-10 fixed left-0 top-0 z-20">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-blue-700 mb-2 font-[M_PLUS_Rounded_1c]">BathTimeRadio</h1>
        <p className="text-sm text-gray-500">配信者「まめめ」の活動紹介</p>
      </div>
      <ul className="flex flex-col gap-6 text-lg">
        <li>
          <a href="#hero" className="hover:text-blue-500 transition-colors duration-200 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
            トップ
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-500 transition-colors duration-200 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
            自己紹介
          </a>
        </li>
        <li>
          <a href="#gallery" className="hover:text-blue-500 transition-colors duration-200 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
            ギャラリー
          </a>
        </li>
        <li>
          <a href="#footer" className="hover:text-blue-500 transition-colors duration-200 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
            SNS
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar; 