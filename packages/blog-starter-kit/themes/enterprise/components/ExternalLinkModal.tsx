import React from 'react';

type ExternalLinkModalProps = {
  url: string;
  onClose: () => void;
};

export const ExternalLinkModal: React.FC<ExternalLinkModalProps> = ({ url, onClose }) => {
  return (
    <div className="modal">
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