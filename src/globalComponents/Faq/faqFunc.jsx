import React, { useState, useRef } from 'react'
import "./faq.scss"
// decortion function as faqFunc takes in titleArr and paragraphArr and returns a component
export default function faqFunc(titleArr, paragraphArr) {
    const faq = (props) => {
        // map elements in titleArr and its corresponding part in paragraphArr and generate jsx for the list element
        const rst = titleArr.map((elem, index) => {
            const [active, setActive] = useState(false)
            const titleRef = useRef(null)
            const status = active ? "active" : null;
            //set the height of current ref element to have the height correpsonding to the activation status of the 
            const handleClick = () => {
                if (active) {
                    titleRef.current.style.maxHeight = null;
                } else {
                    titleRef.current.style.maxHeight = titleRef.current.scrollHeight + "px";
                }
                console.log(elem, "is", active)
                setActive(!active)
            }
            // return the actual Faq li jsx
            return (
                <li className="faq__section" key={index} onClick={handleClick}>
                    <div className="faq__title__container" >
                        <div className="faq__title">{elem}</div>
                        <div className="faq__symbol--inline">{active ? "-" : "+"}</div>
                    </div>
                    <div className={`faq__paragraph ${status}`} ref={titleRef} >
                        {paragraphArr[index]}
                    </div>
                </li>
            )
        })
        return (
            <div className="faq__container">
                <div className="faq__head">Frequent Asked Questions</div>
                <ul className="faq__list--layout">
                    {rst}
                </ul>
            </div>
        )
    }
    return faq
}



