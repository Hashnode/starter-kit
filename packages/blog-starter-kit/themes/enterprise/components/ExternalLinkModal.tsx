import React from 'react';

type ExternalLinkModalProps = {
  url: string;
  onClose: () => void;
};

export const ExternalLinkModal: React.FC<ExternalLinkModalProps> = ({ url, onClose }) => {
  console.log('Rendering modal for URL:', url); // Debug için

  return (
    <div className="modal" style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '20px',
      border: '1px solid black',
      zIndex: 1000
    }}>
      <h2 className="text-2xl font-bold mb-4">Bu bağlantıya yönlendiriliyorsunuz: {url}</h2>
      <p className="text-gray-600 mb-6">Onaylıyor musunuz?</p>
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
  );
};