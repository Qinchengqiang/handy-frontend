import React from "react";
import styled from "@emotion/styled";
import { TotalReviews } from "./HomeCleaningReviews";

const FormBox = styled.div``;

const StyledForm = styled.form``;

class HomeCleaningForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FormBox>
        <h2>Home Cleaning</h2>
        <h5>{TotalReviews} Reviews</h5>
        <StyledForm>
          <label htmlFor="postCode">
            <input
              type="number"
              id="postCode"
              name="postCode"
              required={true}
              minLength={4}
              maxLength={4}
              placeholder="AU Post Code"
            />
          </label>
          <label htmlFor="houseSize">
            <select name="bedsNum" id="bedsNum">
              <option value="0">0 bed</option>
              <option value="1" selected={true}>1 bed</option>
              <option value="2">2 beds</option>
              <option value="3">3 beds</option>
              <option value="4">4 beds</option>
              <option value="5">5 beds</option>
              <option value="6">6 beds</option>
              <option value="7">7 beds</option>
              <option value="8">8 beds</option>
              <option value="9">9 beds</option>
              <option value="10">10 beds</option>
            </select>
          </label>
          <label htmlFor="bathsNum">
            <select name="bathsNum" id="bathsNum">
              <option value="0">0 bath</option>
              <option value="1" selected={true}>1 bath</option>
              <option value="2">2 baths</option>
              <option value="3">3 baths</option>
              <option value="4">4 baths</option>
              <option value="5">5 baths</option>
              <option value="6">6 baths</option>
              <option value="7">7 baths</option>
              <option value="8">8 baths</option>
              <option value="9">9 baths</option>
              <option value="10">10 baths</option>
            </select>
          </label>
          <label htmlFor="pickDate">
            <input type="date" id="pickDate" name="pickDate" required={true}/>
          </label>
          <label htmlFor="pickTime">
            <select name="pickTime" id="pickTime" required={true}>
              <option value="0700">7:00 AM</option>
              <option value="0730">7:30 AM</option>
              <option value="0800">8:00 AM</option>
              <option value="0830">8:30 AM</option>
              <option value="0900">9:00 AM</option>
              <option value="0930">9:30 AM</option>
              <option value="1000">10:00 AM</option>
              <option value="1030">10:30 AM</option>
              <option value="1100" selected={true}>11:00 AM</option>
              <option value="1130">11:30 AM</option>
              <option value="1200">12:00 PM</option>
              <option value="1230">12:30 PM</option>
              <option value="1300">1:00 PM</option>
              <option value="1330">1:30 PM</option>
              <option value="1400">2:00 PM</option>
              <option value="1430">2:30 PM</option>
              <option value="1500">3:00 PM</option>
              <option value="1530">3:30 PM</option>
              <option value="1600">4:00 PM</option>
              <option value="1630">4:30 PM</option>
              <option value="1700">5:00 PM</option>
              <option value="1730">5:30 PM</option>
              <option value="1800">6:00 PM</option>
              <option value="1830">6:30 PM</option>
              <option value="1900">7:00 PM</option>
              <option value="1930">7:30 PM</option>
              <option value="2000">8:00 PM</option>
              <option value="2030">8:30 PM</option>
              <option value="2100">9:00 PM</option>
            </select>
          </label>
          <label htmlFor="email">
            <input type="email" required={true} placeholder="Email" id="email" name="email"/>
          </label>
        </StyledForm>
      </FormBox>
    );
  }
}

export default HomeCleaningForm;
