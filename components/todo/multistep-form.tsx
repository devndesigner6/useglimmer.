import React, { useMemo, useState } from "react";
import { Button } from "../ui/button";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const content = useMemo(() => {
    switch (currentStep) {
      case 0:
        return <div>Step One</div>;
      case 1:
        return <div>Step Two</div>;
      case 2:
        return <div>Step Three</div>;
    }
  }, [currentStep]);

  return (
    <div>
      <div className="flex gap-2">
        <Button
          disabled={currentStep === 0}
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          Previous
        </Button>
        <Button
          disabled={currentStep === 2}
          onClick={() => setCurrentStep(currentStep + 1)}
        >
          {currentStep === 2 ? "Submit" : "Next"}
        </Button>
      </div>
      {content}
    </div>
  );
};

export default MultiStepForm;
