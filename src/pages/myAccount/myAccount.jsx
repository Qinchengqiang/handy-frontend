import React, { Component } from "react";
import "./myAccount.scss"

// const myAccount = () => {
// 	return (
// 		<div className="content-container">
// 			<div className="booking-info-container">
// 				<div className="upcoming-booking">upcoming booking</div>
// 			</div>
// 		</div>
// 	);
// };


class MyAccount extends Component {
	constructor(props) {
		super(props);

		this.state = {

            firstName: '',
            lastName: '',
            email: '',
			phone: '',

			password: '',
			currentPwd: '',
			newPwd: '',
			renewPwd: '',

			ccNumber: '',
			ccExpire: '',
			ccExpireMM: '',
			ccExpireYY: '',
			ccSecCode: '',

			refEmail: '',
		};

		// this.handleFirstName = this.handleFirstName.bind(this);
		// this.handleLastName = this.handleLastName.bind(this);
		// this.handleEmail = this.handleEmail.bind(this);
		// this.handlePhone = this.handlePhone.bind(this);

		this.handleChange = this.handleChange.bind(this);
		this.handleSave = this.handleSave.bind(this);
		this.handleCCinfo = this.handleCCinfo.bind(this);
		this.handleChangePwd = this.handleChangePwd.bind(this);
		this.handleSend = this.handleSend.bind(this);
	}

	componentDidMount() {
		//get data from the store when the first render

	}

	
	handleChange(e) {
		this.setState({
            [e.target.name]: e.target.value,
        })
	}

	handleSave(e){
        e.preventDefault();

		console.log('Account:');
		console.log(this.state);

		// console.log(this.state.firstName);
		// console.log(this.state.lastName);
		// console.log(this.state.email);
		// console.log(this.state.phone);

        this.setState({

            firstName: '',
            lastName: '',
            email: '',
			phone: '',
        })
	}

	handleCCinfo(e){
        e.preventDefault();

		if(this.state.ccNumber.slice(0,4) > 1000 && this.state.ccNumber.length === 16){

			if((this.state.ccExpire.length === 4) && (this.state.ccSecCode.length === 3) && (this.state.ccExpire.slice(0,2) >= 1 && this.state.ccExpire.slice(0,2) <= 12) && (this.state.ccExpire.slice(-2)>=20 && this.state.ccExpire.slice(-2) <=25)){
				this.setState({

					ccNumber: this.state.ccNumber,
					ccExpireMM: this.state.ccExpire.slice(0,2),
					ccExpireYY: this.state.ccExpire.slice(-2),
					ccExpire: '',
					ccSecCode: this.state.ccSecCode,

				})
			}
			else {
				console.log(`Credit Card details incorrect...`)
			}
		}
		else {
			console.log(`Credit Card details incorrect...`)
		}
	}


	handleChangePwd(e){
        e.preventDefault();

		if(this.state.password !== this.state.currentPwd){
			console.log(`Current password is not correct, password change failed...`)
		} else if(this.state.newPwd !== this.state.renewPwd){
			console.log(`Repeat New password doesn't match, password change failed...`)
		}
		else{
			console.log(`Password changed successfully..`)
			this.setState({
				password: this.state.newPwd,
				currentPwd: '',
				newPwd: '',
				renewPwd: '',
			})
		}
		// console.log(this.state)	
	}

	handleSend(e){
		e.preventDefault();

		this.setState({
            refEmail: this.state.refEmail,
		})
		
		console.log(`Refer email will be sent to ${this.state.refEmail}`)
	}

	render() {
		return (

			<div className="account__page__container">
				<div className="account__container">
					<div className="info__container">
						<h5>Account</h5>

						<div className="info__item short__info">
							<label htmlFor="firstName">First Name</label>
							<input className="" type="text"
								name="firstName"
								value={this.state.firstName}
								onChange={this.handleChange}
                            />
						</div>

						<div className="info__item short__info">
							<label htmlFor="lastName">Last Name</label>
							<input className="" type="text"
								name="lastName"
								value={this.state.lastName}
								onChange={this.handleChange}
                            />
						</div>

						<div className="info__item short__info">
							<label htmlFor="email">Email</label>
							<input className="" type="text"
								name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
						</div>

						<div className="info__item short__info">
							<label htmlFor="phone">Phone Number</label>
							<input className="" type="text"
								placeholder={` (02) 9555 4321`}
								name="phone"
                                value={this.state.phone}
                                onChange={this.handleChange}
                            />
						</div>

						<button onClick={this.handleSave}>
							Save
                        </button>

					</div>


					<div className="info__container">
						<h5>Credit Card</h5>

						<button className="button__ccinfo">
							Update Credit Card Information
                        </button>

						<div className="ccForm">
							<h5>Secure Credit Card Form</h5>


							<div className="info__item">
								<label htmlFor="ccNumber">Credit Card Number</label>
								<input className="" type="number"
									name="ccNumber"
									value={this.state.ccNumber}
									onChange={this.handleChange}
								/>
							</div>

							<div className="info__item short__info">
								<label htmlFor="ccExpire">Expiration</label>
								<input className="" type="number"
									placeholder={` MM/YY`}
									name="ccExpire"
									value={this.state.ccExpire}
									onChange={this.handleChange}
								/>
							</div>

							<div className="info__item short__info">
								<label htmlFor="ccSecCode">Security Code</label>
								<input className="" type="number"
									placeholder={` CVC`}
									name="ccSecCode"
									value={this.state.ccSecCode}
									onChange={this.handleChange}
								/>
							</div>
						
							<button className="button__ccinfo" onClick={this.handleCCinfo}>
								Update
							</button>
						</div>
					</div>
					<div className="info__container pwd__info">
						<h5>Change Password</h5>
						<div className="info__item">
							<label htmlFor="currentPwd">Current Password</label>
							<input className="" type="password"
								name="currentPwd"
								value={this.state.currentPwd}
								onChange={this.handleChange}
                            />
						</div>

						<div className="info__item">
							<label htmlFor="newPwd">New Password</label>
							<input className="" type="password"
								name="newPwd"
								value={this.state.newPwd}
								onChange={this.handleChange}
                            />
						</div>

						<div className="info__item">
							<label htmlFor="newPwd">Repeat New Password</label>
							<input className="" type="password"
								name="renewPwd"
								value={this.state.renewPwd}
								onChange={this.handleChange}
                            />
						</div>

						<button onClick={this.handleChangePwd}>
							Change Password
                        </button>

					</div>
				</div>

				<div className="payment__container">
					<div className="info__container">
						<div className="gift__pic">
							<img src="https://cache.hbfiles.com/assets/miscellaneous/gift-send-cb2a6957e7866e75331a3ccb88e922f4.png" alt="" />
						</div>
						<div className="info__item">
							<h6>Give $40, Get $25</h6>
							<p>Your share link:</p>
							<p><span className="font__blue">handy.com/r/JRAcademy</span></p>
						</div>

						<div className="info__refEmail">
							<label htmlFor="refEmail"></label>
							<input className="" type="text"
								name="refEmail"
                                value={this.state.refEmail}
                                onChange={this.handleChange}
                            />
							<button onClick={this.handleSend}>
								Send
                        	</button>
						</div>
					</div>

					<div className="info__container">
						<div className="info__payment">
							<div className="info__savings">
								<h5>Savings</h5>
								<h4>$0.00</h4>
							</div>
							<p>
								The balance will be automatically applied to your total next time you make a booking.
							</p>
							<a href="/">
								Learn More
							</a>
						</div>
						<div className="info__payment">
							<div className="info__savings">
								<h6>Credits</h6>
								<h6>$0.00</h6>
							</div>
							<div className="info__savings">
								<h6>Saved cleanings</h6>
								<h6>$0.00</h6>
							</div>
							<div className="info__savings">
								<h6>Discounts</h6>
								<h6>$0.00</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MyAccount;
