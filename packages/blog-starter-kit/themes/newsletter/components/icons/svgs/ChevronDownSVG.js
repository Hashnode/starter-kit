import React from 'react';

export default class ChevronDownSVG extends React.Component {
  render() {
    return (
      // <svg className={this.props.className} viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
      <svg className={this.props.className} viewBox="0 0 448 512">
        <path d="M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z" />
      </svg>
    );
  }
}
