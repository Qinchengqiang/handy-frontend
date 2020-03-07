import React from 'react'
import './ShopPic.scss'
import {Link} from 'react-router-dom'

export default function ShopPic() {
    return (
        <div className="shop_img">
            <div className="shop_img_container">
                <div className="shop_img_container_slogan">
                Shop for your Home with Handy
                </div>
                <div className="shop_img_container_subtitle">
                Shop furniture, electronics, appliances, and more. Everything comes with expert installation by Handy.
                </div>
                <Link to="./shop" style={{textDecoration:"none"}} >
                <div className="shop_img_container_button">Shop All Home Products > </div>
                </Link>
               
            </div>
            <div className="shop_img_container-right">
            </div>
        </div>
    )
}
