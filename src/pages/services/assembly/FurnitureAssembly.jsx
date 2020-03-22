import React, {useState} from 'react'
import starRatingHoc from './starRatingHoc.js'
// import FurnitureAssemblyInfo from 
import './furnitureAssembly.scss'
import checkMark from './checkMark.svg'
// import furnitureAssembly from './furnitureAssembly.png'
import {Faq} from '../../../globalComponents/Faq/Faq.jsx'
import {OfficeFaq} from '../../../globalComponents/Faq/OfficeFaq.jsx'
import HandyExplain from '../../../globalComponents/HandyExplain/HandyExplain.jsx'
import HandyFeatureAssembly from '../../../globalComponents/HandyFeature/HandyFeatureAssembly'
import {FurnitureForm} from './FurnitureForm.jsx'
import {OfficeForm} from './FurnitureForm.jsx'


// import {BrowserRouter as Router, Link , Route , Redirect ,Switch } from 'react-router-dom'

const FurnitureAssemblyFunc = (title,formBoolean)=>(props)=>{
     const [reviewCount, setReviewCount] = useState(323871)
     const handleReviewCount = ()=>{
         setReviewCount(reviewCount + 1)
     }
     const furnitureArr = [
         "Vetted and background-checked professionals.",
         "Friendly 24/7 customer service",
         "Backed by the Handy Happiness Guarantee.",
         "Affordable pricing",
         "No time windows, book when you want",
     ]
     const rst = furnitureArr.map((elem,i)=>{
         const learnMore = [0,2].includes(i) 
         return (
             <li key={elem+i} className="assembly_body_li">
                <div className="assembly_body_li_container-img"><img src={checkMark} alt=""/></div>
                <div className="assembly_body_li_description">{elem}{learnMore?(<a href="./trust-and-safety" className="assembly_body_li_description-link">Learn More</a>):(null)}</div>
             </li>
         )
     })
    //  <img src={furnitureAssembly} alt="assembly_header-pic" className="assembly_header-pic-img"/>
    return (
        <div className="assembly_page-layout">
            {/* <Nav/> */}
            {formBoolean?(<div className="assembly_header-pic"></div>):<div className="assembly_header-pic-office"></div>}
            <div className="assembly_body-container">
                 {formBoolean?(<FurnitureForm className="assembly-furniture_form"/>):(<OfficeForm className="assembly-furniture_form"/>)}
                <div className="assembly_body-container-info">
                    <h2 className="assembly_body-container-info-title">{title} Assembly</h2>
                    <div className="assembly_body-container-info-rating">
                        {starRatingHoc(4,handleReviewCount)}
                        <div className="assembly_body-container-info-rating_review">{reviewCount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} Reviews</div>
                    </div>
                    <p className="assembly_body-container-info-paragraph">
                    Are you looking for the easiest {title} assembly experience? Do you want only the top {title} assembly pro to come to your home to transform that box of loose pieces of wood into your beautiful dresser or bed frame? With Handy, you’ve come to the right place.
                    </p>
                    <ul className="assembly_body-container-info-list">
                        {rst}
                    </ul>
                </div>
               
               
                {/* <FurnitureAssemblyInfo/> */}
                 {/* <FurnitureForm/> */}
            </div>
            <HandyExplain/>
            <HandyFeatureAssembly/>
            
            {formBoolean?<Faq/>:<OfficeFaq/>}
           
        </div>
    )
}

export const FurnitureAssembly = FurnitureAssemblyFunc("Furniture",true)
export const OfficeAssembly = FurnitureAssemblyFunc("Office Furniture",false)
