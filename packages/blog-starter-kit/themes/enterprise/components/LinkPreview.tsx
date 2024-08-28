// components/LinkPreview.tsx
import React, { useState, useEffect } from 'react';

type LinkPreviewProps = {
  url: string;
};

export const LinkPreview: React.FC<LinkPreviewProps> = ({ url }) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPreview = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/screenshot?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        if (data.screenshot) {
          setPreviewImage(data.screenshot);
        }
      } catch (error) {
        console.error('Önizleme yükleme hatası:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPreview();
  }, [url]);

  if (isLoading) {
    return <div className="text-center">Yükleniyor...</div>;
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
      />
    </div>
  );
};