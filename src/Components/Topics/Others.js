import React from "react";

const style = {
  height: "300px",
};

const Others = ({ othersData, setOthersData }) => {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="textInput" className="block font-medium mb-1">
          Details about the Post:
        </label>
        <textarea
          style={style}
          type="text"
          id="textInput"
          name="textInput"
          placeholder="Eg. post about Latest Technology, etc..."
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
