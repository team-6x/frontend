import { useState, useRef } from 'react';

const useNextStep = () => {
  const [openSecondStep, setOpenSecondStep] = useState(false);
  const [openThirdStep, setOpenThirdStep] = useState(false);
  const secondStepRef = useRef<HTMLDivElement>(null);
  const thirdStepRef = useRef<HTMLDivElement>(null);

  const scrollToNextStep = (ref: React.RefObject<HTMLDivElement>) =>
    setTimeout(() => ref.current?.scrollIntoView({ behavior: 'smooth' }), 0);

  const showSecondStep = () => {
    setOpenSecondStep(true);
    // scrollToNextStep(secondStepRef);
    setTimeout(
      () => secondStepRef.current?.scrollIntoView({ behavior: 'smooth' }),
      0,
    );
  };

  const showThirdStep = () => {
    setOpenThirdStep(true);
    scrollToNextStep(thirdStepRef);
  };

  return {
    openSecondStep,
    openThirdStep,
    secondStepRef,
    thirdStepRef,
    showSecondStep,
    showThirdStep,
  };
};

export default useNextStep;
