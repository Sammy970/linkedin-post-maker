import React, { useState } from "react";
import "./LeftComponent.css";
import { api } from "../api_call_function/api_func";
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

  const [internData, setInternData] = useState({});

  const handleButton = () => {
    api(
      topic,
      certificationData,
      conferenceData,
      othersData,
      setOutput,
      setLoadingState
    );
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
            <option value="intern">Internship</option>
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
         {topic === "intern" && (
          <Intern internData={internData} setInternData={setInternData} />
        )}

        {topic === "others" && (
          <Others othersData={othersData} setOthersData={setOthersData} />
        )}

        <div className="">
          <button onClick={handleButton}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default LeftComponent;
