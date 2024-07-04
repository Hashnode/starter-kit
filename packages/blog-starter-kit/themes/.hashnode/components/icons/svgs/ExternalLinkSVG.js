import React from 'react';

export default class ExternalLinkSVG extends React.Component {
  render() {
    return (
      <svg className={this.props.className} viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" />
      </svg>
    );
  }
}
