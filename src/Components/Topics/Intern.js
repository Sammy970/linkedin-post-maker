import React from 'react'

const Intern = ({internData, setInternData}) => {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="textInput" className="block font-medium mb-1">
          Company Name:
        </label>
        <input
          type="text"
          id="textInput"
          name="textInput"
          placeholder="Eg. Amazon, Google, Microsoft etc"
          className="block w-full p-2 border border-gray-300 rounded-md"
          onChange={(e) => {
            setInternData({
              ...internData,
              companyName: e.target.value,
            });
          }}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="textInput" className="block font-medium mb-1">
          Position:
        </label>
        <input
          type="text"
          id="textInput"
          name="textInput"
          placeholder="Eg. FrontEnd Intern"
          className="block w-full p-2 border border-gray-300 rounded-md"
          onChange={(e) => {
            setInternData({
              ...internData,
              position: e.target.value,
            });
          }}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="textInput" className="block font-medium mb-1">
          Duration:
        </label>
        <input
          type="text"
          id="textInput"
          name="textInput"
          placeholder="Eg. 6 Months"
          className="block w-full p-2 border border-gray-300 rounded-md"
          onChange={(e) => {
            setInternData({
              ...internData,
              duration: e.target.value,
            });
          }}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="textInput" className="block font-medium mb-1">
          From where you got Internship:
        </label>
        <input
          type="text"
          id="textInput"
          name="textInput"
          placeholder="Eg. Internshala, Indeed, College TPO, etc"
          className="block w-full p-2 border border-gray-300 rounded-md"
          onChange={(e) => {
            setInternData({
              ...internData,
              platform: e.target.value,
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
          placeholder="Eg. Other Details about the internship"
          className="block w-full p-2 border border-gray-300 rounded-md"
          onChange={(e) => {
            setInternData({
              ...internData,
              extraDetails: e.target.value,
            });
          }}
        />
      </div>
      </>
  )
}

export default Intern