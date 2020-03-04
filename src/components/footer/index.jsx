import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="nav">
        <nav className="left_nav">
          <ul className="left_up_ul">
            <li>
              <a href="">The Handy Happiness Guarantee</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Press</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
          </ul>
          <ul className="left_down_ul">
            <li>
              <a href="">Be a Professional</a>
            </li>
            <li>
              <a href="">Retail Parterships</a>
            </li>
            <li>
              <a href="">Scholarship</a>
            </li>
          </ul>
          <div className="app">
            <ul>
              <li>
                <a href="https://handy.app.link/app">
                  <img
                    src="https://cache.hbfiles.com/assets/miscellaneous/app-store-badge-4eb77a579e431ad6a15239b584bc6166.svg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://handy.app.link/app">
                  <img
                    src="https://cache.hbfiles.com/assets/miscellaneous/play-store-badge-d21a273e303988a4598b0230b8a24ec0.svg"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav className="mid_nav">
          <ul className="mid_ul">
            <li className="location_title">
              <b>LOCATIONS</b>
            </li>
            <li>
              <a href="">Boston</a>
            </li>
            <li>
              <a href="">Chicago</a>
            </li>
            <li>
              <a href="">London</a>
            </li>
            <li>
              <a href="">Los Angeles</a>
            </li>
            <li>
              <a href="">New York</a>
            </li>
            <li>
              <a href="">San Francisco</a>
            </li>
            <li>
              <a href="">Tronto</a>
            </li>
            <li>
              <a href="">Vancouver</a>
            </li>
            <li>
              <a href="">See all locations</a>
            </li>
          </ul>
          <select className="state" id="">
            <option value="0">United States</option>
            <option value="1">Canada</option>
            <option value="2">United Kingdom</option>
          </select>
        </nav>
        <nav className="right_nav">
          <ul className="right_ul">
            <li>
              <b>POPULAR SERVICES</b>
            </li>
            <li>
              <a href="">Cleaning</a>
            </li>
            <li>
              <a href="">Handyman</a>
            </li>
            <li>
              <a href="">Plumbing</a>
            </li>
            <li>
              <a href="">Electrical</a>
            </li>
            <li>
              <a href="">Moving Help</a>
            </li>
            <li>
              <a href="">Painting</a>
            </li>
            <li>
              <a href="">Furniture Assembly</a>
            </li>
            <li>
              <a href="">See all services</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="share">
        <ul>
          <li>
            <a href="https://twitter.com/handy">
              <FontAwesomeIcon icon="spinner" size="xs" />
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://facebook.com/handyhq">Facebook</a>
          </li>
          <li>
            <a href="http://instagram.com/handy_hq">Ins</a>
          </li>
          <li>
            <a href="https://plus.google.com/+Handy/posts">G+</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Handy_(company)">
              WordPress
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/handyhq">LinkedIn</a>
          </li>
          <li>
            <a href="https://crunchbase.com/organization/handybook">cb</a>
          </li>
        </ul>
      </div>
      <div className="other">
        <div className="title">
          <h2>Other Handy Services</h2>
        </div>
        <div className="nav">
          <ul className="nav-left">
            <li>
              <a href="">cleaning service near me</a>
            </li>
            <li>
              <a href="">cleaning services in chicago</a>
            </li>
            <li>
              <a href="">home cleaning service</a>
            </li>
          </ul>
          <ul className="nav-mid">
            <li>
              <a href="">home cleaning services near me</a>
            </li>
            <li>
              <a href="">new york one time home cleaning</a>
            </li>
            <li>
              <a href="">nyc apartment cleaning</a>
            </li>
          </ul>
          <ul className="nav-right">
            <li>
              <a href="">residential cleaning services</a>
            </li>
            <li>
              <a href="">kitchen cleaning services</a>
            </li>
            <li>
              <a href="">kitchen cleaning</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="end">
        <ul className="end-ul">
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Privacy</a>
          </li>
          <li>
            <a href="">CA Pre-Collection Notice</a>
          </li>
          <li>
            <a href="">Cookies</a>
          </li>
          <li>
            <a href="">Terms</a>
          </li>
          <li>
            <a href="">Cancellation Policy</a>
          </li>
          <li className="time"><h3>2020 Handy. All rights reserved.</h3></li>
        </ul>
      </div>
    </div>
  );
}
