import React from 'react';

export default class PublicationPlaceholderSVG extends React.Component {
  render() {
    return (
      <svg className={this.props.className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40">
        <path
          stroke="currentColor"
          d="M5 15.6814H13.75M35 15.6814H24.1667H13.75M13.75 6.50977V15.6814M24.1667 33.4449L29.9715 33.478C32.744 33.4938 35 31.2494 35 28.4754V11.5125C35 8.74955 32.7614 6.50977 30 6.50977H10C7.23858 6.50977 5 8.74955 5 11.5125V28.4878C5 31.257 7.24839 33.4994 10.0161 33.4905L13.75 33.4785L24.1667 33.4449Z"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
}
