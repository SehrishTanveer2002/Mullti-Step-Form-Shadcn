import React, { useState } from "react";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({}); 

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleFormDataChange = (newData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData, 
    }));
  };

  return (
    <div>
      {currentStep === 0 && <Step1 nextStep={nextStep} prevStep={prevStep} formData={formData} onFormDataChange={handleFormDataChange} />}
      {currentStep === 1 && <Step2 nextStep={nextStep} prevStep={prevStep} formData={formData} onFormDataChange={handleFormDataChange} />}
      {currentStep === 2 && <Step3 prevStep={prevStep} formData={formData} onFormDataChange={handleFormDataChange} />}
    </div>
  );
}

export default App;







