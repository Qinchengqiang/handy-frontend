import {
    useLocation,
    useHistory
  } from "react-router-dom";
  import React from 'react'
  import {Button} from 'antd'
export default function NoMatch() {
    let location = useLocation();
    let history = useHistory();
    return (
      <div style={{width:'85%',marginRight:'auto',marginLeft:'auto'}}>
        <Button onClick={()=>history.goBack()}>Go Back</Button>
        <h3 style={{textAlign:'center',marginTop:'60px'}}>
          No match for <code>{location.pathname}</code>
        </h3>
      </div>
    );
  }