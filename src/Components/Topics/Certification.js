import React from "react";

const Certification = ({
  setPub,
  setTitle,
  setDuration,
  setSkills,
  setExtraDetails,
}) => {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="textInput" className="block font-medium mb-1">
          Publication:
        </label>
        <input
          type="text"
          id="textInput"
          name="textInput"
          placeholder="Eg. Coursera, Udemy"
          className="block w-full p-2 border border-gray-300 rounded-md"
          onChange={(e) => {
            setPub(e.target.value);
          }}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="textInput" className="block font-medium mb-1">
          Title of Course:
        </label>
        <input
          type="text"
          id="textInput"
          name="textInput"
          placeholder="Eg. Frontend by META"
          className="block w-full p-2 border border-gray-300 rounded-md"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="textInput" className="block font-medium mb-1">
          Duration of Course:
        </label>
        <input
          type="text"
          id="textInput"
          name="textInput"
          placeholder="Eg. 3/5 Months/Weaks etc"
          className="block w-full p-2 border border-gray-300 rounded-md"
          onChange={(e) => {
            setDuration(e.target.value);
          }}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="textInput" className="block font-medium mb-1">
          Skills gained with the Course:
        </label>
        <input
          type="text"
          id="textInput"
          name="textInput"
          placeholder="Eg. JavaScript, React, etc"
          className="block w-full p-2 border border-gray-300 rounded-md"
          onChange={(e) => {
            setSkills(e.target.value);
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
            setExtraDetails(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default Certification;
