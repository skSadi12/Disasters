import React, { useState } from "react";
import OrBtn from "./OrBtn";
import { cn } from "../libs";
import { Link } from "react-router-dom";

function Stepper() {
  const [currentStep, setCurrentStep] = useState(0);
  const handleContinue = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };
  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };
  const steps = [
    {
      content: (
        <div className=" max-w-[230px] px-6 py-4 min-h-[270px] space-y-8 ">
          <img src="/progress1.png" alt="" />
          <h3 className="font-bold text-[20px]">What type of incident?</h3>
          <p className="text-[14px]">
            Choose the category that best describes the incident.
          </p>
        </div>
      ),
    },
    {
      content: (
        <div className="max-w-[230px] px-6 py-4 min-h-[270px] space-y-8 ">
          <img src="/progress2.png" alt="" />
          <h3 className="font-bold text-[20px]">Tell us about the incident?</h3>
          <p className="text-[14px]">
            Let’s connect the dots and see where to start.
          </p>
        </div>
      ),
    },
    {
      content: (
        <div className=" max-w-[230px] px-6 py-4 min-h-[270px] space-y-8 ">
          <img src="/progress3.png" alt="" />
          <h3 className="font-bold text-[20px]">
            Where did the incident occur?
          </h3>
          <p className="text-[14px]">
            Lorem ipsum dolar sit general sac mascho werho
          </p>
        </div>
      ),
    },
  ];
  console.log(steps);
  return (
    <div>
      <div className="flex  gap-10 justify-center items-center">
        {steps?.map((content, i) => (
          <div key={i}>
            <div
              className={cn(
                "h-8 w-8 relative flex justify-center items-center text-white rounded-[50%]  bg-gray-400",
                i <= currentStep && "bg-green-500"
              )}
            >
              {i + 1}
              {i < steps.length - 1 && (
                <div
                  className={cn(
                    "h-1 absolute w-10 left-8  bg-black",
                    i <= currentStep && "bg-green-500"
                  )}
                ></div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center flex-col md:flex-row  gap-6 mt-10">
        {steps?.map((content, i) => (
          <div
            key={i}
            className={cn("bg-[#E4E4E7]", i <= currentStep && "bg-amber-200")}
          >
            {content.content}
          </div>
        ))}
      </div>

      <div className="flex justify-evenly items-center mt-10 ">
        <button onClick={handleBack}>
          <OrBtn>Back</OrBtn>
        </button>
        {currentStep === steps.length -1 ? (
          <button >
            <OrBtn><Link to='/incidents/progress/NewIncident'>Get started</Link></OrBtn>
          </button>
        ) : (
          <button onClick={handleContinue}>
            <OrBtn>Continue</OrBtn>
          </button>
        )}
      </div>
    </div>
  );
}

export default Stepper;
