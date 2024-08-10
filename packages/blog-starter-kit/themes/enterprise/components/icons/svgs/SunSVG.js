import React from 'react';

export default class SunSVG extends React.Component {
	render() {
		return (
			<svg className={this.props.className} fill="none" viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="5.75" stroke="currentColor" strokeWidth="1.5" />
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M12 3v1.5M12 19.5V21M4.219 4.219l1.061 1.061M17.72 17.72l1.061 1.061M3 12h1.5M19.5 12H21M4.219 19.78l1.061-1.061M17.72 6.28l1.061-1.061"
				/>
			</svg>
		);
	}
}
