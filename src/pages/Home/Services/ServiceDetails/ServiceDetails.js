import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./ServiceDetails.css";
import { CgArrowLongRight } from "react-icons/cg";
const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [data, setData] = useState([]);
  const [matchedData, setMatchedData] = useState({});
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ShowrovChy/Fake-Data-Folder/main/medical-care/mediCare.json"
    ).then((res) => res.json().then((data) => setData(data)));
  }, []);

  useEffect(() => {
    const matched = data.find((d) => d.id == serviceId);
    setMatchedData(matched);
  }, [serviceId, data]);

  window.scroll(0, 0);
  return (
    <div>
      <div className="serviceBanner"></div>

      <div className="container">
        <Row className="mt-5">
          <Col md={9} className="">
            <div>
              <img
                className="serviceDetailsImage"
                src={matchedData?.image}
                alt=""
              />
            </div>
            <div>
              <h1 className="mt-4 text-info">{matchedData?.title}</h1>
              <p className="detailsDescriptionStyle mt-4 ">
                {matchedData?.description}
              </p>
            </div>
          </Col>
          <Col md={3} className="ps-4 ">
            <h2>ALL SERVICES</h2>
            <ul className="serviceList">
              <li>
                <CgArrowLongRight />
                <Link to="/">PATHOLOGY</Link>
              </li>
              <li>
                <CgArrowLongRight />
                <Link to="/">RADIOLOGY</Link>
              </li>
              <li>
                <CgArrowLongRight />
                <Link to="/">CANCER SURGERY</Link>
              </li>
              <li>
                <CgArrowLongRight className="icon" />
                <Link to="/">RADIATION THERAPY</Link>
              </li>
              <li>
                <CgArrowLongRight />
                <Link to="/">DENTAL ONCOLOGY</Link>
              </li>
              <li>
                <CgArrowLongRight />
                <Link to="/">MEDICAL ONCOLOGY</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ServiceDetails;
