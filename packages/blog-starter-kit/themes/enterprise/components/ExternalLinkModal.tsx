// src/components/ExternalLinkModal.tsx
import React from 'react';
import { useExternalLink } from '../components/contexts/ExternalLinkContext';

export const ExternalLinkModal: React.FC = () => {
    const { modalUrl, hideModal } = useExternalLink();
  
    if (!modalUrl) return null;
  
    return (
      <div className="modal">
        <p>Bu bağlantıya yönlendiriliyorsunuz: {modalUrl}</p>
        <p>Onaylıyor musunuz?</p>
        <button onClick={() => {
          window.open(modalUrl, '_blank');
          hideModal();
        }}>
          Onayla
        </button>
        <button onClick={hideModal}>İptal</button>
      </div>
    );
  };