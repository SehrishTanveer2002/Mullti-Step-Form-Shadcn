
import AddressInfoForm from "@/components/AdressInfoForm";
import React from "react";

function Step3({prevStep}) {
  return (
    <div className="step-1-container">
      <AddressInfoForm  prevStep={prevStep}/>
    </div>
  );
}
export default Step3;