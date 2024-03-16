import React from 'react';

export default class CheckSVG extends React.Component {
  render() {
    return (
      <svg className={this.props.className} viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
      </svg>
    );
  }
}
