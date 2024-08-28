import React, { useState, useEffect } from 'react';

type ExternalLinkModalProps = {
  url: string;
  onClose: () => void;
};

export const ExternalLinkModal: React.FC<ExternalLinkModalProps> = ({ url, onClose }) => {
  const [showFullUrl, setShowFullUrl] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Mobil için breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Temizmama Blog'dan ayrılıyorsunuz.</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-gray-600 mb-6">
            Devam edilsin mi?
          </p>
          <div className="relative bg-gray-100 p-3 rounded-lg mb-6">
            <div
              className={`flex items-center ${!isMobile ? 'group' : ''}`}
              onMouseEnter={() => !isMobile && setShowFullUrl(true)}
              onMouseLeave={() => !isMobile && setShowFullUrl(false)}
            >
              <img
                src={`https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=32`}
                alt="Website Favicon"
                className="w-6 h-6 mr-3 flex-shrink-0"
              />
              <span className="text-blue-600 truncate">
                {url}
              </span>
            </div>
            {!isMobile && showFullUrl && (
              <div className="absolute left-0 bottom-full mb-2 p-2 bg-gray-800 text-white text-sm rounded shadow-lg">
                {url}
              </div>
            )}
          </div>
          <div className="flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            >
              Reddet
            </button>
            <button
              onClick={() => {
                window.open(url, '_blank');
                onClose();
              }}
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
            >
              Onayla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};