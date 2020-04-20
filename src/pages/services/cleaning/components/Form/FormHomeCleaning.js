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
  const [jobTime, setJobTime] = useState("9");

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
            <option value={1}>7:00 AM</option>
            <option value={2}>7:30 AM</option>
            <option value={3}>8:00 AM</option>
            <option value={4}>8:30 AM</option>
            <option value={5}>9:00 AM</option>
            <option value={6}>9:30 AM</option>
            <option value={7}>10:00 AM</option>
            <option value={8}>10:30 AM</option>
            <option value={9} selected={true}>
              11:00 AM
            </option>
            <option value={10}>11:30 AM</option>
            <option value={11}>12:00 PM</option>
            <option value={12}>12:30 PM</option>
            <option value={13}>1:00 PM</option>
            <option value={14}>1:30 PM</option>
            <option value={15}>2:00 PM</option>
            <option value={16}>2:30 PM</option>
            <option value={17}>3:00 PM</option>
            <option value={18}>3:30 PM</option>
            <option value={19}>4:00 PM</option>
            <option value={20}>4:30 PM</option>
            <option value={21}>5:00 PM</option>
            <option value={22}>5:30 PM</option>
            <option value={23}>6:00 PM</option>
            <option value={24}>6:30 PM</option>
            <option value={25}>7:00 PM</option>
            <option value={26}>7:30 PM</option>
            <option value={27}>8:00 PM</option>
            <option value={28}>8:30 PM</option>
            <option value={29}>9:00 PM</option>
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
