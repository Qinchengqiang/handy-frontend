import React from "react";
import Review from "./Review";
import styled from "@emotion/styled";

const data = [
  {
    name: "Huntington C.",
    location: "New York, NY",
    rating: 5,
    feedback: "Excellent!"
  },
  {
    name: "Andrew S.",
    location: "Washington, DC, DC",
    rating: 5,
    feedback: "Place looks great!"
  },
  {
    name: " Mohnish P.",
    location: "Boston, MA",
    rating: 4,
    feedback:
      " Worked patiently and cleaned things up and ordered them. My place looks and smells good now!\n"
  },
  {
    name: " Cheryl H.",
    location: "Atlanta, GA",
    rating: 5,
    feedback: "She was extremely fast, friendly and did a great job!"
  },
  {
    name: "Bianca S.",
    location: "Los Angeles, CA ",
    rating: 5,
    feedback:
      "She was very personable and exceeded my expectations despite the difficult parking situation in my area! "
  }
];

const TotalReviews = data.length;

const ReviewBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`;
const HomeCleaningReviews = () => {
  return (
    <ReviewBox>
      {data.map((item, index) => (
        <Review content={item} key={`${item.name}` + index} />
      ))}
    </ReviewBox>
  );
};
export {TotalReviews, HomeCleaningReviews};


