import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Cleaning.scss";
import Container from "react-bootstrap/Container";
import QuoteForm from "./QuoteForm";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Chris from "../../img/chris-hemsworth.jpg";
import Liam from "../../img/Liam-Hemsworth.jpg";

const Cleaning = () => {
  return (
    <div className="cleaning">
      <Container>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand>
            <div className="logo">
              <svg height="100%" viewBox="0 0 32 23">
                <path
                  d="        M22.472 6.592l-2.365 0.503v6.82l2.356-0.501c1.969-0.419
        3.285-1.996 3.285-4.104-0-2.106-1.316-3.134-3.276-2.718zM24.229
        9.633c0 1.367-0.819 2.147-1.822 2.36l-0.847 0.18-0-3.954
        0.847-0.18c1.003-0.213 1.822 0.228 1.822 1.594zM14.59 8.268l-1.443
        0.307 0 6.82 1.443-0.307v-4.329l2.819 3.73 1.444-0.307v-6.82l-1.444
        0.307v4.33l-2.819-3.731zM6.252 13.445c0 2.106 1.316 3.135 3.276
        2.718l2.365-0.503v-6.82l-2.356 0.501c-1.969 0.419-3.285 1.998-3.285
        4.104zM9.593 10.764l0.847-0.181v3.954l-0.847 0.18c-1.003
        0.213-1.822-0.228-1.822-1.594s0.819-2.146 1.822-2.359zM30.547 9.029c-0
        0.904-0.483 1.459-1.238 1.62s-1.238-0.19-1.238-1.094v-4.153l-1.453
        0.309v4.22c0 1.783 1.197 2.469 2.691 2.152 0.447-0.095 0.867-0.271
        1.238-0.516 0 0 0 1.143 0 1.525v0c0 0.913-0.592 1.779-1.581
        1.989l-28.965 6.157v1.519l29.378-6.244c1.64-0.349 2.621-1.784
        2.621-3.297v-8.647l-1.453 0.309 0 4.153zM1.453 13.727c0-0.904
        0.483-1.459 1.237-1.62s1.238 0.189 1.238
        1.094v4.153l1.453-0.309v-4.22c0-1.782-1.197-2.469-2.691-2.151-0.447
        0.096-0.867 0.271-1.237 0.516 0 0 0-1.145 0-1.526 0-0.913 0.592-1.778
        1.581-1.989l28.965-6.157-0-1.519-29.378 6.245c-1.64 0.348-2.621
        1.784-2.621 3.297v8.647l1.453-0.309v-4.153z
"
                  fill="#00cded"
                />
              </svg>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="home-navbar" />
          <Navbar.Collapse id="home-navbar">
            <Nav className="mr-auto">
              <NavDropdown id="show-all-services" title="All Services">
                <NavDropdown.Item href="#action/3.1">Cleaning</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Installation
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Handy Man
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>Shop</Nav.Link>
              <Nav.Link>Blog</Nav.Link>
            </Nav>
            <Nav className="navbar--right">
              <Nav.Link>Become a Pro</Nav.Link>
              <Nav.Link>Help</Nav.Link>
              <Nav.Link>Log In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <div className="service__landing">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} lg={8} className="formContainer">
              <QuoteForm />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="service__intro">
        <Container>
          <Row>
            <Col xs={12}>
              <h1 className="heading--primary">How Handy Works</h1>
            </Col>
            <Col xs={12} md={4}>
              <div className="service__sellingpoint">
                <img
                  className=""
                  data-img-src="https://cache.hbfiles.com/assets/quotes/setup_plan_icon-9b50b8244397fc6400a0b763b03486d1.svg"
                  src="https://cache.hbfiles.com/assets/quotes/setup_plan_icon-9b50b8244397fc6400a0b763b03486d1.svg"
                />
                <h3>Set Up a Cleaning Plan</h3>
                <p>
                  Choose a weekly, biweekly, or monthly cleaning plan. We
                  schedule your recurring bookings to make things easy - but
                  don’t worry, you can always reschedule if things change.
                </p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="service__sellingpoint">
                <img
                  className=""
                  data-img-src="https://cache.hbfiles.com/assets/quotes/manage_online_icon-a99f96a0e234c740a58db19a98f66b03.svg"
                  src="https://cache.hbfiles.com/assets/quotes/manage_online_icon-a99f96a0e234c740a58db19a98f66b03.svg"
                />
                <h3>Manage Everything Online</h3>
                <p>
                  Rescheduling, contacting your professional, and tipping are
                  just a tap away.
                </p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="service__sellingpoint">
                <img
                  className=""
                  data-img-src="https://cache.hbfiles.com/assets/quotes/pro_female_icon-4a3c4a2909e22f88078ecf7b953e25e4.svg"
                  src="https://cache.hbfiles.com/assets/quotes/pro_female_icon-4a3c4a2909e22f88078ecf7b953e25e4.svg"
                />
                <h3>Sit Back and Relax</h3>
                <p>
                  An experienced, fully-equipped housekeeping professional will
                  be there on time.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="service__how">
        <Container className="how__box">
          <Row className="justify-content-center">
            <Col xs={12} sm={9}>
              <div className="heading--box">
                <h2 className="heading--primary">
                  The Most Reliable Name in House Cleaning
                </h2>
                <p>
                  Here's how it works -- just go to our website or app and tell
                  us your zipcode and how big your house, apartment, or flat is.
                  Handy will then connect you with a top-rated home cleaning
                  services professional to help take the stress out of your
                  life.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-between">
            <Col xs={12} md={6}>
              <div className="paddingBox">
                <h4>Experienced </h4>
                <p>
                  Handy has been connecting people to professional house
                  cleaning and other home services since 2012. In our short
                  history, house cleaning professionals using the Handy platform
                  have helped clean millions of homes and apartments in NYC, SF,
                  Boston, Chicago, Los Angeles, London, and beyond. Handy is
                  your one-stop shop for whenever you need professional house
                  cleaning help.{" "}
                </p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="paddingBox">
                <h4>Reliable </h4>
                <p>
                  When you schedule a cleaner or maid service through Handy to
                  come to your home, you can rest assured knowing that someone
                  will be at your home ready to go at the time you specified.
                  They’ll help return your bedrooms, bathrooms, kitchen, living
                  room, and more to the like-new condition that you remember
                  from when you first moved in!{" "}
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-around">
            <Col xs={12} md={6}>
              <div className="paddingBox">
                <h4>Convenient </h4>
                <p>
                  Late nights at work preventing you from keeping your apartment
                  tidy? Too busy taking the kids to school, practices, and
                  playdates to vacuum the floors? We know life can be crazy and
                  unpredictable, and when you’re tired and overworked, the last
                  thing anybody wants to do is clean their home. Whatever the
                  reason you’re looking for home cleaning help, Handy has you
                  covered.{" "}
                </p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="paddingBox">
                <h4>Flexible </h4>
                <p>
                  {" "}
                  With Handy, it’s easy to schedule and reschedule bookings.
                  Just open the Handy app and choose the date and time that
                  works best for you. Or maybe your home needs an extra deep
                  clean with some special attention - you can use the app to add
                  extras to your booking, like laundry, inside the cabinets,
                  inside the refrigerator, and more. Make Handy your #1 cleaning
                  services provider, whether you’re looking for a house
                  cleaning, apartment cleaning, maid service, or more!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="service__what">
        <Container className="heading--primary">
          <Row className="justify-content-center">
            <Col xs={12} sm={9}>
              <h2>What's Included in a House Cleaning?</h2>
              <p>
                Here is what you can expect from a house cleaning from a Handy
                professional. Download the app to share further cleaning details
                and instructions!
              </p>
            </Col>
          </Row>
        </Container>

        <div className="service__what--bedroom">
          <div className="points--card">
            <h4>Bedroom, Living Room & Common Areas</h4>
            <ul>
              <li>Dust all accessible surfaces</li>
              <li>Wipe down all mirrors and glass fixtures</li>
              <li>Clean all floor surfaces</li>
              <li>Take out garbage and recycling</li>
            </ul>
          </div>
        </div>
        <div className="service__what--bathroom">
          <div className="points--card">
            <h4>Bathroom Cleaning</h4>
            <ul>
              <li>Wash and sanitize the toilet, shower, tub and sink</li>
              <li>Dust all accessible surfaces</li>
              <li>Wipe down all mirrors and glass fixtures</li>
              <li>Clean all floor surfaces</li>
              <li>Take out garbage and recycling</li>
            </ul>
          </div>
        </div>
        <div className="service__what--kitchen">
          <div className="points--card">
            <h4>Kitchen Cleaning</h4>
            <ul>
              <li>Dust all accessible surfaces</li>
              <li>Empty sink and load up dishwasher with dirty dishes</li>
              <li>Wipe down exterior of stove, oven and fridge</li>
              <li>Clean all floor surfaces</li>
              <li>Take out garbage and recycling</li>
            </ul>
          </div>
        </div>
        <div className="service__what--extras">
          <div className="points--card">
            <h4>Extras</h4>
            <p>
              For a deeper clean, consider adding one or more cleaning extras.
              Most cleaning extras add one half hour of time and cost to your
              booking.
            </p>
            <ul>
              <li>Inside cabinets</li>
              <li>Inside fridge</li>
              <li>Inside oven</li>
              <li>Laundry wash & dry</li>
              <li>Interior windows</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="service__faq">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={9}>
              <h2 className="heading--primary">Frequently Asked Questions</h2>
            </Col>
          </Row>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                What's included in a cleaning?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  See what's included in a cleaning service.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Which Handy professional will come to my place?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <ul>
                    <li>
                      Handy has a vast network of experienced, top-rated
                      cleaners. Based on the time and date of your request, we
                      work to assign the best professional available.
                    </li>
                    <li>
                      Like working with a specific pro? Add them to your Pro
                      Team from the mobile app and they'll be requested first
                      for all future bookings.
                    </li>
                    <li>
                      You will receive an email with details about your
                      professional prior to your appointment.
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                Can I skip or reschedule bookings?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  You can reschedule any booking without penalty, so long as you
                  do so at least 24 hours ahead of the scheduled start time.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                How much are house cleaning services?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  This depends on the size of your house — enter how many
                  bedrooms and bathrooms you have into the form above and we’ll
                  give you an instant quote. We’re confident you’ll find prices
                  extremely reasonable given the high level of service you will
                  receive from your pro.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                Are house cleaning services worth it?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  <p>
                    Yes, it certainly is, assuming you’re the type of person who
                    likes to come home to a beautiful and pristine home without
                    having lifted a finger! If you’re a time-strapped
                    professional working a 16-hour day, a busy mom or dad
                    shuffling children between daycare and school and soccer
                    practices, or just someone who simply has too much to do and
                    far too little time to do it in, house cleaning can be at
                    the bottom of your list. Nobody wants a messy home, and yet
                    nobody really enjoys chores either – this is where Handy
                    comes in.
                  </p>
                  <p>
                    We’ve got the solutions. You demand top quality house
                    cleaning services, and Handy puts you in touch with the best
                    house cleaners. Cost-wise, you’re looking at a service
                    that’s affordable and great value for money. And let’s be
                    honest -- a couple extra hours with the kids at the end of
                    the day can be priceless.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                How much do you tip a house cleaning service?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
                  <p>
                    Our policy is that tipping is always appreciated by pros who
                    go above and beyond, but never required. The entirety of the
                    tip gets passed through to the pro — Handy doesn’t take any
                    percentage. It’s a great way to show your appreciation for
                    your pro and a job well done.
                  </p>
                  <p>
                    Further, we’ve found that pros are usually much more likely
                    to pick up your jobs and flex their own schedules to meet
                    yours when you’ve tipped them in the past! If your pro works
                    hard or travels a long way to get to your house in bad
                    weather, it’s a nice way to show your appreciation. Tipping
                    can be done right through the app on your credit card, same
                    as you paid for the booking.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="6">
                Does house cleaning include laundry?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="6">
                <Card.Body>
                  <p>
                    If you have a washing machine and/or dryer in your home,
                    your professional can absolutely wash and fold your laundry
                    for you! Be sure to add it as an extra during the checkout
                    process so the professional can be sure to set aside enough
                    time to clean your home and still have time for laundry (it
                    will add an extra hour onto your booking).
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="7">
                How long should a house cleaning take?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="7">
                <Card.Body>
                  <p>
                    It depends entirely on the size of your house! The minimum
                    booking length is 3 hours, but you can always request a
                    longer booking if you need one. Depending on the number of
                    bedrooms and bathrooms you have, our checkout process will
                    automatically scale your booking to the recommended amount
                    of time for a home of your size.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="8">
                What is your plan cancellation policy?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="8">
                <Card.Body>
                  <p>
                    Some cleaning plans require a minimum commitment term.
                    Cancelling your plan before the minimum term is complete
                    will result in a $99 fee. More information about how to
                    cancel.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="9">
                If my cleaning plan has a minimum term, what happens when the
                minimum term ends?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="9">
                <Card.Body>
                  <p>
                    If your plan carries a minimum term of 3, 6, or 12 months,
                    Handy will continue to automatically schedule bookings at
                    your selected frequency (weekly, biweekly, or monthly) after
                    your minimum term ends. You can cancel your plan at any time
                    with no fee. However, fees do apply when bookings are
                    cancelled or rescheduled within 24 hours (but more than 2
                    hours) of your next booking's start time.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="10">
                I need more help
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="10">
                <Card.Body>Need more help?</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
      </div>
      <div className="service__meetpros">
        <Container>
          <div className="heading--primary">
            <h2>Meet Some of Our Top House Cleaning Professionals</h2>
            <h4>
              Build a Pro Team so that you always have a great group of go-to
              professionals for all your home cleaning services.
            </h4>
          </div>
          <Row>
            <Col xs={12} lg={4}>
              <div className="card--pros">
                <div className="card--profile">
                  <img src={Chris} alt="Chris" className="card--avatar" />
                  <div className="card--profileDetailsBox">
                    <div className="card--profileName">
                      <span>Chris Hemsworth</span>
                    </div>
                    <div className="card--profileRating"></div>
                    <div className="card--profileJobs">
                      <span>108 jobs completed</span>
                    </div>
                  </div>
                </div>
                <div className="card--intro">
                  <p>
                    "My name is Chris, I have experience cleaning houses for
                    some time, and I always do the cleaning with lots of love in
                    every detail of your house, during cleaning I like to leave
                    everything in its proper place well organized and clean. See
                    you soon!"
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <div className="card--pros">
                <div className="card--profile">
                  <img src={Liam} alt="Liam" className="card--avatar" />
                  <div className="card--profileDetailsBox">
                    <div className="card--profileName">
                      <span>Chris Hemsworth</span>
                    </div>
                    <div className="card--profileRating"></div>
                    <div className="card--profileJobs">
                      <span>108 jobs completed</span>
                    </div>
                  </div>
                </div>
                <div className="card--intro">
                  <p>
                    "My name is Liam, I have experience cleaning houses for some
                    time, and I always do the cleaning with lots of love in
                    every detail of your house, during cleaning I like to leave
                    everything in its proper place well organized and clean. See
                    you soon!"
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <div className="card--pros">
                <div className="card--profile">
                  <img src={Chris} alt="Chris" className="card--avatar" />
                  <div className="card--profileDetailsBox">
                    <div className="card--profileName">
                      <span>Chris Hemsworth</span>
                    </div>
                    <div className="card--profileRating"></div>
                    <div className="card--profileJobs">
                      <span>108 jobs completed</span>
                    </div>
                  </div>
                </div>
                <div className="card--intro">
                  <p>
                    "My name is Chris, I have experience cleaning houses for
                    some time, and I always do the cleaning with lots of love in
                    every detail of your house, during cleaning I like to leave
                    everything in its proper place well organized and clean. See
                    you soon!"
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="service__introDetails">
        <Row className="justify-content-center">
          <Col xs={10} lg={8}>
            <h2>Here's Why Handy is the Best House Cleaning Service</h2>
            <p>
              Instant online booking with 7am-11pm availability Book online
              instantly, and schedule your first cleaning for as early as
              tomorrow. Get your home cleaned anytime from 7am to 11pm, 7 days a
              week.
            </p>
            <p>
              Friendly, vetted professionals All professionals on the Handy
              platform are screened, background checked, and are rated by
              customers like you to ensure quality.
            </p>
            <p>
              Cleaned the way you want Professionals bring supplies and work
              from a comprehensive checklist that you can tailor to your liking.
              You can work with the same cleaner every time. Handy strives to
              match you with the right professional for you and your home. We
              also provide you with a team of professionals to provide backup in
              case of scheduling conflicts.
            </p>
            <p>
              Flexible scheduling Set a schedule that fits your life. Handy
              helps you automatically schedule your weekly, biweekly, or monthly
              cleaning, so you can focus on the other things in your life.
              Reschedule or adjust the frequency of your cleanings as needed.
              Get the benefit of a regularly cleaned home. Easy and secure
              online payments. No more last minute runs to the bank. Pay online
              and tip at your discretion.
            </p>
            <p>
              See the progress of your cleaning from your phone Not able to be
              home during the cleaning? No problem. The Handy app allows your to
              see when your cleaner arrives and check the progress of their
              cleaning.
            </p>
            <p>
              The Handy Happiness Guarantee Your happiness is our goal. If
              you're not satisfied with the quality of the service, we'll send
              another pro to make it right at no extra charge.
            </p>
            <div className="line-break"></div>
            <h2>Make House Cleaning Your Affordable Luxury</h2>
            <p>
              Imagine a world without Handy. You’ve put in a 12 hour day at the
              office, your train is 30 minutes late, and by the time you finally
              walk into your apartment, there are dirty dishes stacked high in
              the sink, dirty clothes are strewn everywhere, your bed is unmade,
              the shower is starting to smell a bit like mildew, and the floors
              are covered with mud. A professional maid service probably sounds
              pretty good right about now, doesn't it? The last thing in the
              world you want to do is pull on your yellow rubber gloves and
              begin scrubbing the floors and vacuuming the carpets. With Handy,
              you don’t have to.
            </p>
            <p>
              There is no feeling quite like coming home from work and walking
              into a beautiful, fresh-smelling, clean home. Rather than clean
              the toilet, dust the shelves, and wipe down the countertops, you
              can instead unwind on the couch, curled up under a blanket, maybe
              pour yourself that glass of wine you’ve been thinking about, and
              start that new TV show everyone’s been talking about. A visit from
              a housekeeping service is one of the best gifts you can give
              yourself. Book a home cleaning with Handy today.
            </p>
            <h2>Fairly Priced and Convenient Cleaning Services</h2>
            <p>
              Price is important. Nobody likes it when they think they’re paying
              one price for a home cleaning service provider, and then they are
              informed that the price is actually going to be much higher. With
              Handy, we let you know up front what you’re going to pay. And with
              incredibly affordable hourly rates given at a discount to loyal
              customers who sign up for weekly, bi-weekly or monthly house
              cleaning services, we’re confident you’ll be satisfied.
            </p>
            <p>
              Admit it, we’ve all been there. Your home cleaning or maid service
              is coming the next morning and you realize at 9 PM that you don’t
              have any cash to pay them. So you reluctantly put on your shoes,
              find your jacket, and drive to the nearest bank to take money out
              of the ATM. Handy is entirely cashless -- pay your cleaner in the
              app with a credit card, simple as that. We’ll even save it for
              next time. And if you’re so thrilled with how beautiful and clean
              your apartment looks and you want to tip your house cleaning pro
              something extra, you can do that with your credit card in the app
              as well.
            </p>
            <h2>Ensuring Your House Cleaner Does the Perfect Job</h2>
            <p>
              We know that when you book a maid service, housekeeping service,
              or house cleaning service through Handy, you are allowing a
              stranger to enter your home. When you book a house cleaner through
              the Handy platform, you can rest assured that they’ve been vetted
              before they arrive at your door. You can give your Handy
              professional additional instructions when filling out your
              cleaning preferences online. If you have particular allergies to
              detergents, for instance, or a special way of cleaning that you
              prefer, you can easily let your house cleaner know ahead of time.
              You can even prioritize the various home cleaning tasks that your
              Handy professional will tackle in the order that you prefer, so
              you can make sure your biggest concerns will get extra love and
              attention.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Cleaning;
