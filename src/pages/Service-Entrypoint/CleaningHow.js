import React from "react";
import { Row, Col,Button} from "antd";

const CleaningHow = () => {
  return (
    <div className="section__container">
      <div className="section__heading--container">
        <h1 className="section__heading--primary">
          The Most Reliable Name in House Cleaning
        </h1>
        <p className="section__heading--secondary">
          Here's how it works -- just go to our website or app and tell us your
          zipcode and how big your house, apartment, or flat is. Handy will then
          connect you with a top-rated home cleaning services professional to
          help take the stress out of your life.
        </p>
      </div>

      <Row gutter={96}>
        <Col sm={24} md={12}>
          <div className="sellingPoint">
            <h3 className="sellingPoint__heading">Experienced</h3>
            <p className="sellingPoint__text">
              Handy has been connecting people to professional house cleaning
              and other home services since 2012. In our short history, house
              cleaning professionals using the Handy platform have helped clean
              millions of homes and apartments in NYC, SF, Boston, Chicago, Los
              Angeles, London, and beyond. Handy is your one-stop shop for
              whenever you need professional house cleaning help.
            </p>
          </div>
        </Col>
        <Col sm={24} md={12}>
          <div className="sellingPoint">
            <h3 className="sellingPoint__heading">Reliable</h3>
            <p className="sellingPoint__text">
              When you schedule a cleaner or maid service through Handy to come
              to your home, you can rest assured knowing that someone will be at
              your home ready to go at the time you specified. They’ll help
              return your bedrooms, bathrooms, kitchen, living room, and more to
              the like-new condition that you remember from when you first moved
              in!
            </p>
          </div>
        </Col>
      </Row>
      <Row gutter={50}>
        <Col sm={24} md={12}>
          <div className="sellingPoint">
            <h3 className="sellingPoint__heading">Convenient</h3>
            <p className="sellingPoint__text">
              Late nights at work preventing you from keeping your apartment
              tidy? Too busy taking the kids to school, practices, and playdates
              to vacuum the floors? We know life can be crazy and unpredictable,
              and when you’re tired and overworked, the last thing anybody wants
              to do is clean their home. Whatever the reason you’re looking for
              home cleaning help, Handy has you covered.
            </p>
          </div>
        </Col>
        <Col sm={24} md={12}>
          <div className="sellingPoint">
            <h3 className="sellingPoint__heading">Flexible</h3>
            <p className="sellingPoint__text">
              With Handy, it’s easy to schedule and reschedule bookings. Just
              open the Handy app and choose the date and time that works best
              for you. Or maybe your home needs an extra deep clean with some
              special attention - you can use the app to add extras to your
              booking, like laundry, inside the cabinets, inside the
              refrigerator, and more. Make Handy your #1 cleaning services
              provider, whether you’re looking for a house cleaning, apartment
              cleaning, maid service, or more!
            </p>
          </div>
        </Col>
      </Row>
      <div className="section__container">
        <h1 className="section__heading--primary">
          Why Book House Cleaning Services with Handy?
        </h1>
        <p className="section__heading--secondary">
          If you’re in need of home cleaning, apartment cleaning, or a maid
          service, we’re simply the best, most convenient home cleaning service
          out there. We know you want the cheapest house cleaning available
          while still having the confidence that you will receive a cleaner who
          is thorough and professional, with keen attention to detail. When you
          sign up for a Handy house cleaning plan, we aim to offer you just
          that. And Handy helps schedule your recurring cleanings automatically
          for you, so you can focus on the other things in your life.
        </p>
        <ul>
          <li className="section__heading--secondary">Vetted and background-checked professionals. </li>
          <li className="section__heading--secondary">Backed by the Handy Happiness Guarantee. </li>
          <li className="section__heading--secondary">Friendly 24/7 customer service </li>
          <li className="section__heading--secondary">Affordable, upfront pricing </li>
        </ul>
<Button size={'large'} type="primary" style={{background: "#8CC63F", border: "none"}}>Get Started</Button>

      </div>
    </div>
  );
};

export default CleaningHow;
