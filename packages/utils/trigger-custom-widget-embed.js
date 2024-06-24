export const triggerCustomWidgetEmbed = async (pubId) => {
  const frames = document.querySelectorAll('.hn-embed-widget');
  if (frames.length === 0) {
    return;
  }
  frames.forEach(async (frame) => {
    try {
      const outerIframe = document.createElement('iframe');
      const host = window.location.hostname;
      outerIframe.id = `frame-${frame.id}`;
      outerIframe.sandbox = 'allow-same-origin allow-forms allow-presentation allow-scripts allow-popups';
      outerIframe.src =
        host.indexOf('.hashnode.net') !== -1 || host.indexOf('.app.localhost') !== -1
          ? `${baseUrl}/api/pub/${pubId}/embed/${frame.id}`
          : `https://embeds.hashnode.com?p=${pubId}&w=${frame.id}`;
      outerIframe.width = '100%';
      outerIframe.style.border = 'none';

      frame.innerHTML = '';
      frame.appendChild(outerIframe);

      outerIframe.onload = () => {
        const innerDoc = outerIframe.contentDocument || outerIframe.contentWindow.document;
        const innerIframe = innerDoc.querySelector('iframe');

        if (innerIframe) {
          // Klonlayarak ana iframe'yi değiştirme
          const clonedIframe = innerIframe.cloneNode(true);
          clonedIframe.width = '100%';
          clonedIframe.style.border = 'none';
          
          // Outer iframe'i iç iframe ile değiştir
          outerIframe.parentNode.replaceChild(clonedIframe, outerIframe);
        }
      };

      setTimeout(() => {
        // TODO:
        // eslint-disable-next-line no-undef
        iFrameResize({ log: false, autoResize: true }, `#${outerIframe.id}`);
      }, 1000);
      frame.setAttribute('class', 'hn-embed-widget-expanded');
    } catch (e) {
      console.log(e);
    }
  });
};
