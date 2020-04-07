import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const detailList = props => {
	return (
		<ul>
			<li>
				<FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
				&nbsp;&nbsp;&nbsp;&nbsp;Vetted and background-checked professionals.
			</li>
			<li>
				<FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
				&nbsp;&nbsp;&nbsp;&nbsp;Friendly 24/7 customer service.
			</li>
			<li>
				<FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
				&nbsp;&nbsp;&nbsp;&nbsp;Backed by the Handy Happiness Guarantee.
			</li>
			<li>
				<FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
				&nbsp;&nbsp;&nbsp;&nbsp;Affordable, upfront pricing.
			</li>
			<li>
				<FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
				&nbsp;&nbsp;&nbsp;&nbsp;No time windows, book when you want.
			</li>
		</ul>
	);
};

export default detailList;
