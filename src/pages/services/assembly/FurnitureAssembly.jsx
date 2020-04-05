import React, { useState } from 'react'
import starRatingHoc from './starRatingHoc.js'
// import FurnitureAssemblyInfo from 
import './furnitureAssembly.scss'
import checkMark from './checkMark.svg'
// import furnitureAssembly from './furnitureAssembly.png'
import { Faq } from '../../../globalComponents/Faq/Faq.jsx'
import { OfficeFaq } from '../../../globalComponents/Faq/OfficeFaq.jsx'
import HandyExplain from '../../../globalComponents/HandyExplain/HandyExplain.jsx'
import HandyFeatureAssembly from '../../../globalComponents/HandyFeature/HandyFeatureAssembly'
import { FurnitureForm } from './FurnitureForm.jsx'
import { OfficeForm } from './FurnitureForm.jsx'
import ServiceDescription from '../../../globalComponents/serviceDescription/serviceDescription'
import img1 from "../../../pages/HandymanService/assets/large_other_handyman_service_1-b09bcce53e6c53426326ba00b935de3c47e50ee18d585cb7950f74f8ea3775fb.jpg";
import img2 from "../../../pages/HandymanService/assets/large_other_handyman_service_2-28c1bd76c25e555556cc65ac94f877826158442b991c382f756151d87bae435f.jpg";
import img3 from "../../../pages/HandymanService/assets/large_other_handyman_service_3-b3633a57fb857dc76034244c2bb94e2187e5200ab132d5f59a071a65d8845f52.jpg";

// import {BrowserRouter as Router, Link , Route , Redirect ,Switch } from 'react-router-dom'

const FurnitureAssemblyFunc = (title, formBoolean) => (props) => {
    const [reviewCount, setReviewCount] = useState(323871)
    const handleReviewCount = () => {
        setReviewCount(reviewCount + 1)
    }
    const furnitureArr = [
        "Vetted and background-checked professionals.",
        "Friendly 24/7 customer service",
        "Backed by the Handy Happiness Guarantee.",
        "Affordable pricing",
        "No time windows, book when you want",
    ]
    const rst = furnitureArr.map((elem, i) => {
        const learnMore = [0, 2].includes(i)
        return (
            <li key={elem + i} className="assembly_body_li">
                <div className="assembly_body_li_container-img"><img src={checkMark} alt="" /></div>
                <div className="assembly_body_li_description">{elem}{learnMore ? (<a href="./trust-and-safety" className="assembly_body_li_description-link">Learn More</a>) : (null)}</div>
            </li>
        )
    })
    //  <img src={furnitureAssembly} alt="assembly_header-pic" className="assembly_header-pic-img"/>
    return (
        <div className="assembly_page-layout">
            {/* <Nav/> */}
            {formBoolean ? (<div className="assembly_header-pic"></div>) : <div className="assembly_header-pic-office"></div>}
            <div className="assembly_body-container">
                {formBoolean ? (<FurnitureForm className="assembly-furniture_form" />) : (<OfficeForm className="assembly-furniture_form" />)}
                <div className="assembly_body-container-info">
                    <h2 className="assembly_body-container-info-title">{title} Assembly</h2>
                    <div className="assembly_body-container-info-rating">
                        {starRatingHoc(4, handleReviewCount)}
                        <div className="assembly_body-container-info-rating_review">{reviewCount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} Reviews</div>
                    </div>
                    <p className="assembly_body-container-info-paragraph">
                        Are you looking for the easiest {title} assembly experience? Do you want only the top {title} assembly pro to come to your home to transform that box of loose pieces of wood into your beautiful dresser or bed frame? With Handy, you’ve come to the right place.
                    </p>
                    <ul className="assembly_body-container-info-list">
                        {rst}
                    </ul>
                </div>
            </div>
            <HandyExplain />
            <HandyFeatureAssembly />

            <ServiceDescription
					mainheader="The Best Handyman Service"
					img1={img1}
					header1="Save Time and Money with a Top-Rated Handyman"
					content1="Professionals offering handyman services through Handy come with a
					wealth of skill and experience. This means that you can book a
					versatile handyman who can take care of a variety of jobs at the
					time that's best for you. Rather than spending your Saturday morning
					trying to find studs in your walls or questioning whether you can
					trust the guy at the hardware store to give you good advice, why not
					use the Handy platform to hire a handyman who can deal with
					everything? Whether you need urgent help for home repairs, or just a
					few odd jobs taken care of, using Handy to book a general contractor
					or handyman can help you save both time and money."
					img2={img2}
					header2="No Need for Tools"
					content2="Many an amateur DIY enthusiast has spotted a job that needs doing
					and gone out to buy the appropriate tools, only to find that
					they're way out of their league. Book a handyman using the Handy
					app or website and you can be sure that they'll arrive with
					everything they’ll need to get the job done. In addition to your
					run-of-the-mill screwdrivers and hammers, your handyman specialist
					will read your job description before they arrive to ensure they
					come prepared for anything that your specific job may require.
					Don't worry about whether you’ve got the right tools for the job.
					Book a handyman through Handy and leave it to the professionals."
					img3={img3}
					header3="Your Time is Precious"
					content3="Whether you’re a busy professional or a stay-at-home parent, Handy
					knows that your time is precious. When you book handyman services
					through Handy, you can be sure that they’ll show up on time and
					ready to take care of your handyman tasks as quickly and efficiently
					as possible. You’ll find them fully equipped and with all the
					necessary skills to get things done. In the meantime, you can use
					that time to get some extra work done or take the kids down to the
					park. Using Handy means that your odd jobs and home repairs get
					done, while you focus on the important things in life."
				/>

                {formBoolean ? <Faq /> : <OfficeFaq />}
				

            
        </div>
    )
}

export const FurnitureAssembly = FurnitureAssemblyFunc("Furniture", true)
export const OfficeAssembly = FurnitureAssemblyFunc("Office Furniture", false)
