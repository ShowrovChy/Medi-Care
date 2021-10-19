import React from "react";
import "./SingleService.css";
import { Col, Button } from "react-bootstrap";
import { CgArrowLongRight } from "react-icons/cg";
import { Link, useHistory } from "react-router-dom";

const SingleService = ({ service }) => {
  const { id, title, shortDescription, image } = service;
  const history = useHistory();
  const handleConsult = () => {
    history.push("/consult");
  };
  return (
    <Col className="serviceColumn px-3">
      <div className="serviceCard">
        <div className="imgDiv">
          <img className="serviceImg " src={image} alt="" />
        </div>
        <div className="card-desc">
          <h4 className=" serviceTitle mt-3">{title} </h4>
          <p className="serviceShortDesc mt-3 mb-0">{shortDescription}</p>
          <div className="serviceLinkDiv d-flex justify-content-between align-items-center">
            <Button onClick={handleConsult} className="consult-btn">
              Consult to doctor
            </Button>
            <Link to={`/service/${id}`} className=" arrowLink fs-1 mb-2 me-3">
              <CgArrowLongRight />
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleService;
