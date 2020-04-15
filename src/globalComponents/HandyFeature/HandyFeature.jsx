import React from 'react'
import './handyFeature.scss'
import experienced from './experienced.svg'
import flexible from './flexible.svg'
import reliable from './reliable.svg'
import skilled from './skilled.svg'


export default function Handyfeature (props) {
    const listNameArr = ["Experienced","Reliable","Skilled and Capable","Flexible"]
    const listDescriptionArr = ["Handy has been connecting people to furniture assembly professionals and other home service providers since 2012. In its short history, Handy has helped thousands of customers build furniture in NYC, SF, Boston, Chicago, Los Angeles, London, and beyond.",
                                "We know there’s nothing worse than scheduling an appointment with a furniture assembly service, staying home from work to let them into your home, only for them to not show up. When you book through Handy, there’s no ambiguity -- Handy will work to ensure that someone will be at your home at the time you agree upon.",
                                "You don’t want just any random person building your furniture. When you book through Handy, we’ll match your job with an experienced furniture assembly pro who will ensure you’re satisfied.",
                                "No matter what type of furniture assembly you need help with, Handy has you covered. Whether you’ve just purchased a new desk for your bedroom, a bookshelf for your living room, a sofa or couch, a new kitchen table, chairs, stools, or more, we will connect you with a professional who will be able to handle your job.",
                            ]
    const imgArr = [experienced,reliable,skilled,flexible]

    const renderLi = ( listName, listDescription, img) => {
      return (
       <li className="handy-feature--list" key={listName}>
           <div className="handy-feature--list__card">
                <div className="handy-feature--list__img">
                    <img src={img} className='handy-feature--list__img__icon' alt={listName}/>
                </div>
                <div className="handy-feature--list__name">{listName}</div>
           </div>
            <div className="handy-feature--list__description">{listDescription}</div>    
       </li>
      )
    }
    const rst = listNameArr.map((elem,index)=>{
        return renderLi(elem,listDescriptionArr[index],imgArr[index])
    })
  
      return (
          
              <ul className="handy-feature--container--list">
                  {rst}
              </ul>
         
      )
  }
  