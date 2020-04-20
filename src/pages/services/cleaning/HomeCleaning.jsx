import React from "react";
import Layout from "./components/Layout";
import {
  StyledH2,
  StyledH4,
  ShadowedBox,
  StyledPLeft
} from "./components/CustomStyles";
import HandyExplain from "../../../globalComponents/HandyExplain/HandyExplain";
import HandyFeature from "../../../globalComponents/HandyFeature/HandyFeature";
import WhyBookWithHandy from "./components/WhyBookWithHandy";
import WhatIncluded from "./components/WhatIncluded";
import faqFunc from "../../../globalComponents/Faq/faqFunc";
import MeetProfessionals from "./components/MeetProfessionals";
import {
  HomeCleaningReviews,
  TotalReviews
} from "./components/HomeCleaningReviews";
import WhyBestHomeCleaning from "./components/WhyBestHomeCleaning";
import bedroom from "../../../img/bedroom.jpg";
import bathroom from "../../../img/bathroom.jpg";
import kitchen from "../../../img/kitchen.jpg";
import extras from "../../../img/extras.jpg";
import MakeHouseCleaningAffordable from "./components/MakeHouseCleaningAffordable";
import GetStartedButton from "./components/GetStartedButton";

//data for Why book with handy
const WHY = {
  h: "Why Book House Cleaning Services with Handy?",
  p:
    "If you’re in need of home cleaning, apartment cleaning, or a maid service, we’re simply the best, most convenient home cleaning service out there. We know you want the cheapest house cleaning available while still having the confidence that you will receive a cleaner who is thorough and professional, with keen attention to detail. When you sign up for a Handy house cleaning plan, we aim to offer you just that. And Handy helps schedule your recurring cleanings automatically for you, so you can focus on the other things in your life."
};

//data for What's included section
const WHATINCLUDED = [
  {
    h: "Bedroom, Living Room & Common Areas",
    points: [
      "Dust all accessible surfaces",
      "Wipe down all mirrors and glass fixtures",
      "Clean all floor surfaces",
      "Take out garbage and recycling"
    ],
    img: bedroom,
    dir: "left"
  },
  {
    h: "Bathroom Cleaning",
    points: [
      "Wash and sanitize the toilet, shower, tub and sink",
      "Dust all accessible surfaces",
      "Wipe down all mirrors and glass fixtures",
      "Clean all floor surfaces",
      "Take out garbage and recycling"
    ],
    img: bathroom,
    dir: "right"
  },
  {
    h: "Kitchen Cleaning",
    points: [
      "Dust all accessible surfaces",
      "Empty sink and load up dishwasher with dirty dishes",
      "Wipe down exterior of stove, oven and fridge",
      "Clean all floor surfaces",
      "Take out garbage and recycling"
    ],
    img: kitchen,
    dir: "left"
  },
  {
    h: "Extras",
    points: [
      "Inside cabinets",
      "Inside fridge",
      "Inside oven",
      "Laundry wash & dry"
    ],
    img: extras,
    dir: "right"
  }
];
//generate What's included section component
const CleaningWhatIncluded = () => {
  return WHATINCLUDED.map(item => <WhatIncluded content={item} />);
};

//FaQ content
const questionsArray = [
  "What's included in a cleaning?",
  "Which Handy professional will come to my place?",
  "Can I skip or reschedule bookings?",
  "How much are house cleaning services?",
  "Are house cleaning services worth it?",
  "Does house cleaning include laundry?"
];

const answersArray = [
  "See what's included in a cleaning service.",
  "Handy has a vast network of experienced, top-rated cleaners. Based on the time and date of your request, we work to assign the best professional available.\\n Like working with a specific pro? Add them to your Pro\n" +
    "  Team from the mobile app and they'll be requested first\n" +
    "  for all future bookings. \\n You will receive an email with details about your\n" +
    "  professional prior to your appointment.",
  "You can reschedule any booking without penalty, so long as you\n" +
    "                  do so at least 24 hours ahead of the scheduled start time.",
  "This depends on the size of your house — enter how many\n" +
    "                  bedrooms and bathrooms you have into the form above and we’ll\n" +
    "                  give you an instant quote. We’re confident you’ll find prices\n" +
    "                  extremely reasonable given the high level of service you will\n" +
    "                  receive from your pro.",
  "Yes, it certainly is, assuming you’re the type of person who\n" +
    "                    likes to come home to a beautiful and pristine home without\n" +
    "                    having lifted a finger! If you’re a time-strapped\n" +
    "                    professional working a 16-hour day, a busy mom or dad\n" +
    "                    shuffling children between daycare and school and soccer\n" +
    "                    practices, or just someone who simply has too much to do and\n" +
    "                    far too little time to do it in, house cleaning can be at\n" +
    "                    the bottom of your list. Nobody wants a messy home, and yet\n" +
    "                    nobody really enjoys chores either – this is where Handy\n" +
    "                    comes in.\n We’ve got the solutions. You demand top quality house\n" +
    "                    cleaning services, and Handy puts you in touch with the best\n" +
    "                    house cleaners. Cost-wise, you’re looking at a service\n" +
    "                    that’s affordable and great value for money. And let’s be\n" +
    "                    honest -- a couple extra hours with the kids at the end of\n" +
    "                    the day can be priceless.",
  "If you have a washing machine and/or dryer in your home,\n" +
    "                    your professional can absolutely wash and fold your laundry\n" +
    "                    for you! Be sure to add it as an extra during the checkout\n" +
    "                    process so the professional can be sure to set aside enough\n" +
    "                    time to clean your home and still have time for laundry (it\n" +
    "                    will add an extra hour onto your booking)."
];

//generates faq component

const FaQ = faqFunc(questionsArray, answersArray);

const HomeCleaning = () => {
  return (
    <Layout>
      <HandyExplain />
      <ShadowedBox>
        <StyledH2>The Most Reliable Name in House Cleaning</StyledH2>
        <StyledH4>
          Here's how it works -- just go to our website or app and tell us your
          zipcode and how big your house, apartment, or flat is. Handy will then
          connect you with a top-rated home cleaning services professional to
          help take the stress out of your life.;
        </StyledH4>
        <HandyFeature />
      </ShadowedBox>
      <WhyBookWithHandy why={WHY} />

      <StyledH2>What's Included in a House Cleaning?</StyledH2>
      <StyledH4>
        Here is what you can expect from a house cleaning from a Handy
        professional. Download the app to share further cleaning details and
        instructions!
      </StyledH4>
      <CleaningWhatIncluded />
      <FaQ />
      <GetStartedButton label={"Get Started"} />
      <StyledH2>Meet Some of Our Top House Cleaning Professionals</StyledH2>
      <StyledH4>
        Build a Pro Team so that you always have a great group of go-to
        professionals for all your home cleaning services.
      </StyledH4>
      <MeetProfessionals />
      <StyledH2>Customer Reviews</StyledH2>
      <StyledH4>{TotalReviews} Reviews for Home Cleaning</StyledH4>
      <HomeCleaningReviews />
      <GetStartedButton label={"Get Started"} />
      <WhyBestHomeCleaning />
      <MakeHouseCleaningAffordable />
    </Layout>
  );
};

export default HomeCleaning;
