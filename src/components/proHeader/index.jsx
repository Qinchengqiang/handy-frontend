import React, { Component } from "react";
import "./proHeader.scss";
import ApplyForm from "../applyForm";

export default class ProHeader extends Component {
  render() {
    return (
        <div className="pro-header">
          <div className="pro-content-container">
            <div className="title">
              <h1><b>Start earning money this week!</b></h1>
              <p className="desc">
                Gain access to hundreds of jobs in your city and build your own
                schedule.
              </p>
            </div>
            <ApplyForm />
          </div>
          <div className="image-container">
            <img src="https://cache.hbfiles.com/assets/apply/proapply-pair-no-logo-4a8eeefe912d81ccc156a89005df5e6b.png" alt="" />
          </div>
        </div>
    );
  }
}
