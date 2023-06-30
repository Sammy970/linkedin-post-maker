import React from "react";
import "./LeftComponent.css";

const LeftComponent = () => {
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
          >
            <option value="certi">Certificate</option>
            <option value="conf">Conference</option>
          </select>
        </div>
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
          />
        </div>
      </div>
    </div>
  );
};

export default LeftComponent;
