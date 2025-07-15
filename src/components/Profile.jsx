import React, { useEffect, useState } from "react";

function Profile() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <section
      className={`flex flex-col items-center bg-white/80 rounded-xl shadow p-6 transition-all duration-700 ease-out transform
        ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <img
        src="/images/mame-face.png"
        alt="まめめの立ち絵"
        className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 mb-4"
      />
      <h2 className="text-2xl font-semibold mb-2">まめめ</h2>
      <p className="text-center text-gray-700">
        Vライバー「まめめ」です。<br />
        BathTimeRadio名義で配信やBOOTH作品を展開中！<br />
        お風呂タイムのようにリラックスできる配信を目指しています。
      </p>
    </section>
  );
}

export default Profile; 