import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { alertActions } from "../../redux/actions/alertActions";
import { userActions } from "../../redux/actions/userActions";
import history from "../../history";

class RegisterPage extends React.Component {
	constructor(props) {
		super(props);

		// clear alert on location change
		this.props.clearAlerts();

		this.state = {
			user: {
				email: "",
				number: "",
				password: "",
				confirmPassword: "",
				nickname: "",
			},
			submitted: false,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const { name, value } = event.target;
		const { user } = this.state;

		this.setState(
			{
				user: {
					...user,
					[name]: value,
				},
			},
			() => {
				if (name === "nickname") {
					console.log("nickname" + this.state.user.nickname);
				}
			}
		);
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState({ submitted: true });
		const { user } = this.state;
		if (
			user.email.includes("@") &&
			/^[0-9]+$/.test(user.number) &&
			/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(user.password) &&
			user.confirmPassword == user.password
		) {
			this.props.register(user);
			console.log(user);
		}
	}

	render() {
		const { registering, alert } = this.props;
		const { user, submitted } = this.state;
		return (
			<div className="reg-background">
				<section className="reg-form">
					<form name="form" onSubmit={this.handleSubmit}>
						<div className="box">
							<div className="reg-heading">
								<h2>CREATE ACCOUNT</h2>
							</div>
							<div>
								{alert.message && (
									<div className={`alert ${alert.type}`}>{alert.message}</div>
								)}
							</div>
							<div>
								<label htmlFor="nickname">Name:</label>
								<input
									type="text"
									className="form-control"
									name="nickname"
									value={this.state.user.nickname}
									onChange={this.handleChange}
								/>
							</div>
							<div>
								<label htmlFor="email">Email:</label>
								<input
									type="text"
									className="form-control"
									name="email"
									value={this.state.user.email}
									onChange={this.handleChange}
								/>
								{submitted && !user.email.includes("@") && (
									<div className="help-block">
										Please input the correct Email!
									</div>
								)}
							</div>
							<div>
								<label htmlFor="password">Password:</label>
								<input
									type="password"
									className="form-control"
									name="password"
									value={this.state.user.password}
									onChange={this.handleChange}
								/>
								{submitted &&
									!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
										user.password
									) && (
										<div className="help-block">
											Password Should be combination of numbers & alphabets and
											more than 8 characters
										</div>
									)}
							</div>
							<div>
								<label htmlFor="confirmPassword">Confirm Password:</label>
								<input
									type="password"
									className="form-control"
									name="confirmPassword"
									value={this.state.user.confirmPassword}
									onChange={this.handleChange}
								/>
								{submitted && user.confirmPassword != user.password && (
									<div className="help-block">
										Two passwords that you enter is inconsistent!
									</div>
								)}
							</div>

							<div>
								<label htmlFor="number">Phone Number:</label>
								<input
									type="text"
									className="form-control"
									name="number"
									value={this.state.user.number}
									onChange={this.handleChange}
								/>
								{submitted && !/^[0-9]+$/.test(user.number) && (
									<div className="help-block">
										Please input the correct number!
									</div>
								)}
							</div>

							<div>
								<button className="btn btn-primary">SIGN UP</button>

								<Link
									to="/login"
									className="btn btn-link"
									style={{ marginTop: "15px" }}
								>
									Cancel
								</Link>
							</div>
						</div>
					</form>
				</section>
			</div>
		);
	}
}

function mapState(state) {
	const { registering, alert } = state;
	return { registering, alert };
}

const actionCreators = {
	register: userActions.register,
	clearAlerts: alertActions.clear,
};

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
