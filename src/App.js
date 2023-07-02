import { useState } from "react";
import "./App.css";

// Importing Components
import LeftComponent from "./Components/LeftComponent";
import RightComponent from "./Components/RightComponent";

function App() {
  const [output, setOutput] = useState("Enter Some Values");
  const [loadingState, setLoadingState] = useState(false);

  return (
    <>
      <div className="bgApp grid lg:grid-cols-2 h-screen">
        <div className="w-full bg1">
          <LeftComponent
            setOutput={setOutput}
            setLoadingState={setLoadingState}
          />
        </div>
        <div className="w-full bg2">
          <RightComponent output={output} loadingState={loadingState} />
        </div>
      </div>
    </>
  );
}

export default App;
