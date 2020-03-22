import React, { Component } from "react";
import "./customerReviews.scss";
import ReviewBox from "./ReviewBox"
import { customerReviewsSet } from './customerReviewsSet';

class CustomerReviews extends Component {

    constructor(props) {
        super(props)

        this.state = {
            reviewNumber: "14,481",
        };
    }


    componentDidMount() {
        //get data from the store when the first render
    }


    render() {
        return (

            <div className="review__container">
                <div className="review__body">
                    <h2>Customer Reviews</h2>
                    <h3>{`${this.state.reviewNumber} Reviews for ${this.props.subService}`}</h3>

                    <div className="">
                        {Object.values(customerReviewsSet).map((value, index) => {
                            return (
                                <div key={index} className="">
                                    <ReviewBox review={value} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomerReviews;
