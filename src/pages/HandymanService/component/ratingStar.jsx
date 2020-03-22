import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ratingStars = props => {
	return (
		<div>
			<div className="rating-stars">
				<FontAwesomeIcon icon={faStar} style={{ color: "orange" }} />
			</div>
			<div className="rating-stars">
				<FontAwesomeIcon icon={faStar} style={{ color: "orange" }} />
			</div>
			<div className="rating-stars">
				<FontAwesomeIcon icon={faStar} style={{ color: "orange" }} />
			</div>
			<div className="rating-stars">
				<FontAwesomeIcon icon={faStar} style={{ color: "orange" }} />
			</div>
			<div className="rating-stars">
				<FontAwesomeIcon icon={faStar} style={{ color: "orange" }} />
			</div>
			&nbsp;&nbsp;
			<a style={{ textDecoration: "underline" }}>
				{props.reviewAmount} Reviews
			</a>
		</div>
	);
};

export default ratingStars;
