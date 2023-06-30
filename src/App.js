import "./App.css";

// Importing Components
import LeftComponent from "./Components/LeftComponent";
import RightComponent from "./Components/RightComponent";

function App() {
  return (
    <>
      <div className="grid lg:grid-cols-2 h-screen">
        <div className="w-full bg1">
          <LeftComponent />
        </div>
        <div className="w-full bg2">
          <RightComponent />
        </div>
      </div>
    </>
  );
}

export default App;
