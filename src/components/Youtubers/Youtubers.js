import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Youtuber from '../Youtuber/Youtuber';
import './Youtubers.css';

const Youtubers = () => {
	const [youtubers, setYoutubers] = useState([]);
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		fetch(`./youtubers.json`)
			.then((response) => response.json())
			.then((data) => setYoutubers(data));
	}, []);

	const addToCartHandler = (newYoutuber) => {
		setCartItems([...cartItems, newYoutuber]);
	};
	return (
		<div className="container my-2">
			<div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 text-black">
				<div className="col-9">
					<div className="row row-cols-1 row cols-md-3 row-cols-lg-3 g-4">
						{youtubers.map((youtuber) => (
							<Youtuber
								key={youtuber.id}
								youtuber={youtuber}
								addToCartHandler={addToCartHandler}
							></Youtuber>
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

export default Youtubers;
