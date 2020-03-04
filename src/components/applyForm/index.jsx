import React, { Component } from 'react'
import './applyForm.scss'

export default class ApplyForm extends Component {
  render() {
    return (
      <div className="apply-form">
        <form action="" method="post" className="form">
          <div className="name">
            <input type="text" name="First Name" id="" placeholder="First Name" />
            <input type="text" name="Last Name" id="" placeholder="Last Name" />
          </div>
          <div className="contact">
            <input type="email" name="Emmail" id="" placeholder="Email" />
            <input type="number" name="ZIP Code" id="" placeholder="ZIP Code" />
          </div>

          <select name="pro" id="">
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
        
            <input type="submit" value="Get Started"/>

          
          <div className="hint">
            Already applied?
            <a href="/apply">Check your application status here.</a>
          </div>
        </form>
      </div>
    )
  }
}
