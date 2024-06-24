import { useEffect } from 'react';
import { resizeImage } from '@starter-kit/utils/image';
import Link from 'next/link';
import { DEFAULT_COVER } from '../utils/const';
import { CoverImage } from './cover-image';
import { DateFormatter } from './date-formatter';

type Props = {
	title: string;
	coverImage: string;
	date: string;
	excerpt: string;
	slug: string;
};

export const HeroPost = ({ title, coverImage, date, excerpt, slug }: Props) => {
	const postURL = `/${slug}`;

	// URL'leri excerpt'ten temizlemek için bir fonksiyon oluşturuyoruz
	const cleanExcerpt = (text: string) => {
		const urlRegex = /(https?:\/\/[^\s]+)/g;
		return text.replace(urlRegex, '');
	};

	useEffect(() => {
		// Excerpt içeriğini temizlemek için işlev
		const cleanAllExcerpts = () => {
			const excerpts = document.querySelectorAll('p.text-md');
			excerpts.forEach((paragraph) => {
				paragraph.innerHTML = cleanExcerpt(paragraph.innerHTML);
			});
		};

		// DOM değişikliklerini izlemek için MutationObserver kullan
		const observer = new MutationObserver(cleanAllExcerpts);

		// Tüm sayfa üzerinde gözlem başlat
		observer.observe(document.body, { childList: true, subtree: true });

		// Başlangıçta mevcut excerpt'leri temizle
		cleanAllExcerpts();

		// Bileşen temizlendiğinde observer'ı durdur
		return () => observer.disconnect();
	}, []);

	return (
		<section className="grid grid-cols-1 gap-5">
			<div className="col-span-1">
				<CoverImage
					title={title}
					src={resizeImage(coverImage, { w: 1600, h: 840, c: 'thumb' }) || DEFAULT_COVER}
					slug={slug}
					priority={true}
				/>
			</div>
			<div className="col-span-1 flex flex-col gap-2">
				<h1 className="text-xl font-bold leading-snug text-slate-800 dark:text-neutral-50 lg:text-3xl">
					<Link
						href={postURL}
						className="dark:hover:text-primary-500 leading-tight tracking-tight"
					>
						{title}
					</Link>
				</h1>
				<Link href={postURL}>
					<p className="text-md leading-snug text-slate-500 dark:text-neutral-400">{cleanExcerpt(excerpt)}</p>
				</Link>
				<div className="text-sm font-semibold text-slate-500 dark:text-neutral-300">
					<Link href={postURL}>
						<DateFormatter dateString={date} />
					</Link>
				</div>
			</div>
		</section>
	);
};
