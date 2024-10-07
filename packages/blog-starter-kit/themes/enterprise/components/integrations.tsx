import { useEffect } from 'react';
import { useAppContext } from './contexts/appContext';

declare global {
  interface Window {
    gtag: any;
  }
}

export function Integrations() {
  const { publication } = useAppContext();
  const {
    gaTrackingID,
    fbPixelID,
    matomoURL,
    matomoSiteID,
    fathomSiteID,
    fathomCustomDomain,
    fathomCustomDomainEnabled,
  } = (publication?.integrations as any) ?? {};

  // URL kontrolü ve varsayılan değer atama
  let domainURL = '';
  try {
    if (publication?.url) {
      domainURL = new URL(publication.url).hostname;
    }
  } catch (error) {
    console.error('Invalid URL:', publication?.url);
    // Hata durumunda varsayılan bir değer atayabilirsiniz
    // Örnek: domainURL = 'example.com';
  }

  let fbPixel = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;t.defer=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window,document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
  `;
  if (fbPixelID) {
    fbPixel += `fbq('init', '${encodeURI(fbPixelID)}');`;
  }

  const matomoAnalytics = matomoURL
    ? `
      var _paq = window._paq = window._paq || [];
      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      (function() {
        var u="https://${encodeURI(matomoURL)}/";
        _paq.push(['setTrackerUrl', u+'matomo.php']);
        _paq.push(['setSiteId', '${encodeURI(matomoSiteID || '')}']);
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.type='text/javascript'; g.async=true; g.defer=true; g.src='//cdn.matomo.cloud/${encodeURI(matomoURL)}/matomo.js'; s.parentNode.insertBefore(g,s);
      })();
    `
    : '';
  
  useEffect(() => {
    if (gaTrackingID && typeof window !== 'undefined' && 'gtag' in window) {
      window.gtag('config', gaTrackingID, {
        transport_url: 'https://ping.hashnode.com',
        first_party_collection: true,
      });
    }

  }, [gaTrackingID]);

  return (
    <>
      {fbPixelID && (
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: fbPixel }}></script>
      )}
      {fathomSiteID && (
        <script
          src={
            fathomCustomDomainEnabled
              ? `https://${fathomCustomDomain}/script.js`
              : 'https://cdn.usefathom.com/script.js'
          }
          data-spa="auto"
          data-site={fathomSiteID}
          defer
        ></script>
      )}
      {matomoURL && matomoAnalytics && (
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: matomoAnalytics }}
        ></script>
      )}
    </>
  );
}