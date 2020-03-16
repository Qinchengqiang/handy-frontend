import React, { Component } from "react";
import "./reviewAD.scss";
import ReviewBox from "./ReviewBox"
import { reviewSet } from './reviewSet';

class ReviewAD extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
            // zip: '',
            // tv: '',
            // date: '',
            // time: '',
            // email: '',
            
        };

        // this.handleZip = this.handleZip.bind(this);
        // this.handleTV = this.handleTV.bind(this);
        // this.handleDate = this.handleDate.bind(this);
        // this.handleTime = this.handleTime.bind(this);
        // this.handleEmail = this.handleEmail.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {
        //get data from the store when the first render
    }


    // handleZip(e){
    //     // console.log(e.target.value);

    //     // set state Tag to currentValue

    //     this.setState({
    //         zip: e.target.value,
    //     })
    // }

    // handleTV(e){
    //     // console.log(e.target.value);

    //     // set state Tag to currentValue

    //     this.setState({
    //         tv: e.target.value,
    //     })
    // }

    // handleDate(e){
    //     this.setState({
    //         date: e.target.value,
    //     })
    // }

    // handleTime(e){
    //     // set state Tag to currentValue

    //     this.setState({
    //         time: e.target.value,
    //     })
    // }

    // handleEmail(e){
    //     // set state Tag to currentValue

    //     this.setState({
    //         email: e.target.value,
    //     })
    // }
    
    // handleSubmit(e){
    //     e.preventDefault();

    //     console.log('Get a price:');
    //     console.log(this.state);

    //     this.setState({
    //         zip: '',
    //         tv: '',
    //         date: '',
    //         time: '',
    //         email: '',
    //     })
    // }

    render() {
        return (

            <div className="review__container">
                <div className="review__ad">
                    <div className="ad__title">
                        <h2>{this.props.title}</h2>
                        <h3>{this.props.subtitle}</h3>

                        <div className="customer__review">
                            <ReviewBox review={reviewSet.one}/>
                            <ReviewBox review={reviewSet.two}/>
                            <ReviewBox review={reviewSet.three}/>
                            <ReviewBox review={reviewSet.four}/>
                            <ReviewBox review={reviewSet.five}/>
                            <ReviewBox review={reviewSet.six}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReviewAD;
