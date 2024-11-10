import { useState } from "react";
import { PersonalDetailsForm } from "@/components";
import { PaymentDetailsForm } from "@/components";

function App() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="m-auto max-w-6xl w-full md:py-24 flex flex-col md:flex-row gap-4 justify-center items-start">
          <div className="w-full md:w-2/3">
            <PersonalDetailsForm title="Personal Details" />
          </div>
          <div className="w-full md:w-1/3">
            <PaymentDetailsForm title="Payment Details" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
