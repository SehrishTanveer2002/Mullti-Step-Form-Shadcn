import ContactInfoForm from "@/components/ContactInfoForm";
import React from "react";

function Step2({ nextStep , prevStep}) {
  return (
    <div className="step-1-container">
      <ContactInfoForm nextStep={nextStep} prevStep={prevStep}/>
    </div>
  );
}
export default Step2;