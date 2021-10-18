import React from "react";
import "./About.css";
const About = () => {
  window.scroll(0, 0);
  return (
    <div className="container about-container">
      <h1 className="text-center fw-light ">ABOUT US</h1>
      <p className="text-center mt-5">
        MediCare is a world leading cancer research, education and treatment
        centre and New York's only public health service solely dedicated to
        caring for people affected by cancer. We have over 3,200 staff,
        including more than 700 laboratory and clinical researchers, all focused
        on providing better treatments, better care and potential cures for
        cancer.
      </p>
    </div>
  );
};

export default About;
