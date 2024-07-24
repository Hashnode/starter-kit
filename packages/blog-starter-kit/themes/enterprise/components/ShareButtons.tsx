import React from 'react';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'next-share';

type ShareButtonsProps = {
  url: string;
  title: string;
};

const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title }) => {
  const iconSize = 32;

  return (
    <div className="hashnode-content-style mx-auto w-full px-5 md:max-w-screen-md flex">
      <span className="mr-2 font-semibold">Paylaş:</span>
      <div className="flex flex-wrap justify-center gap-2">
        <WhatsappShareButton url={url} title={title}>
          <WhatsappIcon size={iconSize} round />
        </WhatsappShareButton>

        <EmailShareButton url={url} subject={title} body="Bu makaleye göz at:">
          <EmailIcon size={iconSize} round />
        </EmailShareButton>

        <FacebookShareButton url={url} quote={title}>
          <FacebookIcon size={iconSize} round />
        </FacebookShareButton>

        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={iconSize} round />
        </TwitterShareButton>

        <LinkedinShareButton url={url}>
          <LinkedinIcon size={iconSize} round />
        </LinkedinShareButton>

        <PinterestShareButton url={url} media={url}>
          <PinterestIcon size={iconSize} round />
        </PinterestShareButton>

        <TelegramShareButton url={url} title={title}>
          <TelegramIcon size={iconSize} round />
        </TelegramShareButton>
      </div>
    </div>
  );
};

export default ShareButtons;