import React from 'react'
import './QuickLink.css'



export default function QuickLink() {
   const renderLi = (iconTag,comp_2)=>{
       return (
        <li className="var_nav" key={iconTag}>
        <div className="link_bg"></div>
        <div className="link_title">
          <div className='icon'> 
          <i className={`${iconTag} icon-2x`}></i>
          </div>
          {comp_2}
        </div>
     </li>
       )
   }
    
    return (
        <ul className="ul-button_layout">
            {renderLi("icon-sprayer",(<a href="./cleaning"><span>Home Cleaning</span></a>))}
            {renderLi("icon-wrench",(<a href="./service"><span>Tradie Services</span></a>))}
            {renderLi("icon-briefcase",(<a href="./shop"><span>Household Shop</span></a>))}
        </ul>
    )
}
