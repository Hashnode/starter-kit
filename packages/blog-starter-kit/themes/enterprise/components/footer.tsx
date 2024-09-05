import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';

export const Footer = () => {

	return (
		<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="https://www.linkedin.com/in/haimantika-mitra/" className="hover:underline me-4 md:me-6">LinkedIn</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">GitHub</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Twitter</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Resume</a>
                </li>
            </ul>
        </div>
    </div>
</footer>

	);
}