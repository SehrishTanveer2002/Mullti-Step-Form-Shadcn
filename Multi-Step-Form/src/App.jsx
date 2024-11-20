import React, { useState } from "react";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };
  

  return (
    <div>
      {currentStep === 0 && <Step1 nextStep={nextStep} />}
      {currentStep === 1 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
      {currentStep === 2 && <Step3 prevStep={prevStep} />}
    </div>
  );
}

export default App;







