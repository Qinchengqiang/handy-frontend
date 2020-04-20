import React, { useState } from "react";
import useDropdown from "./useDropdown";
import "./FormHomeCleaning.scss";



const populateOptions = (label, maxNum) => {
  let results = [];
  for (let i = 0; i <= maxNum; i++) {
    results.push([i, `${i} ${label}`]);
  }
  return results;
};

const FormHomeCleaning = () => {
  //const [isPostcodeValid, setIsValid] = useState(true);
  const [postcode, setPostcode] = useState("2000");
  const [email, setEmail] = useState("");
  const [jobDate, setJobDate] = useState("");
  const [jobTime, setJobTime] = useState("1100");

  const bedsOptions = populateOptions("beds", 10);
  const bathsOptions = populateOptions("baths", 10);
  const [bedNum, BedsDropdown] = useDropdown("beds", 1, bedsOptions);
  const [bathsNum, BathsDropdown] = useDropdown("baths", 1, bathsOptions);
  const formData = {
    postcode: postcode,
    email: email,
    jobDate: jobDate,
    jobTime: jobTime,
    beds: bedNum,
    baths: bathsNum
  };

  const validatePostcode = input => {
    let parsed = parseInt(input, 10);
    let result;

    if (isNaN(parsed)) {
      result = false;
    } else if (
      (parsed >= 800 && parsed <= 900) ||
      (parsed >= 2000 && parsed <= 7999)
    ) {
      result = true;
    } else result = false;

    return result;
  };

  const handleSubmit = e => {
    e.preventDefault();
    validatePostcode(postcode)
      ? console.log(formData)
      : alert("Wrong AU post code");
  };
  return (
      <div className="form--row">
      <h1>House Cleaning</h1>
      <form onSubmit={handleSubmit}>
        <div className="form__postcode">
          <label htmlFor="postcode" />
          <input
            className="form__item--postcode"
            type="text"
            name="postcode"
            id="postcode"
            minLength={4}
            maxLength={4}
            value={postcode}
            placeholder="Post Code"
            onChange={event => setPostcode(event.target.value)}
            onBlur={event => setPostcode(event.target.value)}
          />
        </div>
        <div className="form__dropdown">
          <BedsDropdown />
          <BathsDropdown />
        </div>
        <div className="form__dropdown">
          <label htmlFor="jobDate" />
          <input
            className="form__item"
            id="jobDate"
            type="date"
            value={jobDate}
            onChange={e => setJobDate(e.target.value)}
            onBlur={e => setJobDate(e.target.value)}
          />
          <label htmlFor="jobTime" />
          <select
            className="form__item"
            name="jobTime"
            id="jobTime"
            required={true}
            value={jobTime}
            onChange={e => setJobTime(e.target.value)}
            onBlur={event => setJobTime(event.target.value)}
          >
            <option value="0700">7:00 AM</option>
            <option value="0730">7:30 AM</option>
            <option value="0800">8:00 AM</option>
            <option value="0830">8:30 AM</option>
            <option value="0900">9:00 AM</option>
            <option value="0930">9:30 AM</option>
            <option value="1000">10:00 AM</option>
            <option value="1030">10:30 AM</option>
            <option value="1100" selected={true}>
              11:00 AM
            </option>
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
        </div>
        <div className="form__email">
          <label htmlFor="email" />
          <input
            className="form__item--email"
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onBlur={e => setEmail(e.target.value)}
          />
        </div>
        <div className="buttonWrapper">
          <button type="submit" className="form__button">
            get quote
          </button>
        </div>
      </form>
    </div>
    
  );
};

export default FormHomeCleaning;
