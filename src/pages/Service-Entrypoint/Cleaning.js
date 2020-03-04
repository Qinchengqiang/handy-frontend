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
                professional. Download the app to share further cleaning details and
                instructions!
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
          <Row>
            <Col xs={12} sm={9}>
<h2>
  Frequently Asked Questions
</h2>
          </Col>
          </Row>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0"></Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body></Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1"></Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body></Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2"></Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body></Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3"></Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body></Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4"></Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body></Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5"></Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body></Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="6"></Accordion.Toggle>
              <Accordion.Collapse eventKey="6">
                <Card.Body></Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="7"></Accordion.Toggle>
              <Accordion.Collapse eventKey="7">
                <Card.Body></Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="8"></Accordion.Toggle>
              <Accordion.Collapse eventKey="8">
                <Card.Body></Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="9"></Accordion.Toggle>
              <Accordion.Collapse eventKey="9">
                <Card.Body></Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="10"></Accordion.Toggle>
              <Accordion.Collapse eventKey="10">
                <Card.Body></Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
      </div>
    </div>
  );
};

export default Cleaning;
