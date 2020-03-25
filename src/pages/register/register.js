import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../../redux/actions/userActions";

class RegisterPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {
				email: "",
				number: "",
				username: "",
				password: "",
				confirmPassword: ""
			},
			submitted: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const { name, value } = event.target;
		const { user } = this.state;
		this.setState({
			user: {
				...user,
				[name]: value
			}
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		this.setState({ submitted: true });
		const { user } = this.state;
		if (
			user.email.includes("@") &&
			/^[0-9]+$/.test(user.number) &&
			user.username &&
			/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(user.password) &&
			user.confirmPassword == user.password
		) {
			this.props.register(user);
			console.log(user);
		}
	}

	render() {
		const { registering } = this.props;
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
								<label htmlFor="username">Username:</label>
								<input
									type="text"
									className="form-control"
									name="username"
									value={this.state.user.username}
									onChange={this.handleChange}
								/>
								{submitted && !user.username && (
									<div className="help-block">Username is required</div>
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
								<button className="btn btn-primary">Register</button>

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

// export default RegisterPage;

function mapState(state) {
	const { registering } = state.registration;
	return { registering };
}

const actionCreators = {
	register: userActions.register
};

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };

// const { Option } = Select;
// const AutoCompleteOption = AutoComplete.Option;

// const residences = [
// 	{
// 		value: "NSW",
// 		label: "NSW",
// 		children: [
// 			{
// 				value: "Sydney",
// 				label: "Sydney",
// 				children: [
// 					{
// 						value: "Rhodes",
// 						label: "Rhodes"
// 					},
// 					{
// 						value: "Ryde",
// 						label: "Ryde"
// 					},
// 					{
// 						value: "Zetlend",
// 						label: "Zetlend"
// 					},
// 					{
// 						value: "Hurstvill",
// 						label: "Hurstvill"
// 					},
// 					{
// 						value: "Eastwood",
// 						label: "Eastwood"
// 					}
// 				]
// 			}
// 		]
// 	},
// 	{
// 		value: "VIC",
// 		label: "VIC",
// 		children: [
// 			{
// 				value: "Melbourn",
// 				label: "Melbourn",
// 				children: [
// 					{
// 						value: "Queen",
// 						label: "Queen"
// 					}
// 				]
// 			}
// 		]
// 	}
// ];

// class RegistrationForm extends React.Component {
// 	state = {
// 		confirmDirty: false,
// 		autoCompleteResult: []
// 	};

// 	handleSubmit = e => {
// 		e.preventDefault();
// 		this.props.form.validateFieldsAndScroll((err, values) => {
// 			if (!err) {
// 				console.log("Received values of form: ", values);
// 			}
// 		});
// 	};

// 	handleConfirmBlur = e => {
// 		const { value } = e.target;
// 		this.setState({ confirmDirty: this.state.confirmDirty || !!value });
// 	};

// 	compareToFirstPassword = (rule, value, callback) => {
// 		const { form } = this.props;
// 		if (value && value !== form.getFieldValue("password")) {
// 			callback("Two passwords that you enter is inconsistent!");
// 		} else {
// 			callback();
// 		}
// 	};

// 	validateToNextPassword = (rule, value, callback) => {
// 		const { form } = this.props;
// 		if (value && this.state.confirmDirty) {
// 			form.validateFields(["confirm"], { force: true });
// 		}
// 		callback();
// 	};

// 	handleWebsiteChange = value => {
// 		let autoCompleteResult;
// 		if (!value) {
// 			autoCompleteResult = [];
// 		} else {
// 			autoCompleteResult = [".com", ".org", ".net"].map(
// 				domain => `${value}${domain}`
// 			);
// 		}
// 		this.setState({ autoCompleteResult });
// 	};

// 	render() {
// 		const { getFieldDecorator } = this.props.form;
// 		const { autoCompleteResult } = this.state;

// 		const formItemLayout = {
// 			labelCol: {
// 				xs: { span: 24 },
// 				sm: { span: 9 }
// 			},
// 			wrapperCol: {
// 				xs: { span: 24 },
// 				sm: { span: 14 }
// 			}
// 		};
// 		const tailFormItemLayout = {
// 			wrapperCol: {
// 				xs: {
// 					span: 24,
// 					offset: 0
// 				},
// 				sm: {
// 					span: 16,
// 					offset: 8
// 				}
// 			}
// 		};
// 		const prefixSelector = getFieldDecorator("prefix", {
// 			initialValue: "61"
// 		})(
// 			<Select style={{ width: 70 }}>
// 				<Option value="61">+61</Option>
// 				<Option value="86">+86</Option>
// 			</Select>
// 		);

// 		const websiteOptions = autoCompleteResult.map(website => (
// 			<AutoCompleteOption key={website}>{website}</AutoCompleteOption>
// 		));

// 		return (
// 			<div className="reg-background">
// 				<section className="reg-form">
// 					<Form {...formItemLayout} onSubmit={this.handleSubmit}>
// 						<div className="box">
// 							<div className="reg-heading">
// 								<h2>CREATE ACCOUNT</h2>
// 							</div>
// 							<div className="reg-form-fields">
// 								<Form.Item label="E-mail" className="reg-input-box">
// 									{getFieldDecorator("email", {
// 										rules: [
// 											{
// 												type: "email",
// 												message: "The input is not valid E-mail!"
// 											},
// 											{
// 												required: true,
// 												message: "Please input your E-mail!"
// 											}
// 										]
// 									})(<Input style={{ width: 250 }} />)}
// 								</Form.Item>
// 								<Form.Item
// 									label="Password"
// 									className="reg-input-box"
// 									hasFeedback
// 								>
// 									{getFieldDecorator("password", {
// 										rules: [
// 											{
// 												required: true,
// 												message:
// 													"Should be combination of numbers & alphabets and more than 8 characters",
// 												pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
// 											},
// 											{
// 												validator: this.validateToNextPassword
// 											}
// 										]
// 									})(<Input.Password style={{ width: 250 }} />)}
// 								</Form.Item>

// 								<Form.Item
// 									label="Confirm Password"
// 									className="reg-input-box"
// 									hasFeedback
// 								>
// 									{getFieldDecorator("confirm", {
// 										rules: [
// 											{
// 												required: true,
// 												message: "Please confirm your password!"
// 											},
// 											{
// 												validator: this.compareToFirstPassword
// 											}
// 										]
// 									})(
// 										<Input.Password
// 											onBlur={this.handleConfirmBlur}
// 											style={{ width: 250 }}
// 										/>
// 									)}
// 								</Form.Item>

// 								<Form.Item label="Address" className="reg-input-box">
// 									{getFieldDecorator("residence", {
// 										initialValue: ["NSW", "Sydney", "Ryde"],
// 										rules: [
// 											{
// 												type: "array",
// 												required: true,
// 												message: "Please select your habitual residence!"
// 											}
// 										]
// 									})(
// 										<Cascader
// 											options={residences}
// 											style={{ width: 250, color: "black" }}
// 										/>
// 									)}
// 								</Form.Item>
// 								<Form.Item label="Phone Number" className="reg-input-box">
// 									{getFieldDecorator("phone", {
// 										rules: [
// 											{
// 												required: true,
// 												message: "Please input your phone number!"
// 											}
// 										]
// 									})(
// 										<Input
// 											addonBefore={prefixSelector}
// 											style={{ width: 250 }}
// 										/>
// 									)}
// 								</Form.Item>
// 								<Form.Item
// 									className="reg-input-box"
// 									label="Captcha"
// 									extra="We must make sure that your are a human."
// 								>
// 									<Row gutter={8}>
// 										<Col span={12}>
// 											{getFieldDecorator("captcha", {
// 												rules: [
// 													{
// 														required: true,
// 														message: "Please input the captcha you got!"
// 													}
// 												]
// 											})(<Input />)}
// 										</Col>
// 										<Col span={12}>
// 											<Button style={{ width: 120 }}>Get captcha</Button>
// 										</Col>
// 									</Row>
// 								</Form.Item>
// 								<Form.Item {...tailFormItemLayout}>
// 									{getFieldDecorator("agreement", {
// 										valuePropName: "checked"
// 									})(
// 										<Checkbox>
// 											I have read the <a href="">agreement</a>
// 										</Checkbox>
// 									)}
// 								</Form.Item>
// 								<Form.Item {...tailFormItemLayout} className=".reg-button-box">
// 									<Button
// 										type="primary"
// 										htmlType="submit"
// 										style={{
// 											width: "250px",
// 											alignItems: "center",
// 											marginLeft: "0px"
// 										}}
// 									>
// 										Sign up
// 									</Button>
// 									<Divider style={{ width: "100%", marginLeft: "-20%" }} />
// 									<Link to="/login" style={{ marginTop: "-10%" }}>
// 										<a href="">Already have an account? Login here</a>
// 									</Link>
// 								</Form.Item>
// 							</div>
// 						</div>
// 					</Form>
// 				</section>
// 			</div>
// 		);
// 	}
// }

// const WrappedRegistrationForm = Form.create({ name: "register" })(
// 	RegistrationForm
// );

// export default WrappedRegistrationForm;
