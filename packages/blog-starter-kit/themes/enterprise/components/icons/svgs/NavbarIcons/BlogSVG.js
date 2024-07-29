import React from 'react';

export default class BlogSVG extends React.Component {
	render() {
		return (
			<svg
				className={this.props.className}
				width="24"
				height="24"
				viewBox="0 0 50 50"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M4.69995 9.40002V40.6H45.2999V9.40002H4.69995ZM7.79995 12.5H23.4V37.5H7.79995V12.5ZM26.6 12.5H42.2V37.5H26.6V12.5ZM29.7 17.2V20.3H39.0999V17.2H29.7ZM29.7 23.4V26.5H39.0999V23.4H29.7ZM29.7 29.7V32.8H39.0999V29.7H29.7Z"
					fill="#42987E"
				/>
			</svg>
		);
	}
}
