import { ReactNode, useState } from "react";

type FormStepsProps = {
  forms: ReactNode[];
};

type FormSteps = {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  FormStep: () => ReactNode;
};

export const useFormSteps = ({ forms }: FormStepsProps): FormSteps => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((prev) => (step < forms.length - 1 ? prev + 1 : step));
  };

  const prevStep = () => {
    setStep((prev) => {
      return step > 0 ? prev - 1 : prev;
    });
  };

  const goToStep = (step: number) => {
    setStep(step);
  };

  return {
    step,
    nextStep,
    prevStep,
    goToStep,
    FormStep: () => forms[step],
  };
};
