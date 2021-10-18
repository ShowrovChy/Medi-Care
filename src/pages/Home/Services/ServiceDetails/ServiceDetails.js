import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./ServiceDetails.css";

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
        <Row className="">
          <Col md={9}>
            <div>
              <img src={matchedData?.image} alt="" />
            </div>
            <div>
              <h1>{matchedData?.title}</h1>
              <p className="detailsDescriptionStyle">
                {matchedData?.description}
              </p>
            </div>
          </Col>
          <Col md={3}>
            <h2>All Services</h2>
            <ul>
              <li>
                <Link>Pathology</Link>
              </li>
              <li>
                <Link>Radiology</Link>
              </li>
              <li>
                <Link>Cancer Surgery</Link>
              </li>
              <li>
                <Link>Radiation Therapy</Link>
              </li>
              <li>
                <Link>Dental Oncology</Link>
              </li>
              <li>
                <Link>Medical Oncology</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ServiceDetails;
