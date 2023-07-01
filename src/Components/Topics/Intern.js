import React from 'react'

const Intern = ({internData, setInternData}) => {
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
          placeholder="Eg. 15th International Conference on Science, Technology and Management (ICSTM-2023)"
          className="block w-full p-2 border border-gray-300 rounded-md"
          onChange={(e) => {
            setInternData({
              ...internData,
              conferenceName: e.target.value,
            });
          }}
        />
      </div>
      </>
  )
}

export default Intern