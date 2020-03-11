import React from 'react'
import './QuickLink.scss'
import clean from "./HomeSvg/clean.svg"
import wrench from "./HomeSvg/wrench.svg"
import hardware from "./HomeSvg/hardware.svg"



export default function QuickLink() {
    const renderLi = (iconTag, comp_2) => {
        return (
            <li className="var_nav" key={iconTag}>
                <div className="link_bg"></div>
                <div className="link_title">
                    <div className='icon'>
                        <img src={iconTag} className='icon--tag' alt={iconTag}></img>
                    </div>
                    {comp_2}
                </div>
            </li>
        )
    }

    return (
        <ul className="ul-button_layout">
            {renderLi(clean, (<a href="./cleaning" className="a--quicklink"><span className="span--text">Home Cleaning</span></a>))}
            {renderLi(wrench, (<a href="./services" className="a--quicklink"><span className="span--text">Tradie Services</span></a>))}
            {renderLi(hardware, (<a href="./shop" className="a--quicklink"><span className="span--text">Household Shop</span></a>))}
        </ul>
    )
}
