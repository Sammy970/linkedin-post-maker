import { useState } from "react";
import "./App.css";

// Importing Components
import LeftComponent from "./Components/LeftComponent";
import RightComponent from "./Components/RightComponent";

function App() {
  const [output, setOutput] = useState("Enter Some Values");
  return (
    <>
      <div className="grid lg:grid-cols-2 h-screen">
        <div className="w-full bg1">
          <LeftComponent setOutput={setOutput} />
        </div>
        <div className="w-full bg2">
          <RightComponent output={output} />
        </div>
      </div>
    </>
  );
}

export default App;
