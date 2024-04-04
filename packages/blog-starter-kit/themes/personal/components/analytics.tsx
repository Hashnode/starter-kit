import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useAppContext } from './contexts/appContext';
const GA_TRACKING_ID = 'G-72XG3F8LNJ'; // This is Hashnode's GA tracking ID
const isProd = process.env.NEXT_PUBLIC_MODE === 'production';
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_URL || '';

export const Analytics = () => {
	const { publication, post, page } = useAppContext();

	const _sendPageViewsToHashnodeGoogleAnalytics = () => {
		// @ts-ignore
		window.gtag('config', GA_TRACKING_ID, {
			transport_url: 'https://ping.hashnode.com',
			first_party_collection: true,
		});
	};

	const _sendViewsToHashnodeInternalAnalytics = async () => {
		// Send to Hashnode's own internal analytics
		const event: Record<string, string | number | object> = {
			event_type: 'pageview',
			time: new Date().getTime(),
			event_properties: {
				hostname: window.location.hostname,
				url: window.location.pathname,
				eventType: 'pageview',
				publicationId: publication.id,
				dateAdded: new Date().getTime(),
				referrer: window.document.referrer,
			},
		};

		let deviceId = Cookies.get('__amplitudeDeviceID');
		if (!deviceId) {
			deviceId = uuidv4();
			Cookies.set('__amplitudeDeviceID', deviceId, {
				expires: 365 * 2,
			}); // expire after two years
		}

		event['device_id'] = deviceId;

		await fetch(`${BASE_PATH}/ping/data-event`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ events: [event] }),
		});
	};

	const _sendViewsToHashnodeAnalyticsDashboard = async () => {
		const LOCATION = window.location;
		const NAVIGATOR = window.navigator;
		const currentFullURL =
			LOCATION.protocol +
			'//' +
			LOCATION.hostname +
			LOCATION.pathname +
			LOCATION.search +
			LOCATION.hash;

		const query = new URL(currentFullURL).searchParams;

		const utm_id = query.get('utm_id');
		const utm_campaign = query.get('utm_campaign');
		const utm_source = query.get('utm_source');
		const utm_medium = query.get('utm_medium');
		const utm_term = query.get('utm_term');
		const utm_content = query.get('utm_content');

		let referrer = document.referrer || '';
		if (referrer.indexOf(window.location.hostname) !== -1) {
			referrer = '';
		}

		const data = {
			publicationId: publication.id,
			postId: post && post.id,
			timestamp: Date.now(),
			url: currentFullURL,
			referrer: referrer,
			title: document.title,
			charset: document.characterSet || document.charset,
			lang: NAVIGATOR.language,
			userAgent: NAVIGATOR.userAgent,
			historyLength: window.history.length,
			timezoneOffset: new Date().getTimezoneOffset(),
			utm_id,
			utm_campaign,
			utm_source,
			utm_medium,
			utm_term,
			utm_content,
		};

		// For Hashnode Blog Dashboard Analytics
		fetch(`${BASE_PATH}/ping/view`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ data }),
		});
	};

	function _sendViewsToAdvancedAnalyticsDashboard() {
		const publicationId = publication.id;
		const postId = post && post.id;
		const staticPageId = page && page.id;

		const data = {
			publicationId,
			postId,
			staticPageId,
		};

		if (!publicationId) {
			console.warn('Publication ID is missing; could not send analytics.');
			return;
		}

		const isBrowser = typeof window !== 'undefined';
		if (!isBrowser) {
			return;
		}

		const isLocalhost = window.location.hostname === 'localhost';
		if (isLocalhost) {
			console.warn(
				'Analytics API call is skipped because you are running on localhost; data:',
				data,
			);
			return;
		}

		const event = {
			// timestamp will be added in API
			payload: {
				publicationId,
				postId: postId || null,
				seriesId: null,
				pageId: staticPageId || null,
				url: window.location.href,
				referrer: document.referrer || null,
				language: navigator.language || null,
				screen: `${window.screen.width}x${window.screen.height}`,
			},
			type: 'pageview',
		};

		const blob = new Blob(
			[
				JSON.stringify({
					events: [event],
				}),
			],
			{
				type: 'application/json; charset=UTF-8',
			},
		);

		let hasSentBeacon = false;
		try {
			if (navigator.sendBeacon) {
				hasSentBeacon = navigator.sendBeacon(`${BASE_PATH}/api/analytics`, blob);
			}
		} catch (error) {
			// do nothing; in case there is an error we fall back to fetch
		}

		if (!hasSentBeacon) {
			fetch(`${BASE_PATH}/api/analytics`, {
				method: 'POST',
				body: blob,
				credentials: 'omit',
				keepalive: true,
			});
		}
	}

	useEffect(() => {
		if (!isProd) return;

		_sendPageViewsToHashnodeGoogleAnalytics();
		_sendViewsToHashnodeInternalAnalytics();
		_sendViewsToHashnodeAnalyticsDashboard();
		_sendViewsToAdvancedAnalyticsDashboard();
	}, []);

	return null;
};
