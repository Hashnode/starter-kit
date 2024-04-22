import React from 'react';

export default class AIAgentsSVG extends React.Component {
	render() {
		return (
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={this.props.className}
			>
				<rect
					x="2"
					y="6"
					width="20"
					height="16"
					rx="2"
					stroke="#2563EB"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M13 2C13 1.44772 12.5523 1 12 1C11.4477 1 11 1.44772 11 2L13 2ZM13 6L13 2L11 2L11 6L13 6Z"
					fill="#2563EB"
				/>
				<circle cx="8" cy="12" r="2" fill="#2563EB" />
				<circle cx="16" cy="12" r="2" fill="#2563EB" />
				<path
					d="M8 18H16"
					stroke="#2563EB"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		);
	}
}
