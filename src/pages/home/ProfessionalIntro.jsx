import React from 'react'
import './ProfessionalIntro.scss'
import shield from "./HomeSvg/shield.svg"
import {Link} from 'react-router-dom'

export default function ProfessionalIntro() {
    return (
        <div className="intro__width--override">
                <div className="professional__intro__container--flex">
                    <img src={shield} alt="shield icon svg" className="shield--svg"/>
                    <div className="intro_subtitle">Vetted, Background-Checked Professionals</div>
                </div>
                <div className="professional__intro__container--bottom">             
                        Cleaning and handyman tasks booked and paid for directly through the Handy platform are performed by experienced, background-checked professionals who are highly rated by customers like you. 
                        <Link to="./trust-and-safety" className="learn--more">Learn more.</Link>  
                </div>          
        </div>
    )
}
