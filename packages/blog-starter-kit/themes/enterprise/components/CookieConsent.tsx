import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('CookieConfirm');
    if (cookieConsent !== 'true') {
      setTimeout(() => {
        setIsVisible(true);
        setShowConsent(true);
      }, 1500);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('CookieConfirm', 'true');
    setIsVisible(false);
    setTimeout(() => setShowConsent(false), 300); // Match the transition duration
  };

  const handleCookieInfoClick = () => {
    localStorage.setItem('CookieConfirm', 'WaitTrue');
  };

  if (!showConsent) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 min-w-[300px] rounded-lg p-4 text-white shadow-lg flex bg-black bg-opacity-80 backdrop-blur-md transition-transform transform ${
        isVisible ? 'translate-y-0' : 'translate-y-10'
      }`}
      style={{ fontFamily: 'PinkChicken', width: '300px', transitionDuration: '300ms' }}
    >
      <img
        src="https://blog.temizmama.com/assets/blog/preview/cookie.png"
        alt="Cookie icon"
        width="453"
        height="301"
        className="rounded-full absolute cstmimg"
      />
      <div className="flex items-center space-x-3">
        <p className="text-sm flex-grow" style={{ fontFamily: 'PinkChicken' }}>
          Ziyaretçi profilinizi (
          <a
            href="https://www.temizmama.com/aydinlatma-metni"
            className="underline"
            onClick={handleCookieInfoClick}
            style={{ fontFamily: 'PinkChicken' }}
          >
            Cookie
          </a>
          ) analiz ve ar-ge için kullanabiliriz.
        </p>
      </div>
      <div className="mt-3 flex justify-end">
        <button
          onClick={handleAccept}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-sm transition duration-300"
          style={{ fontFamily: 'PinkChicken' }}
        >
          Anladım
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
