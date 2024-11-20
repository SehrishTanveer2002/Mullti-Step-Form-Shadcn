import PersonalInfoForm from "@/components/PersonalInfoForm";
import React from "react";

function Step1({ nextStep, formData, onFormDataChange }) {
  return (
    <div>
      <PersonalInfoForm nextStep={nextStep} formData={formData} onFormDataChange={onFormDataChange} />
    </div>
  );
}

export default Step1;

