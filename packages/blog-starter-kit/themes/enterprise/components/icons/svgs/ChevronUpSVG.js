import React from 'react'

export default class ChevronUpSVG extends React.Component {
  render(){
    return (
      <svg viewBox="0 0 24 24" fill="none" className={this.props.className}>
        <path
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 14l-5-5-5 5"
        />
      </svg>
    )
  }
}