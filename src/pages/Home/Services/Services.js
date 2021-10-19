import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import "./Services.css";
import SingleService from "./SingleService/SingleService";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ShowrovChy/Fake-Data-Folder/main/medical-care/mediCare.json"
    ).then((res) => res.json().then((data) => setServices(data)));
  }, []);
  return (
    <div className="service-container ">
      <h1 className="service-heading text-center mb-5">Our Services</h1>
      <Row
        xs={1}
        md={2}
        lg={3}
        className="service-card-wrapper g-5 container mx-auto px-0"
      >
        {services.map((service) => (
          <SingleService key={service.id} service={service}></SingleService>
        ))}
      </Row>
    </div>
  );
};

export default Services;
