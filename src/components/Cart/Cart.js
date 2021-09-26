import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faShoppingCart,
	faUsers,
	faDollarSign,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css';

const Cart = (props) => {
	const { cartItems } = props;

	let youTuberIncomeTotal = cartItems.reduce(
		(previous, current) => previous + current.monthlyIncome,
		0
	);

	return (
		<div className="col">
			<div className="card item-cart border-success border-bottom border-top border-start-0 border-end-0 border-3 h-100 mb-2">
				<h2 className="text-center py-2">Cart Items</h2>
				<div className="card-body">
					<p className="text-center">
						<FontAwesomeIcon icon={faUsers} className="users fa-lg" />
						<span className="ms-2 fw-bold">
							Total YouTuber: {props.cartItems.length}
						</span>
					</p>
					<p className="text-center">
						<FontAwesomeIcon icon={faDollarSign} className="users fa-lg" />
						<span className="fw-bold"> {youTuberIncomeTotal}</span>
					</p>

					<hr />
					{cartItems.map((youTuberName) => (
						<li key={youTuberName.id}>{youTuberName.youTuberName}</li>
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
