import React from 'react';

export default class ContactsSVG extends React.Component {
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
					d="M4.69995 10.9V39H45.2999V10.9H4.69995ZM11.4 14.1H38.5L24.9 23.1L11.3 14.1H11.4ZM7.79995 15.4L18.3 22.4L7.79995 29.8V15.4ZM42.2 15.4V29.8L31.7 22.4L42.2 15.4ZM21.1 24.3L24.1 26.3L25 26.8L25.9 26.3L28.9 24.3L42.2 33.6V35.9H7.79995V33.6L21.1 24.3Z"
					fill="#42987E"
				/>
			</svg>
		);
	}
}
