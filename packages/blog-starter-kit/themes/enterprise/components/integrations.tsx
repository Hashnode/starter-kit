import { useEffect } from 'react';
import { useAppContext } from './contexts/appContext';

// OpenReplay için tip tanımlamaları
interface OpenReplayInitOptions {
  projectKey: string;
  defaultInputMode: number;
  obscureTextNumbers: boolean;
  obscureTextEmails: boolean;
}

interface OpenReplayStartOptions {
  userID: string;
}

declare global {
  interface Window {
    OpenReplay: any;
    gtag: any;
  }
}


export function Integrations() {
  const { publication } = useAppContext();
  const {
    gaTrackingID,
    fbPixelID,
    hotjarSiteID,
    matomoURL,
    matomoSiteID,
    fathomSiteID,
    fathomCustomDomain,
    fathomCustomDomainEnabled,
    plausibleAnalyticsEnabled,
  } = (publication?.integrations as any) ?? {};

  const openReplayProjectKey = 'rOeEEWoveoIqi68TKLef';


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

  const hotjarForUsers = hotjarSiteID
    ? `
      (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:${encodeURI(hotjarSiteID)},hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;r.defer=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `
    : '';

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

  // OpenReplay initialization function
  const initOpenReplay = (initOpts: OpenReplayInitOptions, startOpts: OpenReplayStartOptions): void => {
    const initOpenReplay = (A: string, s: number, a: number, y: OpenReplayInitOptions, e: OpenReplayStartOptions, r: any): void => {
      r = window.OpenReplay = [e, r, y, [s - 1, e]];
      const script = document.createElement('script');
      script.src = A;
      script.async = !a;
      document.getElementsByTagName('head')[0].appendChild(script);
      r.start = (v: any) => r.push([0]);
      r.stop = (v: any) => r.push([1]);
      r.setUserID = (id: string) => r.push([2, id]);
      r.setUserAnonymousID = (id: string) => r.push([3, id]);
      r.setMetadata = (k: string, v: any) => r.push([4, k, v]);
      r.event = (k: string, p: any, i: any) => r.push([5, k, p, i]);
      r.issue = (k: string, p: any) => r.push([6, k, p]);
      r.isActive = () => false;
      r.getSessionToken = () => {};
    };

    initOpenReplay(
      "//static.openreplay.com/latest/openreplay-assist.js",
      1,
      0,
      initOpts,
      startOpts,
      undefined  // r argümanı için
    );
  };

  useEffect(() => {
    if (gaTrackingID && typeof window !== 'undefined' && 'gtag' in window) {
      window.gtag('config', gaTrackingID, {
        transport_url: 'https://ping.hashnode.com',
        first_party_collection: true,
      });
    }

    // OpenReplay initialization
    if (openReplayProjectKey && typeof window !== 'undefined') {
      const initOpts: OpenReplayInitOptions = {
        projectKey: openReplayProjectKey,
        defaultInputMode: 2,
        obscureTextNumbers: false,
        obscureTextEmails: true,
      };
      const startOpts: OpenReplayStartOptions = { 
        userID: "" // Kullanıcı ID'sini buraya ekleyebilirsiniz
      };
      initOpenReplay(initOpts, startOpts);
    }
  }, [gaTrackingID, openReplayProjectKey]);

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
      {hotjarSiteID && hotjarForUsers && (
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: hotjarForUsers }}
        ></script>
      )}
      {matomoURL && matomoAnalytics && (
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: matomoAnalytics }}
        ></script>
      )}
      {plausibleAnalyticsEnabled && domainURL && (
        <script
          async
          defer
          data-domain={domainURL}
          src="https://plausible.io/js/plausible.js"
        ></script>
      )}
      {openReplayProjectKey && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // OpenReplay initialization
              var initOpts = {
                projectKey: "${openReplayProjectKey}",
                defaultInputMode: 2,
                obscureTextNumbers: false,
                obscureTextEmails: true,
              };
              var startOpts = { userID: "" };
              // OpenReplay initialization function will be called by useEffect
            `
          }}
        />
      )}
    </>
  );
}