import React from 'react'
import './GurranteePic.scss'
import {Link} from 'react-router-dom'
import handylogo from './HomeSvg/handylogo.png'

export default function GurranteePic() {
    return (
        <div className="gurrantee-pic_container">
            <div className="gurrantee-pic_container-content">
                <img src={handylogo} alt="handy-log" className="gurrantee-content_logo">

                </img>
                <div className="gurrantee-content_subtitle">
                    Your Happiness, Guaranteed
                </div>
                <div className="gurrantee-content_text">
                         Your happiness is our goal. If you’re not happy, we’ll work to make it right. Our friendly customer service agents are available 24 hours a day, 7 days a week. The Handy Happiness Guarantee only applies when you book and pay for a service directly through the Handy platform.
                    <Link to="./handy-guarantee" className="gurrantee-content_text_link">Learn more.</Link>
                </div>
            </div>
            <div className="gurrantee-pic_container-flex">
                <img src="https://advantage4parents.com/wp-content/uploads/2017/11/happy-family.jpg" alt="" className="gurrantee-pic_container-pic"></img>
            </div>
        </div>
    )
}
