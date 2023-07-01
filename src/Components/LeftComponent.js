import React, { useState } from "react";
import "./LeftComponent.css";
import { api } from "../api_call_function/api_func";
import Certification from "./Topics/Certification";
import Conference from "./Topics/Conference";
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

  const [interndata, setInternData] = usestate({
    
  })

  const handleButton = () => {
    api(topic, certificationData, conferenceData, setOutput, setLoadingState);
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="leftContainer max-w-md mx-auto p-4">
        <div className="">
          <h1 className="text-lg text-center">Options</h1>
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

        <div className="">
          <button onClick={handleButton}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default LeftComponent;
