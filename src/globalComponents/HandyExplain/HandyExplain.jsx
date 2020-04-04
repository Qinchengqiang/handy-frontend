import './handyExplain.scss'
import React from 'react'
import proArrives from './proArrives.svg'
import datePicker from './datePicker.svg'
import bookingConfirmed from './bookingConfirmed.svg'


export default function HandyExplain (props) {

  const renderLi = ( listName, listDescription, img) => {
    return (
     <li className="handy-explain--list" key={listName}>
         <div className="handy-explain--list__img">
             <img src={img} className='handy-explain--list__img__icon' alt={listName}/>
         </div>
         <div className="handy-explain--list__name">{listName}</div>
         <div className="handy-explain--list__description">{listDescription}</div>
     </li>
    )
  }

    return (
        <div className="handy-explain--container">
            <div className="handy-explain--container--title">How Handy Works</div>
            <ul className="handy-explain--container--list">
                {renderLi("Pick a time","Select the day and time for your services and get instant, affordable pricing.",datePicker)}
                {renderLi("Book instantly","We'll confirm your appointment and take care of payment electronically and securely.",bookingConfirmed)}
                {renderLi("Your pro arrives","An experienced, fully-equipped professional will show up on time at your doorstep!",proArrives)}
            </ul>
        </div>
    )
}






