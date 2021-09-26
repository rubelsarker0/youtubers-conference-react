import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import YouTuber from '../YouTuber/YouTuber';
import './YouTubers.css';

const YouTubers = () => {
	// youTuber and cartItem state declaration
	const [youTubers, setYouTubers] = useState([]);
	const [cartItems, setCartItems] = useState([]);

	// Loading youTuber data
	useEffect(() => {
		fetch(`./youTubers.json`)
			.then((response) => response.json())
			.then((data) => setYouTubers(data));
	}, []);

	// Handling add to cart btn
	const addToCartHandler = (newYouTuber) => {
		setCartItems([...cartItems, newYouTuber]);
	};
	return (
		<div className="container my-2">
			<div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 text-black">
				<div className="col-9">
					<div className="row row-cols-1 row cols-md-3 row-cols-lg-3 g-4">
						{youTubers.map((youTuber) => (
							<YouTuber
								key={youTuber.id}
								youTuber={youTuber}
								addToCartHandler={addToCartHandler}
							></YouTuber>
						))}
					</div>
				</div>
				<div className="col-3">
					<Cart cartItems={cartItems}></Cart>
				</div>
			</div>
		</div>
	);
};

export default YouTubers;
