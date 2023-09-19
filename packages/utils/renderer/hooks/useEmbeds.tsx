import { triggerEmbed } from '../services/embed';
import { useEffect } from 'react';

const useEmbeds = ({ enabled }: { enabled: boolean }) => {
  useEffect(() => {
    // if enabled we need to trigger all embeds on page load
    if (enabled) {
      (async () => {
        document.querySelectorAll('a.embed-card').forEach((node) => {
          triggerEmbed(node);
        });
      })();
    }
  }, [enabled]);
};

export default useEmbeds;