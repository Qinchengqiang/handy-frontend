import React from "react";
import "./footerNav.scss";

const left_up_links = [
  { name: "The Handy Happiness Guarantee", url: "http://localhost:3000/apply" },
  { name: "About", url: "http://localhost:3000/apply" },
  { name: "Press", url: "http://localhost:3000/apply" },
  { name: "Careers", url: "http://localhost:3000/apply" },
  { name: "Blog", url: "http://localhost:3000/apply" },
  { name: "Help", url: "http://localhost:3000/apply" },
  { name: "Contact Us", url: "http://localhost:3000/apply" }
];

const left_down_links = [
  { name: "Be a Professional", url: "http://localhost:3000/apply" },
  { name: "Retail Parterships", url: "http://localhost:3000/apply" },
  { name: "Scholarship", url: "http://localhost:3000/apply" }
];

const mid_links = [
  { name: "Boston", url: "http://localhost:3000/apply" },
  { name: "Chicago", url: "http://localhost:3000/apply" },
  { name: "London", url: "http://localhost:3000/apply" },
  { name: "Los Angeles", url: "http://localhost:3000/apply" },
  { name: "New York", url: "http://localhost:3000/apply" },
  { name: "San Francisco", url: "http://localhost:3000/apply" },
  { name: "Tronto", url: "http://localhost:3000/apply" },
  { name: "Vancouver", url: "http://localhost:3000/apply" },
  { name: "See all locations", url: "http://localhost:3000/apply" }
];

const right_links = [
  { name: "Cleaning", url: "http://localhost:3000/apply" },
  { name: "Handyman", url: "http://localhost:3000/apply" },
  { name: "Plumbing", url: "http://localhost:3000/apply" },
  { name: "Electrical", url: "http://localhost:3000/apply" },
  { name: "Moving Help", url: "http://localhost:3000/apply" },
  { name: "Painting", url: "http://localhost:3000/apply" },
  { name: "Furniture Assembly", url: "http://localhost:3000/apply" },
  { name: "See all services", url: "http://localhost:3000/apply" }
];
export default function FooterNav() {
  return (
    <div className="nav">
      <div className="left_nav">
        <ul className="left_ul">
          {left_up_links.map((link, i) => (
            <li key={i}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
        <ul className="left_ul">
          {left_down_links.map((link, i) => (
            <li key={i}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
        <div className="app">
          <ul className="app-ul">
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
      </div>
      <div className="mid_nav">
        <div className="mid">
          <ul className="mid_ul">
            <li className="location_title">
              <b>LOCATIONS</b>
            </li>
            {mid_links.map((link, i) => (
              <li key={i}>
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="state">
          <select id="">
            <option value="0">United States</option>
            <option value="1">Canada</option>
            <option value="2">United Kingdom</option>
          </select>
        </div>
      </div>
      <div className="right_nav">
        <ul className="right_ul">
          <li>
            <b>POPULAR SERVICES</b>
          </li>
          {right_links.map((link, i) => (
            <li key={i}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
