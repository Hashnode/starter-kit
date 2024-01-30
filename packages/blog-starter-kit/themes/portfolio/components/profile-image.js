import React from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/legacy/image';

import { resizeImage } from '@starter-kit/utils/image';
import { DEFAULT_AVATAR } from '../utils/const';

export default class ProfileImage extends React.Component {
  componentDidMount() {
    if (!this.props.user) {
      return;
    }
    if (this.props.user.isDeactivated) {
      return;
    }
  }

  render() {
    const user = this.props.user;
    const blogURL = this.props.blogURL;
    return (
      <a
        href={
          blogURL
            ? blogURL
            : user && !user.isDeactivated
            ? `https://hashnode.com/@${user.username}`
            : this.props.postUrlForAnonymous
            ? this.props.postUrlForAnonymous
            : '#'
        }
        ref={(c) => {
          this.profileImage = c;
        }}
        className={`relative block h-full w-full`}
      >
        <Image
          className={twMerge(this.props.className, `relative z-20 block w-full rounded-full`)}
          src={
            user && user.profilePicture
              ? resizeImage(user.profilePicture, { w: this.props.width || 70, h: this.props.height || 70, c: 'face' })
              : DEFAULT_AVATAR
          }
          width={this.props.width ? parseInt(this.props.width) : 70}
          height={this.props.height ? parseInt(this.props.height) : 70}
          // resize={{
          //   w: this.props.width ? parseInt(this.props.width) : 70,
          //   h: this.props.height ? parseInt(this.props.height) : 70,
          //   c: 'face',
          // }}
          alt={user ? user.name + "'s photo" : undefined}
        />
      </a>
    );
  }
}
