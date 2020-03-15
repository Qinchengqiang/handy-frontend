import React, { Component } from 'react'
import './requirement.scss'

export default class Requirement extends Component {
    render() {
        return (
            <div className="requirement">
                <h1>Requirements</h1>
                <div className="detail">
                    <ul>
                        <li>Must have paid experience in cleaning or handyman services</li>
                        <li>Must be authorized to work in the country you are applying in</li>
                        <li>Must have excellent customer service skills</li>
                    </ul>
                </div>
                <div className="ignore">
                    <p><b>Handy is not an employer, but simply connects independent service professionals with customers.</b></p>
                </div>
            </div>
        )
    }
}
