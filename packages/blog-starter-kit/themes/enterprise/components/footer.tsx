import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { FooterLinks } from './FooterLinks';
import qrCode from './icons/qr-code.svg'
import Image from 'next/image';

function QrCodeBorder(props: React.ComponentPropsWithoutRef<'svg'>) {
	return (
		<svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
			<path
				d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	)
}

export const Footer = () => {
	const { publication } = useAppContext();
	const LOGO_FAVICON = publication.favicon

	return (
		<footer className="border-t dark:border-neutral-800">
			<Container className='max-w-7xl '>
				<div className="px-4 sm:px-6 grid grid-cols-1 gap-x-8 gap-y-16 pb-6 pt-16 lg:grid-cols-2 lg:py-16 lg:px-8">
					<div>
						{LOGO_FAVICON ? (
							<div className="flex items-center text-gray-900">
							<Link
								href={'/'}
								aria-label={`${publication.title} home page`}
							>
								<Image
									src={LOGO_FAVICON}
									alt={publication.title}
									width={70} height={70} 
									className="w-22 h-22 flex-none"
								/>
							</Link>
              <div>
                <p className="text-base font-semibold">Aplicable AI</p>
                <p className="mt-1 text-sm">
                  The AI-powered platform for vetting any position at scale.
                </p>
              </div>
            </div>
						) : (
							<>
								<p className="ml-4 text-center text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-4xl">
									{publication.title}
								</p>
								<p className="my-2 text-sm">
									The AI-powered platform for vetting any position at scale.
								</p>
							</>
						)}

						{/* QR */}
						<div className="group relative mt-11 flex items-center self-stretch transition-colors ml-2 hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:self-auto">
							<div className="relative flex h-24 w-24 flex-none items-center justify-center">
								<QrCodeBorder className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-purple-500" />
								<Image src={qrCode} alt="QR Code" />
							</div>
							<div className="ml-8 lg:w-64">
								<p className="text-base font-semibold text-gray-900">
									<Link
										href="https://app.aplicable.ai/hC7paAwnx2BXrJHpuWSr"
										target="_blank"
									>
										<span className="absolute inset-0 sm:rounded-2xl" />
										Try the experience
									</Link>
								</p>
								<p className="mt-1 text-sm text-gray-700">
									Scan the QR code or <u>click here</u> to try the experience as
									a candidate.
								</p>
							</div>
						</div>
					</div>

					<FooterLinks />
				</div>

				<div className="border-t border-gray-200 pb-12 pt-8 md:pt-6">
					<p className="mt-6 text-center text-sm text-gray-500 md:mt-0">
						&copy; {new Date().getFullYear()} Code Report, LLC. Made all around
						the world. 💜
					</p>
				</div>

			</Container>
		</footer>
	);
};
