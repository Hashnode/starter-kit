import React from 'react';

export default class CareersSVG extends React.Component {
	render() {
		return (
			<svg
				className={this.props.className}
				width="24"
				height="24"
				viewBox="0 0 64 64"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M28 6C27 6 25.9 6.4 25.1 7.1C24.3 7.8 24 8.9 24 10V12H6V52H58V12H40V10C40 9 39.6 7.9 38.9 7.1C38.2 6.3 37.1 6 36 6H28ZM28 10H36V12H28V10ZM10 16H54V28C54 30.4 52.4 32 50 32H14C11.6 32 10 30.4 10 28V16ZM18 24V30H22V24H18ZM42 24V30H46V24H42ZM10 34.9C11.2 35.6 12.5 36 14 36H50C51.5 36 52.8 35.6 54 34.9V48H10V34.9Z"
					fill="#42987E"
				/>
			</svg>
		);
	}
}
