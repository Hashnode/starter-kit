import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';


export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	const currentYear = new Date().getFullYear(); // 动态获取当前年份

	// --- 定义你的核心页面链接 (请务必替换为真实 URL) ---
	const importantLinks = {
		reviews: [
			{ name: '币安 (Binance) 评测', href: '/reviews/binance' }, // 示例 URL
			{ name: 'OKX (欧易) 评测', href: '/reviews/okx' },       // 示例 URL
			{ name: 'Bitget 评测', href: '/reviews/bitget' },     // 示例 URL
			{ name: 'Gate.io (芝麻开门) 评测', href: '/reviews/gate-io' }, // 示例 URL
			{ name: '所有交易所评测', href: '/reviews' },         // 示例 URL - 指向分类页
		],
		comparisons: [
			{ name: '币安 vs OKX 对比', href: '/compare/binance-vs-okx' }, // 示例 URL
			{ name: 'Bitget vs Gate.io 对比', href: '/compare/bitget-vs-gate-io' }, // 示例 URL
			{ name: '最佳加密货币交易所排名', href: '/best/crypto-exchanges' }, // 示例 URL - 核心排名页
            { name: '交易所手续费对比', href: '/compare/exchange-fees'}, // 示例 URL
		],
		guides: [
			{ name: '加密货币交易入门', href: '/guides/crypto-trading-basics' }, // 示例 URL
			{ name: '如何选择交易所', href: '/guides/how-to-choose-exchange' }, // 示例 URL
			{ name: '钱包安全指南', href: '/guides/wallet-security' },     // 示例 URL
			{ name: '虚拟货币术语解释', href: '/guides/crypto-glossary' }, // 示例 URL
		],
		company: [
			{ name: '关于我们', href: '/about' },     // 示例 URL
			{ name: '联系我们', href: '/contact' },   // 示例 URL
            { name: '加入我们', href: '/careers' },   // 示例 URL (如果需要)
			{ name: '订阅资讯', href: '/newsletter' },// 示例 URL (如果需要)
            // { name: '博客文章', href: '/blog' },    // 示例 URL (如果有博客)
		],
		legal: [
			{ name: '隐私政策', href: '/privacy-policy' },     // 示例 URL
			{ name: '服务条款', href: '/terms-of-service' },   // 示例 URL
			{ name: '免责声明', href: '/disclaimer' },         // **强烈建议添加**
            { name: '网站地图', href: '/sitemap.xml' },       // 推荐添加
		],
	};

	// 确保 publication.title 有值，否则提供默认值
	const siteTitle = publication?.title || '你的网站名称';

	return (
		<footer className="border-t border-neutral-200 py-16 dark:border-neutral-800 ">
			<Container className="px-5">
				{/* Logo 部分 */}
				<div className="mb-12 flex w-full flex-row justify-center">
					<Link
						href={'/'}
						aria-label={`${siteTitle} 首页`} // 使用中文描述
						className="flex flex-row items-center gap-5"
					>
						{PUBLICATION_LOGO ? (
							<img
                                className="block w-32 md:w-40"
                                src={PUBLICATION_LOGO}
                                alt={`${siteTitle} Logo`} // 使用中文描述
                            />
						) : (
							// 如果没有 Logo，显示网站标题
							<span className="text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-2xl">
								{siteTitle}
							</span>
						)}
					</Link>
				</div>

				{/* 链接网格 - 调整了结构和内容 */}
				<div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5"> {/* 调整列数以适应内容 */}
					{/* 第 1 列: 交易所评测 */}
					<div className="col-span-1">
						<p className="mb-3 font-semibold text-slate-700 dark:text-neutral-200">
							交易所评测
						</p>
						<ul className="flex flex-col gap-2 text-sm text-slate-600 dark:text-neutral-300">
							{importantLinks.reviews.map((link) => (
								<li key={link.href}>
									<Link href={link.href} className="hover:text-slate-900 hover:underline dark:hover:text-white">
                                        {link.name}
                                    </Link>
								</li>
							))}
						</ul>
					</div>

					{/* 第 2 列: 交易所对比 */}
					<div className="col-span-1">
						<p className="mb-3 font-semibold text-slate-700 dark:text-neutral-200">
							交易所对比
						</p>
						<ul className="flex flex-col gap-2 text-sm text-slate-600 dark:text-neutral-300">
							{importantLinks.comparisons.map((link) => (
								<li key={link.href}>
									<Link href={link.href} className="hover:text-slate-900 hover:underline dark:hover:text-white">
                                        {link.name}
                                    </Link>
								</li>
							))}
						</ul>
					</div>

					{/* 第 3 列: 新手指南与资源 */}
					<div className="col-span-1">
						<p className="mb-3 font-semibold text-slate-700 dark:text-neutral-200">
							新手指南与资源
						</p>
						<ul className="flex flex-col gap-2 text-sm text-slate-600 dark:text-neutral-300">
							{importantLinks.guides.map((link) => (
								<li key={link.href}>
									<Link href={link.href} className="hover:text-slate-900 hover:underline dark:hover:text-white">
                                        {link.name}
                                    </Link>
								</li>
							))}
						</ul>
					</div>

                    {/* 第 4 列: 关于网站 */}
					<div className="col-span-1">
						<p className="mb-3 font-semibold text-slate-700 dark:text-neutral-200">
							关于网站
						</p>
						<ul className="flex flex-col gap-2 text-sm text-slate-600 dark:text-neutral-300">
							{importantLinks.company.map((link) => (
								<li key={link.href}>
									<Link href={link.href} className="hover:text-slate-900 hover:underline dark:hover:text-white">
                                        {link.name}
                                    </Link>
								</li>
							))}
						</ul>
					</div>

                     {/* 第 5 列: 社交媒体与法律条款 (合并原右侧部分) */}
					<div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col items-start lg:items-end gap-4 text-sm text-slate-600 dark:text-neutral-300">
                        <div>
                            <p className="mb-3 font-semibold text-slate-700 dark:text-neutral-200 text-left lg:text-right">
                                关注我们 & 法律条款
                            </p>
                            <SocialLinks /> {/* 社交链接组件 */}
                        </div>
                        <div className="flex flex-col items-start lg:items-end gap-2 w-full">
                            {/* 法律条款链接 */}
                            <ul className="flex flex-col items-start lg:items-end gap-2 text-sm text-slate-600 dark:text-neutral-300">
                                {importantLinks.legal.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="hover:text-slate-900 hover:underline dark:hover:text-white">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            {/* 版权信息 */}
						    <p className="mt-4">© {currentYear} {siteTitle}. 版权所有.</p>
                        </div>
					</div>
				</div>
			</Container>
		</footer>
	);
};
