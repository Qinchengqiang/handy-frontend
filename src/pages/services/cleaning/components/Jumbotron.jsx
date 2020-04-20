import React from "react";
import styled from "@emotion/styled";
import langdingImg from "../../../../img/cleaning--landing.jpg";
import FormHomeCleaning from "./Form/FormHomeCleaning";
const Landing = styled.div`
  height: 50vh;
  max-height: 30rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  justify-content: center;
  //overflow: visible;
  @media screen and (min-width: 768px) {
    background-image: url(${props => props.img});
    background-position: center;
    background-size: cover;
  }
`;

const Jumbotron = () => {
  return (
    <Landing img={langdingImg}>
        <FormHomeCleaning/>
    </Landing>
  );
};

export default Jumbotron;
