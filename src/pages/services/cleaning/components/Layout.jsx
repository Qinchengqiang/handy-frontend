import React from "react";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import Jumbotron from "./Jumbotron";

const StyledMain = styled.main`
  margin: 2rem auto;
  width: 90vw;
  max-width: 1280px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }
          //normalise vertical spacing
          //* + * {
          //  margin-top: 1rem;
          //}

          html,
          body {
            margin: 0;
            color: #434343;
            font-family: -apple-system BlinkMacSystemFont, "Segoe UI", Roboto,
              Helvetica, Arial, sans-serif;
            font-size: 16px;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;

            /* remove margin for the main div that gatsby mounts into */
            //> div {
            //  margin-top: 0;
            //}
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              color: #434343;
              line-height: 1.1;
              + * {
                margin-top: 0.5rem;
              }
            }
            strong {
              color: #434343;
            }

            li {
              margin-top: 0.25rem;
            }
          }
        `}
      />
      <Jumbotron />

      <StyledMain>{children}</StyledMain>
    </>
  );
};

export default Layout;
