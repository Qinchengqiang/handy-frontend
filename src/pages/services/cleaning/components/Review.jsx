import React from "react";
import styled from "@emotion/styled";

const ReviewBox = styled.div`
width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
  background: white;
  padding: 1rem;
  .info {
  width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin-bottom: 1rem;
    .rating {
      flex: 0 0 100%;
      @media screen and (min-width: 375px) {
        flex: 0 0 30%;
      }
    }
    .userInfo {
      flex: 0 0 100%;
      font-size: 1.2rem;
      .userLocal{
      color: gray;
      }
      @media screen and (min-width: 375px) {
        flex: 0 0 60%;
      }
    }
  }
  .comment {
  width: 100%;
  margin-bottom: 0;
  background: rgba(136,230,246,.3);
  padding: 1em;
  border-radius: 5px;
  margin: 0;
  &>p{
  margin-bottom: 0;
  }
  }
`;

const Review = ({ content }) => {
  const { name, location, feedback, rating } = content;
  return (
    <ReviewBox>
      <div className="info">
        <div className="rating">{rating}</div>
        <div className="userInfo">
          <span className="userName">{name}</span>
          <span className="userLocal">{location}</span>
        </div>
      </div>
      <div className="comment">
        <p>{feedback}</p>
      </div>
    </ReviewBox>
  );
};

export default Review;
