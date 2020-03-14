import React, { Component } from "react";
import "./HandymanService.scss";
import backgroundImg from "./assets/large_other_handyman.jpg";
import QuoteForm from "./component/GetQuoteForm";
import HandyExplain from "../../globalComponents/HandyExplain/HandyExplain.jsx";

import RatingStars from "./component/ratingStar";
import DetailList from "./component/detailList";
import ServiceDescription from "./component/serviceDescription/serviceDescription";

class HandymanService extends Component {
	state = {
		reviewAmount: 30000
	};

	render() {
		return (
			<div>
				<img className="back-image" src={backgroundImg} />

				<div className="hs-main">
					<div className="hs-page-details">
						<h1>Handyman Service</h1>
						<div className="reviews">
							<RatingStars reviewAmount={this.state.reviewAmount} />
						</div>
						<p>
							If you’re looking for the best handyman service to help you out
							around the house, look no further than Handy. We know you’ve got a
							never-ending list of odd jobs that need doing around your home.
							However, with the demands of work and family, it’s so hard to find
							the time to tackle them all. <br />
							<br />
							When you use the Handy app or website, you’ll be connected with
							local handyman professionals who can take care of this work for
							you. In addition to freeing up your time for the more important
							things in life, booking a handyman through the Handy platform will
							give you the security of knowing that things are being handled by
							an expert. If the sight of a hammer or screwdriver fills you with
							anxiety and you’d rather leave things to a professional, the Handy
							platform is ready to help.
						</p>
						<DetailList />
					</div>
					<QuoteForm />
				</div>
				<HandyExplain />
				<ServiceDescription />
			</div>
		);
	}
}

export default HandymanService;
