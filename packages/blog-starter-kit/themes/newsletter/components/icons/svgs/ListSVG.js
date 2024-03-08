import React from 'react';

export default class ListSVG extends React.Component {
  render() {
    return (
      <svg className={this.props.className} viewBox="0 0 512 512">
        <path d="M88 56H40a16 16 0 00-16 16v48a16 16 0 0016 16h48a16 16 0 0016-16V72a16 16 0 00-16-16zm0 160H40a16 16 0 00-16 16v48a16 16 0 0016 16h48a16 16 0 0016-16v-48a16 16 0 00-16-16zm0 160H40a16 16 0 00-16 16v48a16 16 0 0016 16h48a16 16 0 0016-16v-48a16 16 0 00-16-16zm416 24H168a8 8 0 00-8 8v16a8 8 0 008 8h336a8 8 0 008-8v-16a8 8 0 00-8-8zm0-320H168a8 8 0 00-8 8v16a8 8 0 008 8h336a8 8 0 008-8V88a8 8 0 00-8-8zm0 160H168a8 8 0 00-8 8v16a8 8 0 008 8h336a8 8 0 008-8v-16a8 8 0 00-8-8z" />
      </svg>
    );
  }
}
