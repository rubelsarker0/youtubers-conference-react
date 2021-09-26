import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css';

const Cart = (props) => {
	const { cartItems } = props;

	let youtuberIncomeTotal = cartItems.reduce(
		(previous, current) => previous + current.monthlyIncome,
		0
	);

	return (
		<div className="col">
			<div className="card item-cart border-success border-bottom border-top border-start-0 border-end-0 border-3 h-100 mb-2">
				<h1 className="text-center">Cart Items</h1>
				<div className="card-body">
					<li>Total Youtuber: {props.cartItems.length}</li>
					<li>Total Income: ${youtuberIncomeTotal}</li>

					<hr />
					{cartItems.map((youtuberName) => (
						<li key={youtuberName.id}>{youtuberName.youtuberName}</li>
					))}
				</div>
				<div className="card-footer text-center">
					<button className="btn btn-success add-to-cart mx-auto">
						<FontAwesomeIcon icon={faShoppingCart} />
						<span className="ms-2">REVIEW CARD</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
