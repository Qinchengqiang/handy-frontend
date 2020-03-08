import React, { Component } from 'react'
import './applyForm.scss'

export default class ApplyForm extends Component {
  render() {
    return (
      <div className="apply-form">
        <form action="" method="post" className="form">
          <div className="name">
            <input type="text" name="First Name"  placeholder="First Name" />
            <input type="text" name="Last Name"  placeholder="Last Name" />
          </div>
          <div className="contact">
            <input type="email" name="Emmail"  placeholder="Email" />
            <input type="tel" pattern="[0-9]" max="9999" name="ZIP Code"  placeholder="ZIP Code" />
          </div>
          <div className="select">
            <select name="pro" >
              <option value="Your Primary Service" hidden="hidden">Your Primary Service</option>
                <option value="appliance_repair">Appliance Repair</option>
                <option value="cleaning">Cleaner</option>
                <option value="electrician">Electrician</option>
                <option value="garage_door_installation">Garage Door Installation</option>
                <option value="handyman">Handyman</option>
                <option value="home_improvement">Home Improvement</option>
                <option value="lawn_care">Lawn Care</option>
                <option value="plumbing">Plumber</option>
                <option value="pool">Pool Services</option>
                <option value="smart_home_parent">Smart Home</option>
                <option value="Technology">Technology Services</option>
            </select>
          </div>
          <div className="submit-btn">
            <input type="submit" value="Get Started"/>
          </div>
          <div className="hint">
            Already applied?
            <a href="/apply">Check your application status here.</a>
          </div>
        </form>
      </div>
    )
  }
}
