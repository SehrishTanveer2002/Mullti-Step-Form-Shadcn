import ContactInfoForm from "@/components/ContactInfoForm";
import React from "react";

function Step2({ nextStep , prevStep, formData, onFormDataChange}) {
  return (
    <div className="step-1-container">
      <ContactInfoForm nextStep={nextStep} prevStep={prevStep} formData={formData}  onFormDataChange={onFormDataChange}/>
    </div>
  );
}
export default Step2;