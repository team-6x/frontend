import { useState, useRef } from 'react';

const useNextStep = () => {
  const [openSecondStep, setOpenSecondStep] = useState(false);
  const [openThirdStep, setOpenThirdStep] = useState(false);
  const secondStepRef = useRef<HTMLDivElement>(null);
  const thirdStepRef = useRef<HTMLDivElement>(null);

  const scrollToNextStep = (ref: React.RefObject<HTMLDivElement>) =>
    setTimeout(() => ref.current?.scrollIntoView({ behavior: 'smooth' }), 0);

  const secondStepHandler = () => {
    if (openSecondStep) return;
    setOpenSecondStep(true);
    scrollToNextStep(secondStepRef);
  };

  const thirdStepHandler = () => {
    if (openThirdStep) return;
    setOpenThirdStep(true);
    scrollToNextStep(thirdStepRef);
  };

  return {
    openSecondStep,
    openThirdStep,
    secondStepRef,
    thirdStepRef,
    secondStepHandler,
    thirdStepHandler,
  };
};

export default useNextStep;
