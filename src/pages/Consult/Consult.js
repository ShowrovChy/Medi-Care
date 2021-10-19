import React from "react";
import sleeping from "../../images/doctor.png";
import "./Consult.css";
const Consult = () => {
  window.scroll(0, 0);
  return (
    <div>
      <div className="img-div container consult-wrapper">
        <div className="consult-text">
          <h1 className="text-white text-center ">
            {" "}
            <span className="text-info"> OOOOOPS ! </span> Doctor is sleeping.
          </h1>
          <h2 className="text-white text-center ">
            Consultation time{" "}
            <span className="text-info  "> 11.00 AM - 8.00 PM</span>{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Consult;
