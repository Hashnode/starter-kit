// components/ExternalLinkModal.tsx
import React, { useState, useEffect } from 'react';
import { getLinkPreview } from '../utils/linkPreview';

type ExternalLinkModalProps = {
  url: string;
  onClose: () => void;
};

export const ExternalLinkModal: React.FC<ExternalLinkModalProps> = ({ url, onClose }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const domain = new URL(url).hostname;

  useEffect(() => {
    const preview = getLinkPreview(url);
    if (preview) {
      setPreviewImage(preview);
    }
  }, [url]);

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Confirm Action</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-gray-600 mb-6">
            Are you sure you want to proceed with this action? This cannot be undone.
          </p>
          <div className="relative">
            <div 
              className="flex items-center bg-gray-100 p-3 rounded-lg mb-6 cursor-pointer hover:bg-gray-200 transition-colors"
              onClick={handleLinkClick}
              onMouseEnter={() => setShowPreview(true)}
              onMouseLeave={() => setShowPreview(false)}
            >
              <img
                src={`https://www.google.com/s2/favicons?domain=${domain}&sz=32`}
                alt="Website Favicon"
                className="w-6 h-6 mr-3"
              />
              <span className="flex-grow text-blue-600 hover:underline">{url}</span>
              <svg className="w-5 h-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            {showPreview && previewImage && (
              <div className="absolute bottom-full left-0 mb-2 p-2 bg-white rounded-lg shadow-lg">
                <img 
                  src={previewImage} 
                  alt="Website Preview" 
                  className="w-64 h-auto rounded"
                />
              </div>
            )}
          </div>
          <div className="flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={() => {
                window.open(url, '_blank');
                onClose();
              }}
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
            >
              Approve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};