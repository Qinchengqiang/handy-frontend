import React, { Component } from 'react';

import './service.scss';
import { imgset } from './imgset';
import {Link} from 'react-router-dom';

class Service extends Component {

    render() {

        // console.log(Object.keys(imgset.serviceItems));

        return (
            <div className="container">
                <div className="row service__container">
                    {

                        Object.keys(imgset.serviceItems).map((key, index) => {                      // key = ['popular', 'cleaning'....]
                        
                            // console.log(`${key}: ${Object.keys(imgset.serviceItems[key])}`)      // get sub-object, keys = names, values = links

                            return (                                                                    // use RegEx to replace ' ' to '_' in order to get the Anchor Point
                                
                                <div key={index} className="service__content">

                                    {/* <a id={Object.keys(imgset.serviceItems)[index].replace(/ /g, "_")}></a> */}
                                    
                                    <h4 id={Object.keys(imgset.serviceItems)[index].replace(/ /g, "_")}>{Object.keys(imgset.serviceItems)[index]}</h4>

                                    <div className="service__item">
                                        {
                                            Object.values(imgset.serviceItems[key]).map((pic, index) => {            // this is an Array contains all the links in 'popular' or 'cleaning' etc.
                                                return (
                                                    <div key={index} className="pics">

                                                        <Link to={"./services/moving"}>
                                                            <img src={pic} alt="" height="100%" />
                                                            <h6>{(Object.keys(imgset.serviceItems[key])[index])}</h6>
                                                        </Link>

                                                    </div>
                                                );                                                                       // this is to get an Array contains all the names in 'popular' or 'cleaning' etc. by corresponding Index  
                                            })
                                        }
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Service;
