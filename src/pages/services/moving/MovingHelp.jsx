import React, { Component } from "react";

import star from "../../../img/star.svg";
import star_half from "../../../img/star-half-alt.svg";
import check from "../../../img/check.svg";
import "./movingHelp.scss";

class MovingHelp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
            zip: '',
            manpower: '',
            insurance: '',
            detail: '',
            duration: '',
            date: '',
            time: '',
            email: '',
            phone: '',
            
        };

        this.handleZip = this.handleZip.bind(this);
        this.handleManpower = this.handleManpower.bind(this);
        this.handleInsurance = this.handleInsurance.bind(this);
        this.handleDetail = this.handleDetail.bind(this);
        this.handleDuration = this.handleDuration.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePhone = this.handlePhone.bind(this);

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

    handleManpower(e){
        this.setState({
            manpower: e.target.value,
        })
    }

    handleInsurance(e){
        this.setState({
            insurance: e.target.value,
        })
    }

    handleDetail(e){
        this.setState({
            detail: e.target.value,
        })
    }

    handleDuration(e){
        this.setState({
            duration: e.target.value,
        })
    }

    handleDate(e){
        this.setState({
            date: e.target.value,
        })
    }

    handleTime(e){
        this.setState({
            time: e.target.value,
        })
    }

    handleEmail(e){
        this.setState({
            email: e.target.value,
        })
    }
    
    handlePhone(e){
        this.setState({
            phone: e.target.value,
        })
    }


    handleSubmit(e){
        e.preventDefault();

        console.log('Get a price:');
        console.log(this.state);

        this.setState({
            zip: '',
            manpower: '',
            insurance: '',
            detail: '',
            duration: '',
            date: '',
            time: '',
            email: '',
            phone: '',
        })
    }

    render() {
        return (

            <div className="moving__container">
                <div className="moving__desc">
                    <h1>Moving Help</h1>
                    <div className="review__star">
                        <img src={star} alt="star" width="100%" />
                        <img src={star} alt="star" width="100%" />
                        <img src={star} alt="star" width="100%" />
                        <img src={star} alt="star" width="100%" />
                        <img src={star_half} alt="star" width="100%" />
                        <div className="review__number"><u>10,160 Reviews</u></div>
                    </div>
                    <p>
                        If you're moving to a new home or relocating your office, you're probably worried about how you're going to get it all done. Luckily, Handy is here to help. When you book moving help through the Handy platform, you'll save time, money and the inevitable stress that comes with any big move. Handy will connect you with local house movers who have the skill, experience, and equipment to make your house move go as smoothly as possible. You're responsible for providing your own moving van or truck, but once you've figured that out, Handy will help you figure out the rest.  We will help you find professional furniture movers who can help with everything, from the initial packing and wrapping to heavy lifting and unpacking once you reach your final destination.
                    </p>
                    <p>
                        <b>Note: This service is for moving help, including packing boxes, unpacking boxes, heavy lifting, and loading items into a vehicle. It is not full-service moving and there is no transportation provided.</b>
                    </p>
                    <div className="review__hints">
                        <p><img src={check} alt="check" width="100%" /> Vetted and <span>background-checked professionals</span>.</p>
                        <p><img src={check} alt="check" width="100%" /> Friendly 24/7 customer service.</p>
                        <p><img src={check} alt="check" width="100%" /> Backed by the <span>Handy Happiness Guarantee</span>.</p>
                        <p><img src={check} alt="check" width="100%" /> Affordable, upfront pricing.</p>
                        <p><img src={check} alt="check" width="100%" /> No time windows, book when you want.</p>
                    </div>
                </div>

                <div className="moving__banner">
                    <div className="moving__help">  
                        <h2>Moving Help</h2>

                        <div className="zip__etc">
                            <input className="input__wide" type="text"
                                placeholder={`  ZIP Code`}
                                value={this.state.zip}
                                onChange={this.handleZip}
                            />

                            <h2>Tell us about the job</h2>

                            <h3>Number of professionals?</h3>
                            <select className="input__wide"
                                value={this.state.manpower}
                                onChange={this.handleManpower}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>

                            <h3>Is a Certificate of Insurance required?</h3>
                            <select className="input__wide"
                                value={this.state.insurance}
                                onChange={this.handleInsurance}
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                            <textarea className="input__wide input__fat" type="text"
                                placeholder={` Please describe the job in detail. (optional)`}
                                value={this.state.detail}
                                onChange={this.handleDetail}
                            />

                            <h3>How many hours would you like to book?</h3>
                            <select className="input__wide"
                                value={this.state.duration}
                                onChange={this.handleDuration}
                            >
                                <option value="2 hours">2 hours </option>
                                <option value="2.5 hours">2.5 hours </option>
                                <option value="3 hours">3 hours </option>
                                <option value="3.5 hours">3.5 hours </option>
                                <option value="4 hours">4 hours </option>
                                <option value="4.5 hours">4.5 hours </option>
                                <option value="5 hours">5 hours </option>
                                <option value="5.5 hours">5.5 hours </option>
                                <option value="6 hours">6 hours </option>
                                <option value="6.5 hours">6.5 hours </option>
                                <option value="7 hours">7 hours </option>
                                <option value="7.5 hours">7.5 hours </option>
                                <option value="8 hours">8 hours </option>
                            </select>

                            <h3>When would you like us to come?</h3>
                            <input className="input__wide"
                                 type="date"
                                 value={this.state.date}
                                 onChange={this.handleDate}
                            />

                            <select className="input__wide"
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

                            <input className="input__wide" type="text"
                                placeholder={`  Email Address`}
                                value={this.state.email}
                                onChange={this.handleEmail}
                            />

                            <input className="input__wide" type="text"
                                placeholder={`  Phone Number (Optional)`}
                                value={this.state.phone}
                                onChange={this.handlePhone}
                            />

                        </div>

                        <div className="get__price">
                            <button onClick={this.handleSubmit.bind(this)}>
                                    Get a Price
                            </button>
                        </div>

                    </div>
                    <div className="term__use">
                        <p>By signing and clicking Get a Price, you affirm you have read and agree to the <u>Handy Terms</u>, and you agree and authorize Handy and its affiliates, and their networks of service professionals, to deliver marketing calls or texts using automated technology to the number you provided above regarding your project and other home services offers. Consent is not a condition of purchase.</p>
                    </div>
                </div>

                
            </div>
        );
    }
}

export default MovingHelp;
