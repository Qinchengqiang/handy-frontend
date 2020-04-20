import React from "react";
import styled from "@emotion/styled";

const StyledBanner = styled.div`
  width: 100vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 320px;
  .contentBox {
  
    width: 80vw;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    height: fit-content;
    background: white;
    padding: 1.5rem;
  }
  @media screen and (min-width: 768px) {
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: ${props => props.dir} top;
    .contentBox {
  
      transform: translateX(
        ${props => (props.dir === "right" ? '-20%' : '20%')}
      );
      flex: 0 0 40%;
    }
  }
`;

const WhatIncluded = ({ content }) => {
  const { h, points, img, dir } = content;
  return (
    <StyledBanner dir={dir} img={img}>
      <div className="contentBox">
        <h4>{h}</h4>
        <ul>
          {points.map((item, index) => (
            <li key={h+index}>{item}</li>
          ))}
        </ul>
      </div>
    </StyledBanner>
  );
};

export default WhatIncluded;
