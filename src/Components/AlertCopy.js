import React from "react";

import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";

import "./AlertCopy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AlertCopy = ({ setAlertShow }) => {
  return (
    <>
      <div className="bg grid lg:grid-cols-2 sm:grid-rows-auto lg:gap-4 gap-2 justify-content-center items-center">
        <div className="lg:col-start-1 lg:col-end-3">
          <p>Text Successfully Coppied!</p>
        </div>
        <div className="lg:col-start-3">
          <button onClick={() => setAlertShow(false)} variant="outline-success">
            <FontAwesomeIcon icon={faRectangleXmark} flip size="2xl" color="beige"/>
          </button>
        </div>
      </div>
    </>
  );
};

export default AlertCopy;
