import React, { Component } from "react";
import RateStar from "./RateStar"
import RateClient from "./RateClient"
import './reviewCard.scss';

class ReviewCard extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {

  //   };
  // }

  componentDidMount() {
    //get data from the store when the first render

  }

  render() {
    return (
      <>
        <div className="review__title">
          <div className="review__pic">
            <img src={this.props.review.pic} alt="" width="100%" />
          </div>
          <div className="review__rate">
            <h4>{this.props.review.name}</h4>
            <RateStar star={this.props.review.star} halfStar={this.props.review.halfStar} />
            <RateClient level={this.props.review.level} />
            <div><img src="https://cache.hbfiles.com/assets/pro-search/badges/experience_icon-def227f46b45497e726cbdcbeffb7563.png" alt="" width="18px" />{` ${this.props.review.completed} jobs completed`}</div>
          </div>
        </div>
        <p>{this.props.review.review}</p>
      </>
    );
  }
}

export default ReviewCard;
