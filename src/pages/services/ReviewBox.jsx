import React, { Component } from "react";
import RateStar from "./RateStar"
import './reviewBox.scss';

class ReviewBox extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {

    //     };
    // }

    componentDidMount() {
        //get data from the store when the first render

    }

    render() {
        return (
            <>
                <div className="review__detail">
                    <div className="detail__title">
                        <RateStar star={this.props.review.star} halfStar={this.props.review.halfStar} />
                        <h4>{this.props.review.name} <span className="gray">{this.props.review.city}</span></h4>
                    </div>
                    <p>{this.props.review.review}</p>
                </div>
            </>
        );
    }
}

export default ReviewBox;
