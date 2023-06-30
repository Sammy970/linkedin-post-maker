import React, { useState } from "react";
import "./LeftComponent.css";
import { api } from "../api_call_function/api_func";
import Certification from "./Topics/Certification";
import Conference from "./Topics/Conference";

const LeftComponent = ({ setOutput, setLoadingState }) => {
  const [topic, setTopic] = useState("certification");
  const [pub, setPub] = useState("");
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [skill, setSkills] = useState("");
  const [extraDetails, setExtraDetails] = useState("");

  const handleButton = () => {
    api(
      topic,
      pub,
      title,
      duration,
      skill,
      extraDetails,
      setOutput,
      setLoadingState
    );
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="leftContainer max-w-md mx-auto p-4">
        <div className="pb-10">
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
            setPub={setPub}
            setTitle={setTitle}
            setDuration={setDuration}
            setSkills={setSkills}
            setExtraDetails={setExtraDetails}
          />
        )}

        {topic === "conference" && <Conference />}
        <div className="">
          <button onClick={handleButton}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default LeftComponent;
