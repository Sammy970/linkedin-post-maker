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
      <div className="bgApp grid-rows-auto h-full">
        <div className="title">
          <h1>
            <span className="specialWord">LinkedIn</span> Post-Maker
          </h1>
        </div>
        <div className="subtitle">
          <h1>
            Made with ❣️ -{" "}
            <span className="specialWord2">
              <a href="https://www.linkedin.com/in/samyak-jain-3a6639172/">
                Samyak Jain
              </a>
            </span>
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-5 md:gap-8">
          <div className="w-full bg1">
            <LeftComponent
              setOutput={setOutput}
              setLoadingState={setLoadingState}
            />
          </div>
          <RightComponent output={output} loadingState={loadingState} />
        </div>
      </div>
    </>
  );
}

export default App;
