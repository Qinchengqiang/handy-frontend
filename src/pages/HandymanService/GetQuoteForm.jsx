import React, { useState } from "react";
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
import "./quoteForm.scss";
const GetQuoteForm = () => {
	const [componentSize, setComponentSize] = useState("small");
	const onFormLayoutChange = ({ size }) => {
		setComponentSize(size);
	};
	return (
		<div className="quote-form">
			<Form
				labelCol={{ span: 4 }}
				wrapperCol={{ span: 14 }}
				layout="horizontal"
				initialValues={{ size: componentSize }}
				onValuesChange={onFormLayoutChange}
				size={componentSize}
			>
				<h3>Handyman Service</h3>
				<Form.Item>
					<Input placeholder="ZIP CODE" />
				</Form.Item>
				<h3>Tell us about the job</h3>
				<Form.Item>
					<Input />
				</Form.Item>
				<h5>How many hours would you like to book?</h5>
				<Form.Item>
					<Select>
						<Select.Option value="2 hours">Demo</Select.Option>
					</Select>
				</Form.Item>
				<h5>When would you like us to come?</h5>
				<Form.Item label="DatePicker">
					<DatePicker />
				</Form.Item>

				<Form.Item>
					<Button>Get a Price!</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default GetQuoteForm;
