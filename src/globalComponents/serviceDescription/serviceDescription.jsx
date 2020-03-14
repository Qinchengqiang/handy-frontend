import React from "react";
import "./serviceDescription.scss";

const serviceDescirption = props => {
	return (
		<div className="service-description">
			<h1>{props.mainheader}</h1>
			<div className="service-description__section-1">
				<img src={props.img1} />
				<div className="service-description__details">
					<h3>{props.header1}</h3>
					<p>{props.content1}</p>
				</div>
			</div>
			<div>
				<div className="service-description__section-2">
					<img src={props.img2} />
					<div className="service-description__details-2">
						<h3>{props.header2}</h3>
						<p>{props.content2}</p>
					</div>
				</div>
			</div>
			<div className="service-description__section-1">
				<img src={props.img3} />
				<div className="service-description__details">
					<h3>{props.header3}</h3>
					<p>{props.content3}</p>
				</div>
			</div>
		</div>
	);
};

export default serviceDescirption;
