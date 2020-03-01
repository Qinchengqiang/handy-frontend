import React from 'react';
import './nav.scss';
import { Button } from 'antd';
import "antd/dist/antd.css";

export default ()=>{
    //this part needs router to direct the current location
    return (
        <div className="App">
           {/* <Button onClick={()=>{console.log('click services')}}>services</Button>
           <Button onClick={()=>{console.log('click blog')}}>blogs</Button> */}
        </div>
      );
    }

