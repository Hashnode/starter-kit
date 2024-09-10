import React, { useState, useEffect } from 'react';
import { setLocalStorageItem, getLocalStorageItem, removeLocalStorageItem } from '../utils/localStorage';

type LinkPreviewProps = {
  url: string;
};

export const LinkPreview: React.FC<LinkPreviewProps> = ({ url }) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPreview = async () => {
      setIsLoading(true);
      setError(null);

      const storageKey = `preview_${url}`;
      const cachedImage = getLocalStorageItem(storageKey);

      if (cachedImage) {
        setPreviewImage(cachedImage);
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/screenshot?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        if (data.screenshot) {
          setPreviewImage(data.screenshot);
          setLocalStorageItem(storageKey, data.screenshot);
        }
      } catch (error) {
        console.error('Önizleme yükleme hatası:', error);
        setError('Önizleme yüklenemedi. Lütfen daha sonra tekrar deneyin.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPreview();

    // Cleanup function
    return () => {
      const storageKey = `preview_${url}`;
      removeLocalStorageItem(storageKey);
    };
  }, [url]);

  if (isLoading) {
    return <div className="text-center">Yükleniyor...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!previewImage) {
    return null;
  }

  return (
    <div className="absolute bottom-full left-0 mb-2 p-2 bg-white rounded-lg shadow-lg">
      <img 
        src={previewImage} 
        alt="Website Preview" 
        className="w-64 h-auto rounded"
        loading="lazy"
      />
    </div>
  );
};