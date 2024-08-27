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
      <p>Bu bağlantıya yönlendiriliyorsunuz: {url}</p>
      <p>Onaylıyor musunuz?</p>
      <button onClick={() => {
        window.open(url, '_blank');
        onClose();
      }}>
        Onayla
      </button>
      <button onClick={onClose}>İptal</button>
    </div>
  );
};