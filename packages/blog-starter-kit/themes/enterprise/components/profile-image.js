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
  }
}
