import React from "react";
import { Icon } from 'antd'
import './furnitureAssembly.scss'
import './FurnitureCounter.jsx'
import FurnitureCounter from "./FurnitureCounter.jsx";
import AssemblyFormCreate from './AssemblyFormCreate'
import FormItem from './FormItem';
import AssemblyFormInput from './AssemblyFormInput';



const AssemblyFormTest = (title) => {
return class extends React.Component {

    onSubmit = (e) => {
        e.preventDefault();
        this.props.validateFields((isValid, values) => {
            if (isValid) {
                console.log(values);
                alert("getting a price for you~~~~");
            } else {
                alert("oops sth went wrong");
            }
        });
    };

    render() {
        // extract the form error
        const { getFieldDec, isFieldTouched, getFieldError } = this.props;
        const zipcodeError = isFieldTouched("zipcode") && getFieldError("zipcode");
        const emailError = isFieldTouched("email") && getFieldError("email")
        const detailError = isFieldTouched("detail") && getFieldError("detail")
        const phoneError = isFieldTouched("phone") && getFieldError("phone")
        const styleObj = {
            height: "5em",
            paddingBottom: "3em"
        }
        return (
            <div className="assembly-furniture_form">
                <div className="assembly-furniture_form-title">{title} Assembly</div>
                <FormItem validateStatus="error" help={zipcodeError || ""} >
                    {getFieldDec("zipcode", {
                        rules: [{ required: true, message: "Please input your ZIP Code!" }]
                    })(<AssemblyFormInput type="number" prefix={<Icon type="home" className="assembly-form_prefix" style={{ color: "#BABBBD" }} />} placeholder="ZIP Code" />)}
                </FormItem>
                <p className="assembly-furniture_form-title_sub">Tell us about the job</p>
                <FurnitureCounter />
                <FormItem validateStatus="error" help={detailError || ""}>
                    {getFieldDec("detail", {
                        rules: [{ required: true, message: "job description?" }]
                    })(<AssemblyFormInput type="text" style={styleObj} prefix={<Icon type="zhihu" className="assembly-form_prefix" style={{ color: "#BABBBD" }} />} placeholder="Please describe the job in detail" />)}
                </FormItem>
                <p className="assembly-furniture_form-title_sub">We recommend 2 <b>Hours</b></p>
                <select id="assemblyHours" name="assemblyHours" className="assembly-furniture_form-drop">
                    <option value="2">2 hours</option>
                    <option value="2.5">2.5 hours</option>
                    <option value="3">3.5 hours</option>
                    <option value="4">4 hours</option>
                </select>
                {/* <input type="date" id="assembly-job-date" name="jobDate"
                value="2020-04-01"
                min="2020-01-01" max="2030-12-31" /> */}
                 <select id="assembly-time" name="assemblyTime" className="assembly-furniture_form-drop">
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="11:00 AM">11: 00 AM</option>
                    <option value="1:00 PM">1: 00 PM</option>
                    <option value="3:00 PM">3: 00 PM</option>
                </select>

                <FormItem validateStatus="error" help={emailError || ""}>
                    {getFieldDec("email", {
                        rules: [{ required: true, message: "You forget your email address my boi" }]
                    })(<AssemblyFormInput type="text" prefix={<Icon type="mail" className="assembly-form_prefix" style={{ color: "#BABBBD" }} />} placeholder="Email Address" />)}
                </FormItem>
                <FormItem validateStatus="error" help={phoneError || ""}>
                    {getFieldDec("phone", {
                        rules: [{ required: true, message: "You forget your phonenumber my boi" }]
                    })(<AssemblyFormInput type="number" prefix={<Icon type="mobile" className="assembly-form_prefix" style={{ color: "#BABBBD" }} />} placeholder="Phone Number" />)}
                </FormItem>
                <button onClick={this.onSubmit} className="assembly-from_button">Get a Price</button>
            </div>
        );
    }
}}
export const FurnitureForm = AssemblyFormCreate(AssemblyFormTest("Furniture"));
export const OfficeForm = AssemblyFormCreate(AssemblyFormTest("Office Furniture"))
