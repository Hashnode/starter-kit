export const triggerCustomWidgetEmbed = async (pubId) => {
  const frames = document.querySelectorAll('.hn-embed-widget');
  if (frames.length === 0) {
    return;
  }
  frames.forEach(async (frame) => {
    try {
      const iframe = document.createElement('iframe');
      const host = window.location.hostname;
      iframe.id = `frame-${frame.id}`;
      iframe.sandbox = 'allow-same-origin allow-forms allow-presentation allow-scripts allow-popups';
      iframe.src =
        host.indexOf('.hashnode.net') !== -1 || host.indexOf('.app.localhost') !== -1
          ? `${baseUrl}/api/pub/${pubId}/embed/${frame.id}`
          : `https://podcasters.spotify.com/pod/show/temizmama-blog/embed/episodes/Kedilerde-Pht-Atmas-Emboli-e2l80vv/a-abcp5b2`;
      iframe.width = '100%';
      iframe.style.border = 'none'; // Opsiyonel: iframe etrafında border olmaması için

      frame.innerHTML = '';
      frame.appendChild(iframe);

      iframe.onload = () => {
        const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
        console.log(innerDoc)
        const observer = new MutationObserver(() => {
          let innerIframe = innerDoc.querySelector('iframe');
          if (innerIframe) {
            innerIframe.style.width = '500px';
          }
        });
        innerIframe.style.width = '500px';
        console.log(innerIframe);
        observer.observe(innerDoc, {
          childList: true,
          subtree: true,
        });

        // İlk yükleme sırasında mevcut iframe'i ayarlayın
        let innerIframe = innerDoc.querySelector('iframe');
        if (innerIframe) {
          innerIframe.style.width = '500px';
        }
      };

      setTimeout(() => {
        const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
        let innerIframe = innerDoc.querySelector('iframe');
          if (innerIframe) {
            innerIframe.style.width = '500px';
          }
        // TODO:
        // eslint-disable-next-line no-undef
        iFrameResize({ log: false, autoResize: true }, `#${iframe.id}`);
      }, 100);
      frame.setAttribute('class', 'hn-embed-widget-expanded');
    } catch (e) {
      console.log(e);
    }
  });
};
