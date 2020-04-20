import styled from "@emotion/styled";
//four break points: 375, 768, 1220, 1440

const StyledH2 = styled.h2`
  color: inherit;
  text-align: center;
  width: 80vw;
  margin: 2rem auto;
`;

const StyledH4 = styled.h4`
  color: inherit;
  text-align: center;
  width: 90vw;
  margin: 2rem auto;
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 1.4;
  @media screen and (min-width: 768px) {
    width: 70vw;
  }
`;

const StyledH4Left = styled.h4`
  color: inherit;
  text-align: left;
  width: 90vw;
  margin: 2rem auto;
  font-weight: 300;
  @media screen and (min-width: 768px) {
    width: 70vw;
  }
`;

const ShadowedBox = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  margin: 2rem auto;
`;

const StyledP = styled.p`
  color: inherit;
  margin: 2rem auto;
  width: 90vw;
  font-weight: 400;
  line-height: 1.4rem;
  @media screen and (min-width: 768px) {
    width: 70vw;
  }
`;

const StyledPLeft = styled.p`
  text-align: left;
  color: #434343;
  font-size: 1.25rem;
  padding-bottom: .5rem;
  width: 90vw;
  font-weight: normal;
  line-height: 2rem;
  @media screen and (min-width: 768px) {
    width: 70vw;
  }
`;

const StyledBLeft = styled.b`

  color: #434343;
  font-size: 1.5rem;
  font-weight: normal;
  line-height: 1.5rem;
  text-align: left;
  padding-bottom: 1rem;
`;

const StyledH2Left = styled.h2`
  color: inherit;
  text-align: left;
  width: 70vw;
  margin: 2rem auto;
`;

export { StyledH2, StyledH4, ShadowedBox, StyledP,StyledBLeft,StyledH2Left,StyledPLeft };
