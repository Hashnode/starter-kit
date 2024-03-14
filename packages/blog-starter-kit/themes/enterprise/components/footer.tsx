import Image from 'next/image';
import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';
import React, { useState, FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faXmark, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Button } from './button';
import { useRouter } from 'next/router';

type ModalDesignGalleryProps = {
	onClose: () => void;
  };

// Modal Component with proper TypeScript typing
const ModalDesignGallery: FC<ModalDesignGalleryProps> = ({ onClose }) => {
  return (
    <div className={'bg-white w-full lg:w-1/2 h-screen lg:h-full fixed top-0 right-0 shadow-lg modal-content-mobile modal-content-large'}>
      <div className="flex justify-between items-center pl-4 border-b border-neutral-200">
        <h2 className="text-lg font-medium  text-neutral-900 font-['Outfit']">
          Contact Us
        </h2>
        <button
          onClick={onClose}
          className="flex justify-center items-center w-fit p-4 h-full border-l border-neutral-200"
        >
          <FontAwesomeIcon
            icon={faXmark}
            className="w-6 h-6 text-primary-500"
          />
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full h-[275px] md:h-[450px] overflow-hidden">
        <img
          src="/assets/blog/gambar/Gambar-Contact.png"
          alt="Description"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full p-6 border-t border-neutral-200 flex flex-col gap-2">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="text-sm font-medium text-neutral-700 font-['Outfit'] leading-5 tracking-tight">
              Hi Pengantins
            </div>
            <div className="text-2xl font-normal text-neutral-900 font-['Pacifico'] leading-10">
              Get in touch with us!
            </div>
          </div>
          <div className="text-sm font-light text-neutral-700 font-['Outfit'] leading-5 tracking-tight text-justify">
            We're in full throttle, racing ahead with the product development.
            If you're eager to learn more about Kawenlah, don't hesitate to get
            in touch with us. We're here to answer all your questions!
          </div>
        </div>
      </div>

      <a
        href="mailto:kawenlahoffcial@gmail.com"
        className="w-full inline-flex items-center border-t border-neutral-200"
      >
        <div className="flex flex-grow items-center px-8 py-4 bg-white border-r">
          <div className="text-base font-medium text-primary-500 font-['Outfit']">
            Send us an Email
          </div>
        </div>
        <div className="flex items-center justify-center bg-white py-2 px-4">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="w-6 h-6 text-primary-500"
          />
        </div>
      </a>
      <a
        href="https://wa.link/4wnytm"
        className="w-full inline-flex items-center border-y border-neutral-200"
      >
        <div className="flex flex-grow items-center px-8 py-4 bg-white border-r">
          <div className="text-base font-medium text-primary-500 font-['Outfit']">
            Chat us on WhatsApp
          </div>
        </div>
        <div className="flex items-center justify-center bg-white py-2 px-4">
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="w-6 h-6 text-primary-500"
          />
        </div>
      </a>
    </div>
  );
};



export const Footer = () => {
  const { publication } = useAppContext();
  const PUBLICATION_LOGO = publication.preferences.logo;
  const [activeModal, setActiveModal] = useState('');

  return (
    <div className="flex flex-col items-start w-full lg:px-52 min-h-screen bg-primary-500">
      {/* Top Section */}
      <div className="w-full flex-grow p-8 md:p-12 lg:p-16 bg-primary-500 border-b border-x border-neutral-300">
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="text-xs md:text-md lg:text-lg font-medium text-pink-100 uppercase tracking-[4.80px] font-['Outfit']">
            KAWENLAH
          </div>
          <div className="text-2xl md:text-3xl lg:text-4xl pb-6 font-normal text-neutral-50 leading-normal font-['Pacifico']">
            Senang je kan?
            <br />
            So...... jomlah kawen!
          </div>
          <div className="w-full">
		  	<div className="flex flex-col sm:flex-row justify-left sm:justify-start items-left sm:items-start">
				{/* Button */}
        <a href="https://www.kawenlah.com/login" target="_blank" rel="noopener noreferrer">
          <div className="inline-block rounded-full px-6 py-4 font-['Outfit'] font-medium text-lg bg-white text-primary-500 pointer-events-none">
            Buat Kad Kawen
          </div>
        </a>
			</div>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex-grow w-full p-8 md:p-12 lg:p-16 bg-primary-500 border-b border-x border-neutral-50">
        <div className="text-2xl md:text-3xl lg:text-4xl font-normal text-neutral-100 leading-normal font-['Pacifico'] w-full">
          Sabarlah jap weh,
          <br />
          sebelum keluar tengok2 lah dulu
        </div>
        <div className="flex justify-start items-start mt-6 w-full">
          {/* Link Column 1 */}
          <div className="flex flex-col gap-3 mr-8 w-full">
            <div className="text-base md:text-lg lg:text-xl font-medium text-neutral-100 font-['Outfit']">
              Kawenlah
            </div>
            <div className="flex flex-col gap-1 w-full">
				<a
					href="https://www.kawenlah.com/about"
					className="text-xs md:text-sm lg:text-md font-medium text-neutral-100 font-['Outfit'] cursor-pointer"
					target="_blank" rel="noopener noreferrer"
					>
					Home
			  	</a>
				<a
					href="https://www.kawenlah.com/about"
					className="text-xs md:text-sm lg:text-md font-medium text-neutral-100 font-['Outfit'] cursor-pointer"
					target="_blank" rel="noopener noreferrer"
					>
					About Us
				</a>
				<div
					className="text-xs md:text-sm lg:text-md font-medium text-neutral-100 font-['Outfit'] cursor-pointer"
					onClick={() => setActiveModal('contactUsModal')}
				>
					Contact Us
				</div>
            </div>
          </div>
          {/* Link Column 2 */}
          <div className="flex flex-col gap-3 w-full">
            <div className="text-base md:text-lg lg:text-xl font-medium text-neutral-100 font-['Outfit']">
              Legal
            </div>
            <div className="flex flex-col gap-1 w-full">
              <a
                href="https://www.kawenlah.com/privacy"
                className="text-xs md:text-sm lg:text-md font-medium text-neutral-100 font-['Outfit'] cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="https://www.kawenlah.com/terms"
                className="text-xs md:text-sm lg:text-md font-medium text-neutral-100 font-['Outfit'] cursor-pointer"
              >
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Icon Section */}
      <div className="flex w-full bg-primary-500 justify-around items-center h-24 border-b border-l border-neutral-50">
        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/kawenlah/"
          className="flex justify-center items-center w-1/4 h-full border-r border-neutral-50"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="w-6 h-6 text-neutral-100"
          />
        </a>

        {/* TikTok Icon */}
        <a
          href="https://www.tiktok.com/@kawenlah"
          className="flex justify-center items-center w-1/4 h-full border-r border-neutral-50"
        >
          <FontAwesomeIcon
            icon={faTiktok}
            className="w-6 h-6 text-neutral-100"
          />
        </a>

        {/* Envelope Icon */}
        <a
          href="mailto:kawenlahoffcial@gmail.com"
          className="flex justify-center items-center w-1/4 h-full border-r border-neutral-50"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="w-6 h-6 text-neutral-100"
          />
        </a>

        {/* WhatsApp Icon */}
        <a
          href="https://wa.link/4wnytm"
          className="flex justify-center items-center border-r border-neutral-50 w-1/4 h-full"
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="w-6 h-6 text-neutral-100"
          />
        </a>
      </div>

      {/* Bottom Section */}
      <div className="w-full h-full bg-primary-500 border-neutral-50 border-x flex items-center justify-center py-4">
        <div className="text-xs font-light text-center text-neutral-100 font-['Outfit']">
          © 2024 Kawenlah Enterprise. All Rights Reserved.
        </div>
      </div>

      {/* Contact Us Modal */}
      {activeModal === 'contactUsModal' && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-end z-10">
          <ModalDesignGallery onClose={() => setActiveModal('')} />
        </div>
      )}
    </div>
  );
};

export default Footer;
