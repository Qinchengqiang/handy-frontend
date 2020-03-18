import React, { Component } from "react";
import "./reviewAD.scss";
import ReviewCard from "./ReviewCard"
import { reviewCardSet } from './reviewCardSet';

class ReviewAD extends Component {

    // constructor(props) {
    //     super(props)

    //     this.state = {
                        
    //     };
    // }


    componentDidMount() {
        //get data from the store when the first render
    }


    render() {
        return (
            <div className="reviewCard__container">
                <div className="reviewCard__ad">
                    <div className="reviewCard__body">
                        <h2>{this.props.title}</h2>
                        <h3>{this.props.subtitle}</h3>
                        <div className="customer__card">
                            {Object.values(reviewCardSet).map((value, index) => {
                                return (
                                    <div key={index} className="review__card">
                                        <ReviewCard review={value} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReviewAD;
