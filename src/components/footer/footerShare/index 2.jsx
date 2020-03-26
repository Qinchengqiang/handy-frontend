import React from "react";
import "./footerShare.scss";
import twitter from "../svg/twitter-brands.svg";
import facebook from "../svg/facebook-brands.svg";
import instagram from "../svg/instagram-brands.svg";
import google from "../svg/google-plus-brands.svg";
import linkedin from "../svg/linkedin-brands.svg";
import wikipedia from "../svg/wikipedia-w-brands.svg";

const sharelist = [
  { name: twitter, url: "https://www.handy.com/apply" },
  { name: facebook, url: "https://www.handy.com/apply" },
  { name: instagram, url: "https://www.handy.com/apply" },
  { name: google, url: "https://www.handy.com/apply" },
  { name: linkedin, url: "https://www.handy.com/apply" },
  { name: wikipedia, url: "https://www.handy.com/apply" },
  { name: twitter, url: "https://www.handy.com/apply" }
];
export default function FooterShare() {
 
  return (
    <div className="share">
      <ul>
        {sharelist.map((shareItem, i) => (
          <li key={i}>
            <div className="icon">
              <a href={shareItem.url}>
                <img src={shareItem.name} alt={shareItem.name} />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
