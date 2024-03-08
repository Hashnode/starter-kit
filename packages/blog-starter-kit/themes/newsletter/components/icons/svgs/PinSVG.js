import React from 'react';

export default class PinSVG extends React.Component {
  render() {
    return (
      <svg className={this.props.className} fill="none" viewBox="0 0 24 24">
        <path
          d="M12 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 0v6"
          stroke="stroke-width"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
}
