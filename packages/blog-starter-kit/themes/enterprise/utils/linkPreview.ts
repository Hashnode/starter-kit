// utils/linkPreview.ts
import { toPng } from 'html-to-image';

const generatePreview = async (url: string): Promise<string> => {
  const iframe = document.createElement('iframe');
  iframe.style.position = 'fixed';
  iframe.style.top = '-9999px';
  iframe.style.width = '1280px';
  iframe.style.height = '800px';
  document.body.appendChild(iframe);

  return new Promise((resolve, reject) => {
    iframe.onload = async () => {
      try {
        const preview = await toPng(iframe.contentDocument!.body, {
          width: 1280,
          height: 800,
        });
        resolve(preview);
      } catch (error) {
        reject(error);
      } finally {
        document.body.removeChild(iframe);
      }
    };
    iframe.src = url;
  });
};

export const preloadLinkPreviews = async (urls: string[]) => {
  for (const url of urls) {
    try {
      const preview = await generatePreview(url);
      localStorage.setItem(`preview_${url}`, preview);
    } catch (error) {
      console.error(`Failed to generate preview for ${url}:`, error);
    }
  }
};

export const getLinkPreview = (url: string): string | null => {
  return localStorage.getItem(`preview_${url}`);
};