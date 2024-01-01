"use client";

import React, {
  FC,
  Fragment,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

type MultiStepFormContextProvider = {
  children: ReactNode;
  forms: (({}: {}) => JSX.Element)[];
};

type MultiStepFormContextType = {
  step: number;
  totalSteps: number;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  FormStep: ({}: {}) => JSX.Element;
  isSubmitStep: boolean;
  isThanksStep: boolean;
};

const initalValue: MultiStepFormContextType = {
  step: 0,
  totalSteps: -1,
  nextStep: () => {},
  prevStep: () => {},
  goToStep: () => {},
  FormStep: () => <Fragment />,
  isSubmitStep: false,
  isThanksStep: false,
};

const MultiStepFormContext =
  createContext<MultiStepFormContextType>(initalValue);

export const useMultiStepFormContext = () => useContext(MultiStepFormContext);

export const MultiStepFormContextProvider: FC<MultiStepFormContextProvider> = ({
  children,
  forms,
}) => {
  const [step, setStep] = useState(0);

  const totalSteps = forms.length;

  const isSubmitStep = step == totalSteps - 2;
  const isThanksStep = step == totalSteps - 1;

  const nextStep = () => {
    setStep((prev) => (step < forms.length ? prev + 1 : step));
  };

  const prevStep = () => {
    setStep((prev) => {
      return step > 0 ? prev - 1 : prev;
    });
  };

  const goToStep = (step: number) => {
    setStep(step);
  };

  const FormStep = forms[step];
  return (
    <MultiStepFormContext.Provider
      value={{
        step,
        nextStep,
        prevStep,
        goToStep,
        FormStep,
        totalSteps,
        isThanksStep,
        isSubmitStep,
      }}
    >
      {children}
    </MultiStepFormContext.Provider>
  );
};
