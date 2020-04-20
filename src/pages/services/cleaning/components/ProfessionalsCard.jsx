import React from "react";
import styled from "@emotion/styled";

const ProfileCard = styled.div`
  flex: 0 0 75%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  padding: 2rem;
  margin-bottom: 3rem;
  @media screen and (min-width: 768px) 
  and (max-width: 1023px){
    flex: 0 0 45%;
  }
  @media screen and (min-width: 1024px){
  flex: 0 0 30%;
  }

  .profile {
    height: 40%;
    padding: 5%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px gainsboro;
    .avatar {
      
      border-radius: 50%;
      width: 100px;
      height: 100px;
    }
    .details {
      &>h6{
      font-size: 0.9rem;
      text-align: right;
      }
      div{
      text-align: right;
      font-size: 0.8rem;
      }
      
    }
  }
  .intro {
    margin: 5% 0;
    height: 60%;
    font-size: 0.8rem;
  }
`;

const ProfessionalsCard = ({ details }) => {
  const { name, jobs, avatar, intro } = details;
  return (
    <ProfileCard>
      <div className="profile">
        <img className="avatar" src={avatar} alt="avatar" />
        <div className="details">
          <h6>{name}</h6>
          <div>
            <span>{`${jobs} jobs completed`}</span>
          </div>
        </div>
      </div>
      <blockquote className="intro">
        <p>{intro}</p>
      </blockquote>
    </ProfileCard>
  );
};

export default ProfessionalsCard;
