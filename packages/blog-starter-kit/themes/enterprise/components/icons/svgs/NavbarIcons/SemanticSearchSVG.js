import React from 'react';

export default class SemanticSearchSVG extends React.Component {
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
				<path
					d="M9 21H15M9 21V16M9 21H3.6C3.44087 21 3.28826 20.9368 3.17574 20.8243C3.06321 20.7117 3 20.5591 3 20.4V16.6C3 16.4409 3.06321 16.2883 3.17574 16.1757C3.28826 16.0632 3.44087 16 3.6 16H9M15 21V9M15 21H20.4C20.5591 21 20.7117 20.9368 20.8243 20.8243C20.9368 20.7117 21 20.5591 21 20.4V3.6C21 3.44087 20.9368 3.28826 20.8243 3.17574C20.7117 3.06321 20.5591 3 20.4 3H15.6C15.4409 3 15.2883 3.06321 15.1757 3.17574C15.0632 3.28826 15 3.44087 15 3.6V9M9 16V9.6C9 9.44087 9.06321 9.28826 9.17574 9.17574C9.28826 9.06321 9.44087 9 9.6 9H15"
					stroke="#EA580C"
					stroke-width="2"
				/>
			</svg>
		);
	}
}
