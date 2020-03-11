import React from "react";
import "./HandymanService.scss";
import backgroundImg from "./assets/large_other_handyman.jpg";
import GetQuoteForm from "./GetQuoteForm";

const HandymanService = () => {
	return (
		<div>
			<h1>NavBar</h1>;
			<img src={backgroundImg} />
			<GetQuoteForm />
			<div className="hs-page">
				<div className="hs-page-details">
					<h1>HandymanService</h1>
					<span>46,695 Reviews</span>
					<p>
						If you’re looking for the best handyman service to help you out
						around the house, look no further than Handy. We know you’ve got a
						never-ending list of odd jobs that need doing around your home.
						However, with the demands of work and family, it’s so hard to find
						the time to tackle them all. When you use the Handy app or website,
						you’ll be connected with local handyman professionals who can take
						care of this work for you. In addition to freeing up your time for
						the more important things in life, booking a handyman through the
						Handy platform will give you the security of knowing that things are
						being handled by an expert. If the sight of a hammer or screwdriver
						fills you with anxiety and you’d rather leave things to a
						professional, the Handy platform is ready to help.
					</p>
					<li>Vetted and background-checked professionals.</li>
				</div>
			</div>
		</div>
	);
};

export default HandymanService;
