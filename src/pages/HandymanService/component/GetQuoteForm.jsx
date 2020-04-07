import React, { Component } from "react";
import { Form, Input, Button, Select, DatePicker } from "antd";

class GetQuoteForm extends Component {
	state = {
		config: {
			rules: [
				{ type: "object", required: true, message: "Please select time!" }
			]
		}
	};

	handleSubmit = e => {
		e.preventDefault();

		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log("Received values of form: ", values);
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="form">
				<div>
					<Form onSubmit={this.handleSubmit}>
						<Form.Item>
							<h4>Handyman Service</h4>
							{getFieldDecorator("ZIP CODE", {
								rules: [
									{
										required: true,
										message: "Please input your ZIP CODE!"
									}
								]
							})(<Input placeholder="ZIP Code" style={{ height: "40px" }} />)}
						</Form.Item>

						<Form.Item>
							<h4>Tell us about the job</h4>
							{getFieldDecorator("Job details.", {
								rules: [
									{
										required: true,
										message: "Please input your job description!"
									}
								]
							})(
								<Input.TextArea
									style={{ height: "120px" }}
									Input
									placeholder="Please describe the job in detail.(required)"
								/>
							)}
						</Form.Item>

						<Form.Item>
							<h6>How many hours would you like to book?</h6>
							{getFieldDecorator("Booking hours", {
								rules: [
									{
										required: true,
										message: "Please choose your booking hours!"
									}
								]
							})(
								<Select>
									<Select.Option style={{ height: "40px" }} value="2 hours">
										2 hours
									</Select.Option>
									<Select.Option style={{ height: "40px" }} value="2.5 hours">
										2.5 hours
									</Select.Option>
									<Select.Option style={{ height: "40px" }} value="3 hours">
										3 hours
									</Select.Option>
									<Select.Option style={{ height: "40px" }} value="3.5 hours">
										3.5 hours
									</Select.Option>
									<Select.Option style={{ height: "40px" }} value="4 hours">
										4 hours
									</Select.Option>
									<Select.Option style={{ height: "40px" }} value="4.5 hours">
										4.5 hours
									</Select.Option>
								</Select>
							)}
						</Form.Item>

						<Form.Item name="date-time-picker" {...this.config}>
							<h6>When would you like us to come?</h6>
							{getFieldDecorator("Available time", {
								rules: [
									{
										required: true,
										message: "Please choose your available time!"
									}
								]
							})(
								<DatePicker
									placeholder="Please select Date & Time"
									showTime
									format="YYYY-MM-DD HH:mm"
									style={{ width: "100%" }}
								/>
							)}
						</Form.Item>
						<Button
							style={{
								width: "320px",
								height: "40px",
								marginTop: "20px",
								backgroundColor: "green"
							}}
							type="primary"
							htmlType="submit"
							className="login-form-button"
						>
							Get a Price
						</Button>
					</Form>
				</div>
			</div>
		);
	}
}
const QuoteForm = Form.create()(GetQuoteForm);
export default QuoteForm;
