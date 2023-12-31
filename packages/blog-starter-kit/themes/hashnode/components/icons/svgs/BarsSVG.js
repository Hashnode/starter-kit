import React from 'react';

export default class BarsSVG extends React.Component {
  render() {
    return (
      <svg className={this.props.className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.9889 11.9969H11.9945H3M20.9889 17.8745H3M21 6.12451H3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
}
