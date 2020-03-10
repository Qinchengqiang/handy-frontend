import React, { Component } from "react";
import "./apply.scss";
// import {Link} from 'react-router-dom'
import ProHeader from '../../components/proHeader'
import ProFeature from "../../components/proFeature";
import Comment from "../../components/comment";
import Requirement from "../../components/requirement";
import Footer from '../../components/footer'

export default class Apply extends Component {
  render() {
    return (
      <div className="apply">
        <ProHeader />
        {/* <ProFeature />
        <div className="pro-headline"><span className="pro-headline-text">"</span></div>
        <Comment />
        <div className="pro-headline"><span className="pro-headline-text">“</span></div>
        <Requirement />
        <Footer /> */}
      </div>
    );
  }
}
