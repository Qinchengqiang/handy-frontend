import React from "react";
import "./footer.scss";
import FooterNav from './footerNav';
import FooterShare from './footerShare'
import FooterOther from './footerOther'
import FooterEnd from './footerEnd'

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <FooterNav />
        <FooterShare />
        <FooterOther />
        <FooterEnd />
      </div>
    </div>
  );
}
