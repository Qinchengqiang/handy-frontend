import React, { Component } from "react";

import star from "../../../img/star.svg";
import star_half from "../../../img/star-half-alt.svg";
import "./tvMounting.scss";

class TVMounting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
            zip: '',
            tv: '',
            date: '',
            time: '',
            email: '',
            
        };

        this.handleZip = this.handleZip.bind(this);
        this.handleTV = this.handleTV.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {
        //get data from the store when the first render
    }


    handleZip(e){
        // console.log(e.target.value);

        // set state Tag to currentValue

        this.setState({
            zip: e.target.value,
        })
    }

    handleTV(e){
        // console.log(e.target.value);

        // set state Tag to currentValue

        this.setState({
            tv: e.target.value,
        })
    }

    handleDate(e){
        this.setState({
            date: e.target.value,
        })
    }

    handleTime(e){
        // set state Tag to currentValue

        this.setState({
            time: e.target.value,
        })
    }

    handleEmail(e){
        // set state Tag to currentValue

        this.setState({
            email: e.target.value,
        })
    }
    
    handleSubmit(e){
        e.preventDefault();

        console.log('Get a price:');
        console.log(this.state);

        this.setState({
            zip: '',
            tv: '',
            date: '',
            time: '',
            email: '',
        })
    }

    render() {
        return (

            <div className="tv__container">
                <div className="tv__banner">
                    <div className=" tv__mounting">  
                        <h2>TV Mounting</h2>
                        <div className="review__star">
                            <img src={star} alt="star" width="100%" />
                            <img src={star} alt="star" width="100%" />
                            <img src={star} alt="star" width="100%" />
                            <img src={star} alt="star" width="100%" />
                            <img src={star_half} alt="star" width="100%" />
                            <div className="review__number"><u>14,420 Reviews</u></div>
                        </div>
                        <div className="zip__etc">

                            <input className="input__wide" type="text"
                                placeholder={`  ZIP Code`}
                                value={this.state.zip}
                                onChange={this.handleZip}
                            />

                            <select className="input__wide"
                                value={this.state.tv}
                                onChange={this.handleTV}
                            >
                                <option value="1 TV">1 TV</option>
                                <option value="2 TVs">2 TVs</option>
                                <option value="3 TVs">3 TVs</option>
                                <option value="4 TVs">4 TVs</option>
                                <option value="5 TVs">5 TVs</option>
                                <option value="6 TVs">6 TVs</option>
                            </select>

                            <input className="input__narrow"
                                 type="date"
                                 value={this.state.date}
                                 onChange={this.handleDate}
                            />

                            <select className="input__narrow"
                                value={this.state.time}
                                onChange={this.handleTime}
                            >
                                <option value="7:00 AM">7:00 AM</option>
                                <option value="7:30 AM">7:30 AM</option>
                                <option value="8:00 AM">8:00 AM</option>
                                <option value="8:30 AM">8:30 AM</option>
                                <option value="9:00 AM">9:00 AM</option>
                                <option value="9:30 AM">9:30 AM</option>
                                <option value="10:00 AM">10:00 AM</option>
                                <option value="10:30 AM">10:30 AM</option>
                                <option value="11:00 AM">11:00 AM</option>
                                <option value="11:30 AM">11:30 AM</option>
                                <option value="12:00 PM">12:00 PM</option>
                                <option value="12:30 PM">12:30 PM</option>
                                <option value="1:00 PM">1:00 PM</option>
                                <option value="1:30 PM">1:30 PM</option>
                                <option value="2:00 PM">2:00 PM</option>
                                <option value="2:30 PM">2:30 PM</option>
                                <option value="3:00 PM">3:00 PM</option>
                                <option value="3:30 PM">3:30 PM</option>
                                <option value="4:00 PM">4:00 PM</option>
                                <option value="4:30 PM">4:30 PM</option>
                                <option value="5:00 PM">5:00 PM</option>
                                <option value="5:30 PM">5:30 PM</option>
                                <option value="6:00 PM">6:00 PM</option>
                                <option value="6:30 PM">6:30 PM</option>
                                <option value="7:00 PM">7:00 PM</option>
                                <option value="7:30 PM">7:30 PM</option>
                                <option value="8:00 PM">8:00 PM</option>
                                <option value="8:30 PM">8:30 PM</option>
                                <option value="9:00 PM">9:00 PM</option>
                            </select>

                        </div>

                        <div className="email__price">

                            <input className="input__wide" type="text"
                                placeholder={`  Email`}
                                value={this.state.email}
                                onChange={this.handleEmail}
                            />

                            <button onClick={this.handleSubmit.bind(this)}>
                                    Get a Price
                            </button>
                        </div>
                    </div>
                    <div className="term__use">
                        <p>By entering my email above, I agree to receive updates and exclusive offers from Handy. Consent can be withdrawn any time. For more details see our <u>Terms of Use</u> or <u>Contact Us</u>.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TVMounting;
