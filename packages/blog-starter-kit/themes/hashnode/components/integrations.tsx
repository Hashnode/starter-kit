import { useEffect } from 'react';
import { useAppContext } from './contexts/appContext';

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
		gTagManagerID,
		koalaPublicKey,
		msClarityID,
	} = publication.integrations ?? {};
	const domainURL = new URL(publication.url).hostname;

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

	const hotjarForUsers =
		hotjarSiteID &&
		`
      (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:${encodeURI(hotjarSiteID)},hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;r.defer=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  `;

	const matomoAnalytics = `
      var _paq = window._paq = window._paq || [];
      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      (function() {
        var u="https://${encodeURI(matomoURL || '')}/";
        _paq.push(['setTrackerUrl', u+'matomo.php']);
        _paq.push(['setSiteId', '${encodeURI(matomoSiteID || '')}']);
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.type='text/javascript'; g.async=true; g.defer=true; g.src='//cdn.matomo.cloud/${encodeURI(
					matomoURL || '',
				)}/matomo.js'; s.parentNode.insertBefore(g,s);
      })();
  `;

	const googleTagManager = `
		(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer', '${gTagManagerID}');`;

	const koalaForUsers =
		koalaPublicKey &&
		`!function(t){if(window.ko)return;window.ko=[],
    ["identify","track","removeListeners","on","off","qualify","ready"]
    .forEach(function(t){ko[t]=function(){var n=[].slice.call(arguments);return n.unshift(t),ko.push(n),ko}});
    var n=document.createElement("script");
    n.async=!0,n.setAttribute("src","https://cdn.getkoala.com/v1/${encodeURI(koalaPublicKey)}/sdk.js"),
    (document.body || document.head).appendChild(n)}();`;

	const msClarityForUsers =
		msClarityID &&
		`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", '${msClarityID}');`;

	useEffect(() => {
		// @ts-ignore
		window.gtag('config', gaTrackingID, {
			transport_url: 'https://ping.hashnode.com',
			first_party_collection: true,
		});
	}, []);

	return (
		<>
			{fbPixelID ? (
				<script type="text/javascript" dangerouslySetInnerHTML={{ __html: fbPixel }}></script>
			) : null}
			{fathomSiteID && (
				<script
					src={
						fathomCustomDomainEnabled
							? `https://${fathomCustomDomain}/script.js`
							: 'https://cdn.usefathom.com/script.js'
					}
					// @ts-ignore
					// eslint-disable-next-line react/no-unknown-property
					spa="auto"
					// eslint-disable-next-line react/no-unknown-property
					site={fathomSiteID}
					defer
				></script>
			)}
			{hotjarSiteID && hotjarForUsers && (
				<script
					type="text/javascript"
					dangerouslySetInnerHTML={{ __html: hotjarForUsers }}
				></script>
			)}
			{matomoURL && (
				<script
					type="text/javascript"
					dangerouslySetInnerHTML={{ __html: matomoAnalytics }}
				></script>
			)}
			{gTagManagerID && (
				<script
					type="text/javascript"
					dangerouslySetInnerHTML={{ __html: googleTagManager }}
				></script>
			)}
			{koalaForUsers && (
				<script type="text/javascript" dangerouslySetInnerHTML={{ __html: koalaForUsers }}></script>
			)}
			{msClarityForUsers && (
				<script
					type="text/javascript"
					dangerouslySetInnerHTML={{ __html: msClarityForUsers }}
				></script>
			)}
			{plausibleAnalyticsEnabled && (
				<script
					async
					defer
					data-domain={domainURL}
					src="https://plausible.io/js/plausible.js"
				></script>
			)}
		</>
	);
}
