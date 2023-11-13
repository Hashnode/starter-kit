import React from 'react';

export default class ContactSVG extends React.Component {
	render() {
		return (
			<svg
				width="24"
				height="24"
				viewBox="0 0 40 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={this.props.className}
			>
				<path
					d="M40 13V14.5C34.5 16.5 27.5 17.7 20 17.7C12.5 17.7 5.5 16.5 0 14.5V13C0 10.4 2.1 8.19995 4.8 8.19995H35.2C37.9 8.19995 40 10.3 40 13Z"
					fill="#568CF8"
				/>
				<path
					d="M20 20.7C27.5 20.7 34.4 19.5999 40 17.7999V27C40 29.6 37.9 31.7999 35.2 31.7999H4.8C2.1 31.7999 0 29.6 0 27V17.7C5.6 19.6 12.5 20.7 20 20.7Z"
					fill="#084EE5"
				/>
			</svg>
		);
	}
}
