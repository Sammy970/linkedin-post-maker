import React from "react";

const Others = ({ othersData, setOthersData }) => {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="textInput" className="block font-medium mb-1">
          Details about the Post:
        </label>
        <textarea
          type="text"
          id="textInput"
          name="textInput"
          placeholder="Eg. Coursera, Udemy"
          className="block w-full p-2 border border-gray-300 rounded-md"
          onChange={(e) => {
            setOthersData({
              ...othersData,
              details: e.target.value,
            });
          }}
        />
      </div>
    </>
  );
};

export default Others;
