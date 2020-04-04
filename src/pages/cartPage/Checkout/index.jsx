import React, { Component } from 'react'
import './Checkout.scss'

export default class Checkout extends Component {
    render() {
        return (
            <div className="checkout">
                <div className="checkout_price">total</div>
                <button className="checkout_btn">Continue to Checkout</button>
            </div>
        )
    }
}
