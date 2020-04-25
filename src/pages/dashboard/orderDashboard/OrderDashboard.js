import React, {useState,useReducer} from "react";

function Ordercontainer (props){
     const {labelName, data, children} = props

    return (
        data?(<div>
            <label htmlFor="">{labelName}</label>
            <ul>
            {children(data)}
            </ul> 
        </div>):(<div>seems no detail for {labelName} yet</div>)

    )
}


function OrderDashboard (){
    // const []

    return (
        <div>
            <Ordercontainer labelName="order" >
                {(data)=>{
                    return 
                }}
            </Ordercontainer>
           
            <Ordercontainer>

            </Ordercontainer>
        </div>
    )
}

