import { useState } from "react";
import "./App.css";
import RawDataAnalysis from "./Pages/RawDataAnalysis/RawDataAnalysis";
import Navbar from "./Components/Navbar/Navbar";
import Applications from "./Pages/Applications/Applications";
import Resources from "./Pages/Resources/Resources";

function App() {
  const [section, setSection] = useState(0);
  return (
    <div className="App">
      <Navbar setSection={setSection} section={section} />
      {section === 0 && <RawDataAnalysis />}
      {section === 1 && <Applications />}
      {section === 2 && <Resources />}
    </div>
  );
}

export default App;
