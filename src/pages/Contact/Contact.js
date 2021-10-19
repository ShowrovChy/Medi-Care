import React from "react";
import "./Contact.css";
import { Col, Row } from "react-bootstrap";

const Contact = () => {
  window.scroll(0, 0);
  return (
    <div className="container contact-container">
      <Row md={2} xs={1} lg={3} className="g-5 contact-wrapper">
        <Col className="">
          <div className=" p-3 rounded-3  contact-div">
            <h4>POSTAL ADDRESS</h4>
            <p> MediCare, Locked Bag 1 A'Beckett St, Melbourne, VIC 8006</p>
          </div>
        </Col>
        <Col>
          <div className=" p-3 rounded-3  contact-div">
            <h4> DAY THERAPY</h4>
            <p>Appointments & enquiries </p>
            <h6>Phone(03) 8559 5330</h6>
          </div>
        </Col>
        <Col>
          <div className=" p-3 rounded-3  contact-div">
            <h4>PATIENT NAVIGATORS</h4>
            <p>
              For help with clinic appointments or getting in touch with your
              care team, contact your Patient Navigator
            </p>
            <h6>Phone(03) 8559 5000</h6>
          </div>
        </Col>
        <Col>
          <div className=" p-3 rounded-3  contact-div">
            <h4>RADIATION THERAPY</h4>
            <p>Appointments & enquiries</p>
            <h6>Phone(03) 8559 6000</h6>
          </div>
        </Col>
        <Col>
          <div className=" p-3 rounded-3 contact-div">
            <h4> REFERRALS</h4>
            <p>Business hours, Mon-Fri</p>
            <h6>Emailreferrals@petermac.org</h6>
            <h6>Phone(03) 8559 5021</h6>
          </div>
        </Col>

        <Col>
          <div className=" p-3 rounded-3  contact-div">
            <h4>SUPPORT OUR WORK</h4>
            <p>MediCare Foundation</p>
            <h6>Emailfoundation@petermac.org</h6>
            <h6> Phone1800 111 440</h6>
            <h6> Toll Free03) 8559 7777</h6>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
