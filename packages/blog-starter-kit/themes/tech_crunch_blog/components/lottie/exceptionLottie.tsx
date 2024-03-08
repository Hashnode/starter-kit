'use client';

import { Player } from '@lottiefiles/react-lottie-player';

const ExceptionLottie = () => {
	const animationURL = 'https://lottie.host/f6ae6056-7a6f-4b94-9d68-f468f30eb225/1MqoTEf5DE.json';

	return (
		<div className="flex h-96 flex-col items-center justify-center gap-2">
			<Player autoplay loop src={animationURL} style={{ height: '300px', width: '300px' }} />
		</div>
	);
};

export default ExceptionLottie;
