import React from 'react';

export default class UpTimeNavSVG extends React.Component {
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
					d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
					fill="#00A587"
				/>
				<path
					d="M5.39941 12.0001H8.69941L10.1294 5.97761C10.2119 5.67511 10.5144 5.67511 10.5969 5.97761L11.9994 12.0001L13.4294 18.0226C13.5119 18.3251 13.8144 18.3251 13.8969 18.0226L15.2994 12.0001H18.5994"
					stroke="white"
					stroke-width="0.9625"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		);
	}
}
