import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('CookieConfirm');
    setShowConsent(cookieConsent !== 'true');
  }, []);

  const handleAccept = () => {
    localStorage.setItem('CookieConfirm', 'true');
    setShowConsent(false);
  };

  const handleCookieInfoClick = () => {
    localStorage.setItem('CookieConfirm', 'WaitTrue');
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-4 left-4 w-1/4 min-w-[300px] rounded-lg p-4 text-white shadow-lg" style={{
      display: 'flex',
      backgroundColor: '#000000d9',
      backdropFilter: 'blur(4px)'
    }}>
              <Image
          src="assets/blog/preview/cookie.png"
          alt="Cookie icon"
          width={453}
          height={301}
          className="rounded-full absolute cstmimg"
        />
      <div className="flex items-center space-x-3">
        <p className="text-sm flex-grow">
          Ziyaretçi profilinizi (
          <a href="https://www.temizmama.com/aydinlatma-metni" className="underline" onClick={handleCookieInfoClick}>
            Cookie
          </a>
          ) analiz ve ar-ge için kullanabiliriz.
        </p>
      </div>
      <div className="mt-3 flex justify-end">
        <button
          onClick={handleAccept}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-sm transition duration-300"
        >
          Anladım
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;