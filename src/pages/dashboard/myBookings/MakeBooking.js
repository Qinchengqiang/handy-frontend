import React, { Component, useState } from "react";
import { Form, DatePicker, Select, Button, Input } from "antd";
import "antd/dist/antd.css";
import AvailProCard from "./AvailProCard";
import { findMatchingPros } from "./api/proAPICalls";

const { Option } = Select;

/**
 * 1. list matching available pros, connected, UI pending
 * 2. confirm and place booking
 *
 */

class SearchAvailPros extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: {},
      results: [],
      isSearched: false,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { form } = this.props;
    const bedNum = form.getFieldValue("bed-picker");
    const bathNum = form.getFieldValue("bath-picker");
    const bookingDate = form.getFieldValue("date-picker").format("YYYY-MM-DD");
    const startSession = form.getFieldValue("time-picker");
    const endSession = startSession + bedNum + bathNum;
    let values = {
      serviceType: "cleaning",
      bookingDate,
      startSession,
      endSession,
    };
    this.setState(() => ({
      ...this.state,
      query: values,
    }));
    const payload = JSON.stringify(values);
    console.log(payload);
    findMatchingPros(payload).then((resolve) => {
      if (resolve.data.length > 0) {
        this.setState({
          ...this.state,
          isSearched: true,
          results: [...resolve.data],
        });
      }
    });
  };

  validateTimeSession = (rule, value, callback) => {
    const { form } = this.props;
    const bedNum = form.getFieldValue("bed-picker");
    const bathNum = form.getFieldValue("bath-picker");
    const res = value + bedNum + bathNum;
    if (res > 29) {
      callback("Too late to finish this booking");
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const bookingInfo = {
      bookingDate: this.state.query.bookingDate,
      startSession: this.state.query.startSession,
      endSession: this.state.query.endSession,
    };
    return (
      <>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator("bed-picker", {
              initialValue: 1,
            })(
              <Select>
                <Option value={1}>1 Bedroom</Option>
                <Option value={2}>2 Bedrooms</Option>
                <Option value={3}>3 Bedrooms</Option>
                <Option value={4}>4 Bedrooms</Option>
                <Option value={5}>5 Bedrooms</Option>
                <Option value={6}>6 Bedrooms</Option>
                <Option value={7}>7 Bedrooms</Option>
                <Option value={8}>8 Bedrooms</Option>
                <Option value={9}>9 Bedrooms</Option>
                <Option value={10}>10 Bedrooms</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("bath-picker", {
              initialValue: 1,
            })(
              <Select>
                <Option value={1}>1 Bathroom</Option>
                <Option value={2}>2 Bathrooms</Option>
                <Option value={3}>3 Bathrooms</Option>
                <Option value={4}>4 Bathrooms</Option>
                <Option value={5}>5 Bathrooms</Option>
                <Option value={6}>6 Bathrooms</Option>
                <Option value={7}>7 Bathrooms</Option>
                <Option value={8}>8 Bathrooms</Option>
                <Option value={9}>9 Bathrooms</Option>
                <Option value={10}>10 Bathrooms</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("date-picker")(<DatePicker />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("time-picker", {
              initialValue: 7,
              rules: [
                {
                  validator: this.validateTimeSession,
                },
              ],
            })(
              <Select>
                <Option value={1}>7:00 AM</Option>
                <Option value={2}>7:30 AM</Option>
                <Option value={3}>8:00 AM</Option>
                <Option value={4}>8:30 AM</Option>
                <Option value={5}>9:00 AM</Option>
                <Option value={6}>9:30 AM</Option>
                <Option value={7}>10:00 AM</Option>
                <Option value={8}>10:30 AM</Option>
                <Option value={9}>11:00 AM</Option>
                <Option value={10}>11:30 AM</Option>
                <Option value={11}>12:00 PM</Option>
                <Option value={12}>12:30 PM</Option>
                <Option value={13}>1:00 PM</Option>
                <Option value={14}>1:30 PM</Option>
                <Option value={15}>2:00 PM</Option>
                <Option value={16}>2:30 PM</Option>
                <Option value={17}>3:00 PM</Option>
                <Option value={18}>3:30 PM</Option>
                <Option value={19}>4:00 PM</Option>
                <Option value={20}>4:30 PM</Option>
                <Option value={21}>5:00 PM</Option>
                <Option value={22}>5:30 PM</Option>
                <Option value={23}>6:00 PM</Option>
                <Option value={24}>6:30 PM</Option>
                <Option value={25}>7:00 PM</Option>
                <Option value={26}>7:30 PM</Option>
                <Option value={27}>8:00 PM</Option>
                <Option value={28}>8:30 PM</Option>
                <Option value={29}>9:00 PM</Option>
              </Select>
            )}
          </Form.Item>
          <Button htmlType="submit" type="primary" icon="search">
            Search
          </Button>
        </Form>
        {this.state.results.map((pro, index) => {
          return (
            <AvailProCard
              bookingInfo={bookingInfo}
              proInfo={pro}
              key={`availPro-${index}`}
            />
          );
        })}
      </>
    );
  }
}

const CleaningBookingForm = Form.create({ name: "search-available-pros" })(
  SearchAvailPros
);
export default CleaningBookingForm;
