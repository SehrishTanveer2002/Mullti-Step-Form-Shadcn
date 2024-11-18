import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";

function App() {
  return (
    <Router> 
      <div>
        <Routes>  
          <Route path="/" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;





