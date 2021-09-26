import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Youtuber.css';

const Youtuber = (props) => {
	// console.log(props.youtuber);
	const {
		youtuberImg,
		youtuberName,
		channelName,
		channelDesc,
		contentType,
		createdDate,
		subscriber,
		monthlyIncome,
	} = props.youtuber;

	return (
		<div className="col">
			<div className="card border-success border-bottom border-3 border-0 h-100 mb-2">
				<img
					src={youtuberImg}
					className="img-fluid card-img text-centre mx-auto my-3"
					alt="youtuber-img"
				/>
				<div className="card-body">
					<h5 className="card-title">{youtuberName}</h5>
					{/* <p className="channel-description">{channelDesc.slice(0, 200)}</p> */}
					<ul>
						<li>Channel: {channelName}</li>
						<li>Content Type: {contentType}</li>
						<li>Created: {createdDate}</li>
						<li>Subscriber: {subscriber}</li>
						<li>Income: {monthlyIncome}</li>
					</ul>
				</div>
				<div className="card-footer text-center">
					<button
						className="btn btn-success add-to-cart mx-auto"
						onClick={() => props.addToCartHandler(props.youtuber)}
					>
						<FontAwesomeIcon icon={faShoppingCart} />
						<span className="ms-2">ADD TO CART</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Youtuber;
