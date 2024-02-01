'use client';

import { Player } from '@lottiefiles/react-lottie-player';

const NotFoundLottie = () => {
	const animationURL = 'https://lottie.host/a91b379a-4170-49f4-92e4-42097d5b06f3/pCC5Iyv4bQ.json';

	return (
		<div className="flex h-96 flex-col items-center justify-center gap-2">
			<Player autoplay loop src={animationURL} style={{ height: '300px', width: '300px' }} />
		</div>
	);
};

export default NotFoundLottie;
