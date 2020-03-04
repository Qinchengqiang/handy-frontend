import React, { Component } from "react";
import "./apply.scss";
import ApplyProForm from "../../components/applyForm";
import ProHeader from "../../assets/images/apply/pro-header.png";
import ProFeature from "../../components/proFeature";
import Comment from "../../components/comment";
import Requirement from "../../components/requirement";

export default class Apply extends Component {
  render() {
    return (
      <div className="apply">
        <div className="pro-header">
        <div className="pro-content-container">
          <div className="title">
            <h1>Start earning money this week!</h1>
            <h3 className="desc">
              Gain access to hundreds of jobs in your city and build your own
              schedule.
            </h3>
          </div>
            <ApplyProForm />
            </div>
        <div className="image-container">
          <img src={ProHeader} alt="" />
        </div>
        </div>
        <ProFeature />
        <div className="pro-headline"><span className="pro-headline-text">“</span></div>
        <Comment />
        <div className="pro-headline"><span className="pro-headline-text">“</span></div>
        <Requirement />
      </div>
    );
  }
}
