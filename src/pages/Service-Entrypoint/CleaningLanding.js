
import React from "react";
import { Row, Col } from "antd";
//import './_Landing.scss';
//import {jsx, css} from "@emotion/core";
//import landingImg from '../../img/cleaning--landing.jpg';







const CleaningLanding = () => {
  return (
    <div>
      <div className="form">
      </div>

      <div className="intro">
        <h1 className="intro__heading">How Handy Works</h1>
        <Row gutter={50}>
          <Col md={24} lg={8}>
            <div className="intro__card">
              <h2 className="intro__card--heading">Set Up a Cleaning Plan</h2>
              <p className="intro__card--text">
                Choose a weekly, biweekly, or monthly cleaning plan. We schedule
                your recurring bookings to make things easy - but don’t worry, you
                can always reschedule if things change.
              </p>
            </div>

          </Col>
          <Col md={24} lg={8}>
            <div className="intro__card">
              <h2 className="intro__card--heading">Manage Everything Online</h2>
              <p className="intro__card--text">
                Rescheduling, contacting your professional, and tipping are just a
                tap away.
              </p>
            </div>

          </Col>
          <Col md={24} lg={8}>
            <div className="intro__card">
              <h2 className="intro__card--heading">Sit Back and Relax</h2>
              <p className="intro__card--text">
                An experienced, fully-equipped housekeeping professional will be
                there on time.
              </p>
            </div>

          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CleaningLanding;
