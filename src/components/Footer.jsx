import React from "react";

function Footer() {
  return (
    <footer className="w-full py-6 bg-[#e8d3b3] flex flex-col items-center mt-12 rounded-t-2xl">
      <a
        href="https://x.com/your_x_account"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-[#4a3f35] hover:text-[#7c5c2b] transition font-serif"
        style={{ fontFamily: 'Noto Serif JP, serif' }}
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.162 5.656c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 11.07 9.03a12.72 12.72 0 0 1-9.24-4.686 4.48 4.48 0 0 0 1.39 5.98A4.44 4.44 0 0 1 2 9.13v.057a4.48 4.48 0 0 0 3.6 4.39 4.48 4.48 0 0 1-2.02.077 4.48 4.48 0 0 0 4.18 3.11A8.98 8.98 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.19-.01-.38-.02-.57a9.1 9.1 0 0 0 2.24-2.32z"/>
        </svg>
        <span>X（旧Twitter）</span>
      </a>
      <span className="text-xs text-[#4a3f35] mt-2 font-serif" style={{ fontFamily: 'Noto Serif JP, serif' }}>
        © BathTimeRadio
      </span>
    </footer>
  );
}

export default Footer; 