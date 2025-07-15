import React from "react";

function Header() {
  return (
    <header className="w-full py-6 flex justify-center items-center bg-white/70 shadow-sm">
      <div className="flex items-center gap-3">
        {/* 泡のイメージ */}
        <span className="w-4 h-4 bg-blue-200 rounded-full opacity-70 animate-bounce"></span>
        <h1 className="text-3xl font-bold tracking-wide text-blue-700 drop-shadow-sm select-none">
          BathTimeRadio
        </h1>
        {/* 湯気のイメージ */}
        <span className="w-2 h-6 bg-gradient-to-t from-blue-200 to-transparent rounded-full opacity-60 animate-pulse"></span>
      </div>
    </header>
  );
}

export default Header; 