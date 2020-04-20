import React from "react";
import styled from "@emotion/styled";
import {Link} from "react-router-dom";

const StyledButton = styled(Link)`
box-sizing: border-box;
overflow: hidden;
  border: 4px solid #8fc866;
  border-radius: 5px;
  font: inherit;
  line-height: 1;
  margin: 1.5rem auto;
  text-transform: uppercase;
  padding: 1rem 4rem;
  color: #8fc866;
  transition: 0.25s;
  font-weight: 700;
  
  &:hover,
  &:focus {
  border-color: #8fc866;
  color: #fff;
  box-shadow: inset 0 -3.5rem 0 0 #8fc866;
  }
  
`;

const GetStartedButton = ({ label }) => {
  //const {label} = label;
  return (
      <StyledButton to="/">{label}</StyledButton>
  );
};

export default GetStartedButton;
