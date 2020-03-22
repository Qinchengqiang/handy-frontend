import React from "react";
import "./footerOther.scss";

const leftLinks = [
  { name: "cleaning service near me", url: "https://www.handy.com/apply" },
  { name: "cleaning services in chicago", url: "https://www.handy.com/apply" },
  { name: "home cleaning service", url: "https://www.handy.com/apply" }
];
const midLinks = [
  {
    name: "home cleaning services near me",
    url: "https://www.handy.com/apply"
  },
  {
    name: "new york one time home cleaning",
    url: "https://www.handy.com/apply"
  },
  { name: "nyc apartment cleaning", url: "https://www.handy.com/apply" }
];
const rightLinks = [
  { name: "residential cleaning services", url: "https://www.handy.com/apply" },
  { name: "kitchen cleaning services", url: "https://www.handy.com/apply" },
  { name: "kitchen cleaning", url: "https://www.handy.com/apply" }
];
export default function FooterOther() {
  return (
    <div className="other">
      <div className="title">
        <h2>Other Handy Services</h2>
      </div>
      <div className="nav">
        <ul className="left">
          {leftLinks.map((link, i) => (
            <li key={i}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
        <ul className="mid">
          {midLinks.map((link, i) => (
            <li key={i}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
        <ul className="right">
          {rightLinks.map((link, i) => (
            <li key={i}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
