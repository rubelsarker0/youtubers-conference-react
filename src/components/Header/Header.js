import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<div className="text-white text-center rounded bg-warning header py-2 mb-4">
			<h1>
				Programming <span className="text-warning">YouTubers</span> conference
			</h1>
			<p>
				To give an better idea to the young generation that everyone should
				learn how to code.
			</p>
			<h2>Conference Budget: $200M</h2>
		</div>
	);
};

export default Header;
