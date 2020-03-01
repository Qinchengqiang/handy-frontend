import React, { Component } from 'react'
import styles from './applyForm.module.css'

export default class ApplyForm extends Component {
  render() {
    return (
      <div className={styles.apply_form}>
        <form action="" method="post" className={styles.form_style}>
          <ul>
            <li>
          <input className={styles.input} type="text" name="First Name" id="" placeholder="First Name" />
          <input type="text" name="Last Name" id="" placeholder="Last Name" />
          </li>
          <li>
          <input type="email" name="Emmail" id="" placeholder="Email" />
          <input type="number" name="ZIP Code" id="" placeholder="ZIP Code" />
          </li>
          <li>  
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
          </li>
          <li>
          <input type="submit" value="Get Started"/>
          </li>
          <li>
          <div >
            Already applied?
            <a href="/apply">Check your application status here.</a>
          </div>
          </li>
          </ul>
        </form>
      </div>
    )
  }
}
