import React from 'react';

export default class ChevronDownSVGV2 extends React.Component {
  render() {
    return (
      <svg className={this.props.className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 9L12 15L18 9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
}
