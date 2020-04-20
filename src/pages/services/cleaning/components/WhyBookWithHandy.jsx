import React from "react";
import { StyledH2, StyledH4 } from "./CustomStyles";
import styled from "@emotion/styled";
import {css} from "@emotion/core";
import GetStartedButton from "./GetStartedButton";
import Layout from "./Layout";

const AlignLeft = styled.ul`
align-self: flex-start;
transform: translateX(10vw);
font-size: 1.2rem;
`;

const WhyBookWithHandy = ({why}) => {
  return (
    <>
        <StyledH2>{why.h}</StyledH2>
        <StyledH4>{why.p}</StyledH4>
            <AlignLeft>
                <li>Vetted and background-checked professionals. </li>
                <li>Backed by the Handy Happiness Guarantee. </li>
                <li>Friendly 24/7 customer service</li>
                <li>Affordable, upfront pricing</li>
            </AlignLeft>
        <GetStartedButton label={"Get Started"}/>

    </>
  );
};

export default WhyBookWithHandy;
