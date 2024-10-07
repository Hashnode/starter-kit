import parse from 'html-react-parser';
import Head from 'next/head';
import { useAppContext } from './contexts/appContext';
import { useEffect } from 'react';

export const Meta = () => {
	const { publication } = useAppContext();
	const { metaTags, favicon } = publication;

	useEffect(() => {
		if (favicon) {
			const link = document.createElement('link');
			link.rel = 'icon';
			link.type = 'image/png';
			link.href = favicon;
			document.head.appendChild(link);
		}
	}, [favicon]);

	const defaultFavicons = (
		<>
			<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
			<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
			<meta name="msapplication-TileColor" content="#000000" />
			<meta name="theme-color" content="#fa9252" />
			<meta name="msapplication-navbutton-color" content="#fa9252" />
			<meta name="apple-mobile-web-app-status-bar-style" content="#fa9252" />
		</>
	);

	return (
		<Head>
			{!favicon && defaultFavicons}
			<meta name="msapplication-config" content="/favicon/browserconfig.xml" />
			<link rel="alternate" type="application/rss+xml" href="/rss.xml" />
			{metaTags && parse(metaTags)}
		</Head>
	);
};
