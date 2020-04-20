import React from "react";
import { StyledPLeft, StyledBLeft, StyledH2Left } from "./CustomStyles";
import styled from "@emotion/styled";
import GetStartedButton from "./GetStartedButton";

const MarginBox = styled.div`
  margin-bottom: 1rem;
`;

const data = [
  {
    b: "Instant online booking with 7am-11pm availability ",
    p:
      "Book online instantly, and schedule your first cleaning for as early as tomorrow. Get your home cleaned anytime from 7am to 11pm, 7 days a week."
  },
  {
    b: "Friendly, vetted professionals ",
    p:
      "All professionals on the Handy platform are screened, background checked, and are rated by customers like you to ensure quality."
  },
  {
    b: "Cleaned the way you want ",
    p:
      "Professionals bring supplies and work from a comprehensive checklist that you can tailor to your liking. You can work with the same cleaner every time. Handy strives to match you with the right professional for you and your home. We also provide you with a team of professionals to provide backup in case of scheduling conflicts."
  },
  {
    b: "Flexible scheduling ",
    p:
      "Set a schedule that fits your life. Handy helps you automatically schedule your weekly, biweekly, or monthly cleaning, so you can focus on the other things in your life. Reschedule or adjust the frequency of your cleanings as needed. Get the benefit of a regularly cleaned home. Easy and secure online payments. No more last minute runs to the bank. Pay online and tip at your discretion."
  },
  {
    b: "See the progress of your cleaning from your phone",
    p:
      "Not able to be home during the cleaning? No problem. The Handy app allows your to see when your cleaner arrives and check the progress of their cleaning."
  },
  {
    b: "The Handy Happiness Guarantee ",
    p:
      "Your happiness is our goal. If you're not satisfied with the quality of the service, we'll send another pro to make it right at no extra charge."
  }
];

export default () => (
  <>
    <StyledH2Left>
      Here's Why Handy is the Best House Cleaning Service
    </StyledH2Left>

    {data.map((item,index)=>(
        <MarginBox key={"whybest"+index}>
          <StyledBLeft>{item.b}</StyledBLeft>
          <StyledPLeft>{item.p}</StyledPLeft>
        </MarginBox>
    ))}
    <GetStartedButton label={"Get Started"}/>
  </>
);
