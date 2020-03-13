import React from "react";
import "./HandymanService.scss";
import backgroundImg from "./assets/large_other_handyman.jpg";
import GetQuoteForm from "./GetQuoteForm";
import HandyExplain from "../../globalComponents/HandyExplain/HandyExplain.jsx";
import {
	Form,
	Input,
	Button,
	Radio,
	Select,
	Cascader,
	DatePicker,
	InputNumber,
	TreeSelect,
	Switch
} from "antd";

const HandymanService = () => {
	const config = {
		rules: [{ type: "object", required: true, message: "Please select time!" }]
	};
	let reviewAmount = 30000;

	return (
		<div>
			<img className="back-image" src={backgroundImg} />

			<div className="hs-main">
				<div className="hs-page-details">
					<h1>Handyman Service</h1>
					<div className="reviews">
						{reviewAmount}{" "}
						<a style={{ textDecoration: "underline" }}>Reviews</a>
					</div>
					<p>
						If you’re looking for the best handyman service to help you out
						around the house, look no further than Handy. We know you’ve got a
						never-ending list of odd jobs that need doing around your home.
						However, with the demands of work and family, it’s so hard to find
						the time to tackle them all. <br />
						<br />
						When you use the Handy app or website, you’ll be connected with
						local handyman professionals who can take care of this work for you.
						In addition to freeing up your time for the more important things in
						life, booking a handyman through the Handy platform will give you
						the security of knowing that things are being handled by an expert.
						If the sight of a hammer or screwdriver fills you with anxiety and
						you’d rather leave things to a professional, the Handy platform is
						ready to help.
					</p>
					<ul>
						<li>Vetted and background-checked professionals.</li>
						<li>Friendly 24/7 customer service.</li>
						<li>Backed by the Handy Happiness Guarantee.</li>
						<li>Affordable, upfront pricing.</li>
						<li>No time windows, book when you want.</li>
					</ul>
				</div>
				<div className="form">
					<div>
						<Form>
							<Form.Item>
								<h4>Handyman Service</h4>
								<Input placeholder="ZIP Code" style={{ height: "40px" }} />
							</Form.Item>

							<Form.Item>
								<h4>Tell us about the job</h4>
								<Input.TextArea
									style={{ height: "120px" }}
									Input
									placeholder="Please describe the job in detail.(required)"
								/>
							</Form.Item>

							<Form.Item>
								<h6>How many hours would you like to book?</h6>
								<Select>
									<Select.Option style={{ height: "40px" }} value="2 hours">
										2 hours
									</Select.Option>
								</Select>
							</Form.Item>

							<Form.Item name="date-time-picker" {...config}>
								<h6>When would you like us to come?</h6>
								<DatePicker
									placeholder="Please select Date & Time"
									showTime
									format="YYYY-MM-DD HH:mm:ss"
									style={{ width: "100%" }}
								/>
							</Form.Item>
							<Button
								className="button"
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
			</div>
			<HandyExplain />
		</div>
	);
};

export default HandymanService;
