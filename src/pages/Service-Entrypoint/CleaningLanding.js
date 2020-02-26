/** @jsx jsx */
import React from "react";
import { Row, Col } from "antd";
//import './CleaningLanding.css';
import {jsx, css} from "@emotion/core";
import landingImg from '../../img/cleaning--landing.jpg';


const form = css`
min-height: 50vh;
  background: aliceblue;
  background: url(${landingImg});
  background-size: cover;
  background-position: center;
`;

const intro = css`
max-width: 80vw;
  margin: 0 auto;
  text-align: center;
  h1 {
  font-size: 2rem;
  }
  h2 {
  font-size: 1.2rem;
  
  }
  
`;
const introCard = css`
text-align: center;
p {
text-align: center;
font-size: 1.1rem;
}
`;




const CleaningLanding = () => {
  return (
    <div>
      <div css={form}>
      </div>

      <div css={intro}>
        <h1 >How Handy Works</h1>
        <Row gutter={40}>
          <Col md={24} lg={8}>
            <div css={introCard}>
              <h2>Set Up a Cleaning Plan</h2>
              <p>
                Choose a weekly, biweekly, or monthly cleaning plan. We schedule
                your recurring bookings to make things easy - but don’t worry, you
                can always reschedule if things change.
              </p>
            </div>

          </Col>
          <Col md={24} lg={8}>
            <div css={introCard}>
              <h2>Manage Everything Online</h2>
              <p >
                Rescheduling, contacting your professional, and tipping are just a
                tap away.
              </p>
            </div>

          </Col>
          <Col md={24} lg={8}>
            <div css={introCard}>
              <h2>Sit Back and Relax</h2>
              <p>
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
