import { Carousel, Button } from "react-bootstrap";
import React from "react";
import "./Banner.css";
import banner1 from "../../../images/Banner/banner1.jpg";
import banner2 from "../../../images/Banner/banner2.jpg";
import banner3 from "../../../images/Banner/banner3.jpg";
import { useHistory } from "react-router";

const Banner = () => {
  const history = useHistory();

  const handleAboutBtn = () => {
    history.push("/about");
  };
  return (
    <div>
      <Carousel className="carouselStyle " interval={2500} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block carousel-img"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption className="carouselCaption">
            <h3 className="carouselHeading">
              Correct diagnosis is half the success.
            </h3>
            <p className="carouselDescription">
              Deeper appreciation and concern for our client’s investments and
              the human experience.
            </p>
            <div>
              <Button
                onClick={handleAboutBtn}
                className="carousel-btn btn-one "
              >
                {" "}
                About us
              </Button>
              <Button className="carousel-btn btn-two "> Book </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-img"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption className="carouselCaption">
            <h3 className="carouselHeading">
              We do our best for you and your health.
            </h3>
            <p className="carouselDescription">
              High professional doctors level. All specialists have extensive
              practical experience and training courses.
            </p>
            <div>
              <Button className="carousel-btn btn-one "> About us</Button>
              <Button className="carousel-btn btn-two ">Book</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-img"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption className="carouselCaption">
            <h3 className="carouselHeading">
              We care and protect <br /> your health.
            </h3>
            <p className="carouselDescription">
              Only modern and best equipment advanced medical technologies and
              innovative diagnosis.
            </p>
            <div>
              <Button className="carousel-btn btn-one"> About us</Button>
              <Button className="carousel-btn btn-two"> Book</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
