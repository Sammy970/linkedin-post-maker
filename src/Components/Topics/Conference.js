import React from "react";

const Conference = ({ conferenceData, setConferenceData }) => {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="textInput" className="block font-medium mb-1">
          Conference Name:
        </label>
        <input
          type="text"
          id="textInput"
          name="textInput"
          placeholder="Eg. Coursera, Udemy"
          className="block w-full p-2 border border-gray-300 rounded-md"
          onChange={(e) => {
            setConferenceData({
              ...conferenceData,
              conferenceName: e.target.value,
            });
          }}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="textInput" className="block font-medium mb-1">
          Location:
        </label>
        <input
          type="text"
          id="textInput"
          name="textInput"
          placeholder="Eg. Frontend by META"
          className="block w-full p-2 border border-gray-300 rounded-md"
          onChange={(e) => {
            setConferenceData({
              ...conferenceData,
              location: e.target.value,
            });
          }}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="textInput" className="block font-medium mb-1">
          Date:
        </label>
        <input
          type="text"
          id="textInput"
          name="textInput"
          placeholder="Eg. 3/5 Months/Weaks etc"
          className="block w-full p-2 border border-gray-300 rounded-md"
          onChange={(e) => {
            setConferenceData({
              ...conferenceData,
              date: e.target.value,
            });
          }}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="textInput" className="block font-medium mb-1">
        Title Of Research:
        </label>
        <input
          type="text"
          id="textInput"
          name="textInput"
          placeholder="Eg. JavaScript, React, etc"
          className="block w-full p-2 border border-gray-300 rounded-md"
          onChange={(e) => {
            setConferenceData({
              ...conferenceData,
              titleOfResearch: e.target.value,
            });
          }}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="textInput" className="block font-medium mb-1">
        Team Members:
        </label>
        <input
          type="text"
          id="textInput"
          name="textInput"
          placeholder="Eg. Info related to course, etc"
          className="block w-full p-2 border border-gray-300 rounded-md"
          onChange={(e) => {
            setConferenceData({
              ...conferenceData,
              teamMembers: e.target.value,
            });
          }}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="textInput" className="block font-medium mb-1">
        Extra Details:
        </label>
        <input
          type="text"
          id="textInput"
          name="textInput"
          placeholder="Eg. Info related to course, etc"
          className="block w-full p-2 border border-gray-300 rounded-md"
          onChange={(e) => {
            setConferenceData({
              ...conferenceData,
              extraDetails: e.target.value,
            });
          }}
        />
      </div>
    </>
  );
};

export default Conference;
