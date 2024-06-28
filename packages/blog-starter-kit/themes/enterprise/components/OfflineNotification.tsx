import React from 'react';
import useOnlineStatus from './useOnlineStatus';

const OfflineNotification: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-red-500 text-white p-4 text-center animate-pulse">
      <p className="text-lg font-semibold">İnternet bağlantısı yok</p>
      <p className="text-sm">Şu anda çevrimdışı içeriği görüntülüyorsunuz</p>
    </div>
  );
};

export default OfflineNotification;