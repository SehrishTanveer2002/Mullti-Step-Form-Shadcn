import PersonalInfoForm from "@/components/PersonalInfoForm";
import React from "react";

function Step1({ nextStep }) {
  return (
    <div>
      <PersonalInfoForm nextStep={nextStep}  />
    </div>
  );
}

export default Step1;

