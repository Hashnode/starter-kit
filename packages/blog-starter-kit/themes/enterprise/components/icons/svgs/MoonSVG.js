import React from 'react';

export default class MoonSVG extends React.Component {
	render() {
		return (
			<svg className={this.props.className} fill="none" viewBox="0 0 24 24">
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M21 12.8a9 9 0 11-9.8-9 7 7 0 109.8 9z"
				/>
			</svg>
		);
	}
}
