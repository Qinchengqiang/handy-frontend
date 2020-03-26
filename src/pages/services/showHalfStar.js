import React, { Component } from "react";
import halfStarImg from "../img/star.svg";

import './reviewBox.scss';

class showHalfStar extends Component {
    constructor(props) {
        super(props);


        this.state = {

            // title : "Meet Some of Our Top Handyman Professionals",
            // subTitle : "Build a Pro Team so that you always have a great group of go-to professionals for all your household jobs.",

        };
    }

    componentDidMount() {
        //get data from the store when the first render

    }

    render() {
        return (
            <div className="review__star">
                <img src={halfStarImg} alt="star" width="100%" />
            </div>
        );
    }
}

export default showHalfStar;
