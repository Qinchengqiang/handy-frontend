import React, { Component, useState } from "react";
import "./service.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import {imgset} from './imgset'

//there is no state change , so no need to use component
function Service() {
    let { path, url } = useRouteMatch();
    return (
      <div className="container">
        <div className="row service__container">
          {Object.keys(imgset.serviceItems).map((key, index) => {
            // key = ['popular', 'cleaning'....]
            // get sub-object, keys = names, values = links
            return (
              // use RegEx to replace ' ' to '_' in order to get the Anchor Point
              <div key={index} className="service__content">
                <h4 id={Object.keys(imgset.serviceItems)[index].replace(/ /g, "_")}>{Object.keys(imgset.serviceItems)[index]}</h4>

                <div className="service__item">
                  {Object.values(imgset.serviceItems[key]).map(
                    (pic, index) => {
                      // this is an Array contains all the links in 'popular' or 'cleaning' etc.

                      console.log(`SERVICE: ${imgset.serviceItems[key]}`);

                      return (
                        <Link
                          to={`${url}/${key === "Cleaning" ? "cleaning" : ""}`}
                          key={index} className="pics"
                        >
                          <img src={pic} alt="" height="100%" />
                          <h6>
                            {Object.keys(imgset.serviceItems[key])[index]}
                          </h6>
                        </Link>
                      ); // this is to get an Array contains all the names in 'popular' or 'cleaning' etc. by corresponding Index
                    }
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {/* <Switch>
          <Route exact path={`${path}/cleaning`}>
            <Cleaning />
          </Route>
        </Switch> */}
      </div>
    );
  }


export default Service;
