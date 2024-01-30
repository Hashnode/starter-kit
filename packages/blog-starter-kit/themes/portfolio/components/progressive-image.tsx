import React from 'react';
import { resizeImage } from '@starter-kit/utils/image';

import { DEFAULT_AVATAR } from '../utils/const';
import { twMerge } from 'tailwind-merge';

/**
 * Progressive Image Component which loads low resolution version image before loading original
 * @param {string}    options.src         Image source
 * @param {string}    options.alt         Image alt text
 * @param {string}    options.className   Classname string
 * @param {...[type]} options.restOfProps Rest of the props passed to the child
 */
class ProgressiveImage extends React.Component<{
  resize: any;
  src: string;
  alt: string;
  className: string;
  css: string;
}> {
  image: HTMLImageElement | null = null;

  componentDidMount() {
    if (!(window as any).lazySizes && this.image) {
      this.image.setAttribute('src', this.image.getAttribute('data-src') || '');
    }
  }

  // TODO: Improve type
  replaceBadImage = (e: any) => {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.props.resize && this.props.resize.c !== 'face') {
      return;
    }
    e.target.onerror = null;
    e.target.src = DEFAULT_AVATAR;
  };

  render() {
    const { src, alt, className, resize = {}, ...restOfProps } = this.props;

    if (!src || src.trim().length === 0) return null;

    const resizedImage = resizeImage(src, resize);

    return (
      <img
        data-sizes="auto"
        loading="lazy"
        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        // eslint-disable-next-line no-return-assign
        ref={(c) => (this.image = c || null)}
        data-src={resizedImage}
        width={resize.w}
        height={resize.h}
        onError={this.replaceBadImage}
        alt={alt}
        className={twMerge('lazyload block w-full', className)}
        {...restOfProps}
      />
    );
  }
}

export default ProgressiveImage;

export { ProgressiveImage };