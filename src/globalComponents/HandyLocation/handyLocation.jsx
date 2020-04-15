import React from "react";
import "./handyLocation.scss";
import img from "./locations_map-7aa2f2a22ee5dabd12caf07653caf7e4aec4e23add6f889eaef5c99bf362737a.svg";

const rollTop = () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
};
const handyLocation = props => {
	return (
		<div>
			<div className="handy-location-container">
				<h1>Where Does Handy Operate?</h1>
				<p>
					Handy operates in hundreds of cities around the United States, Canada,
					and the U.K. No matter where you live, Handy has you covered.
				</p>
				<div className="handy-location-detail">
					<div className="list-container">
						<ul>
							<li>
								<span>NYC</span>
							</li>
							<li>
								<span>SF</span>
							</li>
							<li>
								<span>Boston</span>
							</li>
							<li>
								<span>Chicago</span>
							</li>
							<li>
								<span>Miami</span>
							</li>
							<li>
								<span>DC</span>
							</li>
							<li>
								<span>Los Angeles</span>
							</li>
							<li>
								<span>Houston</span>
							</li>
							<li>
								<span>London</span>
							</li>
							<li>
								<span>Toronto</span>
							</li>
						</ul>
					</div>
					<div style={{ backgroundColor: "white" }}>
						<img src={img} />
					</div>
				</div>
			</div>
			<div className="why-handy-container">
				<h1>Out of Your Depth? Get Handyman Help</h1>
				<p>
					Everyone has a different skill set, and not everyone was put on this
					planet with the same aptitude for manual labor. And that’s okay!
					Whatever your needs, the Handy platform can connect you with the right
					professionals who won’t be daunted by your task, whatever it might be.
					Whether you need help with a door that won’t close, a squeaky hinge,
					drywall repair, or fixing a broken table leg, we’ve got you covered.
					You can’t go wrong with Handy—let us connect you with a top-rated
					handyman with the right skills for your job.
				</p>
				<h1>The Handy Happiness Guarantee for Handyman Services</h1>
				<p>
					We know that it can be a bit scary at times to let a stranger into
					your home to do handyman work for you. That’s why every booking done
					through the Handy platform is protected by the Handy Happiness
					Guarantee. In the unlikely event that you’re not satisfied with the
					work that your professional has done, we’ll work hard to make things
					right.
				</p>
				<button onClick={rollTop}>Get Started</button>
			</div>
		</div>
	);
};

export default handyLocation;
