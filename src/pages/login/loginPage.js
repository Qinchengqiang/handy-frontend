import React from "react";
import "./login.scss";
import history from "../../history";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../../redux/actions/userActions";

class LoginPage extends React.Component {
	constructor(props) {
		super(props);

		this.props.logout();

		this.state = {
			username: "",
			password: "",
			submitted: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleSubmit(e) {
		e.preventDefault();

		this.setState({ submitted: true });
		const { username, password } = this.state;
		if (username && password) {
			this.props.login(username, password);
			localStorage.setItem("token", true);
			localStorage.setItem("localuser", username);
		}
	}

	render() {
		const { loggingIn } = this.props;
		const { username, password, submitted } = this.state;
		return (
			<div className="login-container">
				<div className="login-form">
					<form name="form" onSubmit={this.handleSubmit}>
						<div className="box">
							<div className="heading">
								<h2>Login</h2>
							</div>
							<div>
								<label htmlFor="username">Username</label>
								<input
									type="text"
									className="form-control"
									name="username"
									value={username}
									onChange={this.handleChange}
								/>
								{submitted && !username && (
									<div className="help-block">Username is required</div>
								)}
							</div>
							<div>
								<label htmlFor="password">Password</label>
								<input
									type="password"
									className="form-control"
									name="password"
									value={password}
									onChange={this.handleChange}
								/>
								{submitted && !password && (
									<div className="help-block">Password is required</div>
								)}
							</div>
							<div>
								<button className="btn btn-primary">Login</button>
								{loggingIn && (
									<img
										style={{ marginTop: "50px", marginLeft: "20px" }}
										src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
									/>
								)}
								<Link
									to="/register"
									className="btn btn-link"
									style={{ marginTop: "50px" }}
								>
									Register
								</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

function mapState(state) {
	const { loggingIn } = state.authentication;
	return { loggingIn };
}

const actionCreators = {
	login: userActions.login,
	logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };

// class NormalLoginForm extends React.Component {
// 	handleSubmit = e => {
// 		e.preventDefault();
// 		this.props.form.validateFields((err, values) => {
// 			if (!err) {
// 				console.log("Received values of form: ", values);
// 			}
// 		});
// 	};

// 	render() {
// 		const { getFieldDecorator } = this.props.form;
// 		return (
// 			<div className="login-container">
// 				<div className="login-form">
// 					<Form onSubmit={this.handleSubmit} className="form">
// 						<div className="box">
// 							<div className="heading">
// 								<h2 className="form-header">Login to handy</h2>
// 							</div>
// 							<div className="form-fields">
// 								<Form.Item className="input-box">
// 									{getFieldDecorator("username", {
// 										rules: [
// 											{
// 												required: true,
// 												message: "Please input your username!"
// 											}
// 										]
// 									})(
// 										<Input
// 											className="form-input"
// 											prefix={
// 												<Icon
// 													type="user"
// 													style={{ color: "rgba(0,0,0,.25)" }}
// 												/>
// 											}
// 											placeholder="Username"
// 										/>
// 									)}
// 								</Form.Item>
// 								<Form.Item className="input-box">
// 									{getFieldDecorator("password", {
// 										rules: [
// 											{
// 												required: true,
// 												message: "Please input your Password!"
// 											}
// 										]
// 									})(
// 										<Input
// 											className="form-input"
// 											prefix={
// 												<Icon
// 													type="lock"
// 													style={{ color: "rgba(0,0,0,.25)" }}
// 												/>
// 											}
// 											type="password"
// 											placeholder="Password"
// 										/>
// 									)}
// 								</Form.Item>

// 								<Form.Item>
// 									<div className="options">
// 										{getFieldDecorator("remember", {
// 											valuePropName: "checked",
// 											initialValue: true
// 										})(<Checkbox>Remember me</Checkbox>)}
// 										<Row className="button-box">
// 											<Link to="/myaccount">
// 												<Button
// 													style={{
// 														width: "300px",
// 														height: "40px",
// 														marginTop: "30px"
// 													}}
// 													type="primary"
// 													htmlType="submit"
// 													className="login-form-button"
// 												>
// 													Log in
// 												</Button>
// 											</Link>
// 										</Row>

// 										<a className="login-form-forgot" href="">
// 											Forgot your password?
// 										</a>
// 									</div>
// 									<Divider></Divider>
// 								</Form.Item>
// 							</div>

// 							<Link to="/register" style={{ marginTop: "-10%" }}>
// 								<a href="">Sign up</a>
// 							</Link>
// 						</div>
// 					</Form>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
// 	NormalLoginForm
// );

// export default WrappedNormalLoginForm;
