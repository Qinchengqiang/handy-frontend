import React, { Component } from "react";
import "./HandymanService.scss";
import backgroundImg from "./assets/large_other_handyman.jpg";
import QuoteForm from "./component/GetQuoteForm";
import HandyExplain from "../../globalComponents/HandyExplain/HandyExplain.jsx";
import HandyLocation from "../../globalComponents/HandyLocation/handyLocation";

import RatingStars from "./component/ratingStar";
import DetailList from "./component/detailList";
import ServiceDescription from "../../globalComponents/serviceDescription/serviceDescription";

import img1 from "./assets/large_other_handyman_service_1-b09bcce53e6c53426326ba00b935de3c47e50ee18d585cb7950f74f8ea3775fb.jpg";
import img2 from "./assets/large_other_handyman_service_2-28c1bd76c25e555556cc65ac94f877826158442b991c382f756151d87bae435f.jpg";
import img3 from "./assets/large_other_handyman_service_3-b3633a57fb857dc76034244c2bb94e2187e5200ab132d5f59a071a65d8845f52.jpg";

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
				<ServiceDescription
					mainheader="The Best Handyman Service"
					img1={img1}
					header1="Save Time and Money with a Top-Rated Handyman"
					content1="Professionals offering handyman services through Handy come with a
					wealth of skill and experience. This means that you can book a
					versatile handyman who can take care of a variety of jobs at the
					time that's best for you. Rather than spending your Saturday morning
					trying to find studs in your walls or questioning whether you can
					trust the guy at the hardware store to give you good advice, why not
					use the Handy platform to hire a handyman who can deal with
					everything? Whether you need urgent help for home repairs, or just a
					few odd jobs taken care of, using Handy to book a general contractor
					or handyman can help you save both time and money."
					img2={img2}
					header2="No Need for Tools"
					content2="Many an amateur DIY enthusiast has spotted a job that needs doing
					and gone out to buy the appropriate tools, only to find that
					they're way out of their league. Book a handyman using the Handy
					app or website and you can be sure that they'll arrive with
					everything they’ll need to get the job done. In addition to your
					run-of-the-mill screwdrivers and hammers, your handyman specialist
					will read your job description before they arrive to ensure they
					come prepared for anything that your specific job may require.
					Don't worry about whether you’ve got the right tools for the job.
					Book a handyman through Handy and leave it to the professionals."
					img3={img3}
					header3="Your Time is Precious"
					content3="Whether you’re a busy professional or a stay-at-home parent, Handy
					knows that your time is precious. When you book handyman services
					through Handy, you can be sure that they’ll show up on time and
					ready to take care of your handyman tasks as quickly and efficiently
					as possible. You’ll find them fully equipped and with all the
					necessary skills to get things done. In the meantime, you can use
					that time to get some extra work done or take the kids down to the
					park. Using Handy means that your odd jobs and home repairs get
					done, while you focus on the important things in life."
				/>
				<HandyLocation />
			</div>
		);
	}
}

export default HandymanService;
