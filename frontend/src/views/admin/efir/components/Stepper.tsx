import React, { useState } from 'react'
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';

type Props = {}

const Stepper = (props: Props) => {
    const [activeStep, setActiveStep] = useState(0);

    const handleStepClick = (stepIndex:number) => {
      setActiveStep(stepIndex);
    };
    const getStepContent = () => {
        switch (activeStep) {
          case 0:
            return <Form1 />;
          case 1:
            return <Form2/>;
          case 2:
            return <Form3 />;
          default:
            return null;
        }
      };
  return (
    <div>
        <ul className="steps w-[70vw] mt-3">
      <li
        className={`step ${activeStep === 0 ? 'step-primary' : ''}`}
        onClick={() => handleStepClick(0)}
      >
        Register
      </li>
      <li
        className={`step ${activeStep === 1 ? 'step-primary' : ''}`}
        onClick={() => handleStepClick(1)}
      >
        Choose plan
      </li>
      <li
        className={`step ${activeStep === 2 ? 'step-primary' : ''}`}
        onClick={() => handleStepClick(2)}
      >
        Purchase
      </li>
      <li
        className={`step ${activeStep === 3 ? 'step-primary' : ''}`}
        onClick={() => handleStepClick(3)}
      >
        Receive Product
      </li>
    </ul>
    {getStepContent()}
    </div>
  )
}

export default Stepper