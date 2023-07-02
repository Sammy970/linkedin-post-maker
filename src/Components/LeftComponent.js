import React, { useState } from "react";
import "./LeftComponent.css";
import { api } from "../api_call_function/api_func";

// Importing Topic Components
import Certification from "./Topics/Certification";
import Conference from "./Topics/Conference";
import Others from "./Topics/Others";
import Intern from "./Topics/Intern";

const LeftComponent = ({ setOutput, setLoadingState }) => {
  const [topic, setTopic] = useState("certification");

  const [certificationData, setCertificationData] = useState({
    pub: "",
    title: "",
    duration: "",
    skill: "",
    extraDetails: "",
  });
  const [conferenceData, setConferenceData] = useState({
    conferenceName: "",
    location: "",
    date: "",
    titleOfResearch: "",
    teamMembers: "",
    extraDetails: "",
  });

  const [othersData, setOthersData] = useState({
    details: "",
  });

  const [internData, setInternData] = useState({
    companyName: "",
    position: "",
    duration: "",
    platform: "",
    extraDetails: "",
  });

  const handleButton = () => {
    api(
      topic,
      certificationData,
      conferenceData,
      internData,
      othersData,
      setOutput,
      setLoadingState
    );
  };

  return (
    <div className="flex items-center justify-center h-full pt-4">
      <div className="bgLeft leftContainer max-w-md mx-auto p-4">
        <div className="">
          <h1 className="text-center titleText">Options</h1>
        </div>
        <div className="mb-4">
          <label htmlFor="selectOption" className="block font-medium mb-1">
            Topic:
          </label>
          <select
            id="selectOption"
            name="selectOption"
            className="block w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => {
              setTopic(e.target.value);
            }}
          >
            <option value="certification">Certification</option>
            <option value="conference">Conference</option>
            <option value="internship">Internship</option>
            <option value="others">Other Topic</option>
          </select>
        </div>

        {topic === "certification" && (
          <Certification
            certificationData={certificationData}
            setCertificationData={setCertificationData}
          />
        )}

        {topic === "conference" && (
          <Conference
            conferenceData={conferenceData}
            setConferenceData={setConferenceData}
          />
        )}

        {topic === "internship" && (
          <Intern internData={internData} setInternData={setInternData} />
        )}

        {topic === "others" && (
          <Others othersData={othersData} setOthersData={setOthersData} />
        )}

        <div className="submitBtn">
          <button onClick={handleButton}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default LeftComponent;
