import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './YouTuber.css';

const YouTuber = (props) => {
	// getting all the files from youTuber object using destructuring
	const {
		youTuberImg,
		youTuberName,
		channelName,
		contentType,
		createdDate,
		subscriber,
		monthlyIncome,
	} = props.youTuber;

	return (
		<div className="col">
			<div className="card border-success border-bottom border-3 border-0 h-100 mb-2">
				<img
					src={youTuberImg}
					className="img-fluid card-img text-centre mx-auto my-3"
					alt="youTuber-img"
				/>
				<div className="card-body">
					<h5 className="card-title">{youTuberName}</h5>
					<ul>
						<li>Channel: {channelName}</li>
						<li>Content Type: {contentType}</li>
						<li>Created: {createdDate}</li>
						<li>Subscriber: {subscriber}</li>
						<li>Income: ${monthlyIncome}</li>
					</ul>
				</div>
				<div className="card-footer text-center">
					<button
						className="btn btn-success add-to-cart mx-auto"
						onClick={() => props.addToCartHandler(props.youTuber)}
					>
						<FontAwesomeIcon icon={faShoppingCart} />
						<span className="ms-2">ADD TO CART</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default YouTuber;
