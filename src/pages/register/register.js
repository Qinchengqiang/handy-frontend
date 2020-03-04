import React from "react";
import "./register.css";
import {
	Form,
	Input,
	Tooltip,
	Icon,
	Cascader,
	Select,
	Row,
	Col,
	Checkbox,
	Button,
	AutoComplete
} from "antd";

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
	{
		value: "NSW",
		label: "NSW",
		children: [
			{
				value: "Sydney",
				label: "Sydney",
				children: [
					{
						value: "Rhodes",
						label: "Rhodes"
					}
				]
			}
		]
	},
	{
		value: "VIC",
		label: "VIC",
		children: [
			{
				value: "Melbourn",
				label: "Melbourn",
				children: [
					{
						value: "Queen",
						label: "Queen"
					}
				]
			}
		]
	}
];

class RegistrationForm extends React.Component {
	state = {
		confirmDirty: false,
		autoCompleteResult: []
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log("Received values of form: ", values);
			}
		});
	};

	handleConfirmBlur = e => {
		const { value } = e.target;
		this.setState({ confirmDirty: this.state.confirmDirty || !!value });
	};

	compareToFirstPassword = (rule, value, callback) => {
		const { form } = this.props;
		if (value && value !== form.getFieldValue("password")) {
			callback("Two passwords that you enter is inconsistent!");
		} else {
			callback();
		}
	};

	validateToNextPassword = (rule, value, callback) => {
		const { form } = this.props;
		if (value && this.state.confirmDirty) {
			form.validateFields(["confirm"], { force: true });
		}
		callback();
	};

	handleWebsiteChange = value => {
		let autoCompleteResult;
		if (!value) {
			autoCompleteResult = [];
		} else {
			autoCompleteResult = [".com", ".org", ".net"].map(
				domain => `${value}${domain}`
			);
		}
		this.setState({ autoCompleteResult });
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		const { autoCompleteResult } = this.state;

		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 9 }
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 14 }
			}
		};
		const tailFormItemLayout = {
			wrapperCol: {
				xs: {
					span: 24,
					offset: 0
				},
				sm: {
					span: 16,
					offset: 8
				}
			}
		};
		const prefixSelector = getFieldDecorator("prefix", {
			initialValue: "61"
		})(
			<Select style={{ width: 70 }}>
				<Option value="61">+61</Option>
				<Option value="86">+86</Option>
			</Select>
		);

		const websiteOptions = autoCompleteResult.map(website => (
			<AutoCompleteOption key={website}>{website}</AutoCompleteOption>
		));

		return (
			<div className="content">
				<div className="container">
					<Form {...formItemLayout} onSubmit={this.handleSubmit}>
						<Form.Item label="E-mail">
							{getFieldDecorator("email", {
								rules: [
									{
										type: "email",
										message: "The input is not valid E-mail!"
									},
									{
										required: true,
										message: "Please input your E-mail!"
									}
								]
							})(<Input style={{ width: 250 }} />)}
						</Form.Item>
						<Form.Item label="Password" hasFeedback>
							{getFieldDecorator("password", {
								rules: [
									{
										required: true,
										message: "Please input your password!"
									},
									{
										validator: this.validateToNextPassword
									}
								]
							})(<Input.Password style={{ width: 250 }} />)}
						</Form.Item>
						<Form.Item label="Confirm Password" hasFeedback>
							{getFieldDecorator("confirm", {
								rules: [
									{
										required: true,
										message: "Please confirm your password!"
									},
									{
										validator: this.compareToFirstPassword
									}
								]
							})(
								<Input.Password
									onBlur={this.handleConfirmBlur}
									style={{ width: 250 }}
								/>
							)}
						</Form.Item>

						<Form.Item label="Address">
							{getFieldDecorator("residence", {
								initialValue: ["NSW", "Sydney", "Ryde"],
								rules: [
									{
										type: "array",
										required: true,
										message: "Please select your habitual residence!"
									}
								]
							})(<Cascader options={residences} style={{ width: 250 }} />)}
						</Form.Item>
						<Form.Item label="Phone Number">
							{getFieldDecorator("phone", {
								rules: [
									{ required: true, message: "Please input your phone number!" }
								]
							})(<Input addonBefore={prefixSelector} style={{ width: 250 }} />)}
						</Form.Item>
						<Form.Item
							label="Captcha"
							extra="We must make sure that your are a human."
						>
							<Row gutter={8}>
								<Col span={12}>
									{getFieldDecorator("captcha", {
										rules: [
											{
												required: true,
												message: "Please input the captcha you got!"
											}
										]
									})(<Input />)}
								</Col>
								<Col span={12}>
									<Button style={{ width: 120 }}>Get captcha</Button>
								</Col>
							</Row>
						</Form.Item>
						<Form.Item {...tailFormItemLayout}>
							{getFieldDecorator("agreement", {
								valuePropName: "checked"
							})(
								<Checkbox>
									I have read the <a href="">agreement</a>
								</Checkbox>
							)}
						</Form.Item>
						<Form.Item {...tailFormItemLayout}>
							<Button type="primary" htmlType="submit" style={{ width: 200 }}>
								Register
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		);
	}
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
	RegistrationForm
);

export default WrappedRegistrationForm;
