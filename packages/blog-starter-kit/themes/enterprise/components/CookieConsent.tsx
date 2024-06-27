import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('CookieConfirm');
    setShowConsent(cookieConsent !== 'true');
  }, []);

  const handleConsent = () => {
    localStorage.setItem('CookieConfirm', 'true');
    setShowConsent(false);
  };

  const handleCookieInfoClick = () => {
    localStorage.setItem('CookieConfirm', 'WaitTrue');
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center text-sm md:text-base">
      <p className="mr-4">
        Ziyaretçi profilinizi (
        <Link href="/cookie-policy" className="underline" onClick={handleCookieInfoClick}>
          Cookie
        </Link>
        ) analiz ve ar-ge için kullanabiliriz.
      </p>
      <button
        onClick={handleConsent}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        Anladım
      </button>
    </div>
  );
};

export default CookieConsent;