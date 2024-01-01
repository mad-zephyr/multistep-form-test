import { Button } from "@/components/ui";
import { FC } from "react";

import styles from "./form-footer.module.sass";
import { useMultiStepFormContext } from "@/context/multistep-form-context";
import { useFormikContext } from "formik";
import { FormPropsData } from "../form-body/form-body";

type FormFooterProps = {};

export const FormFooter: FC<FormFooterProps> = () => {
  const { isValid, setTouched, validateForm } =
    useFormikContext<FormPropsData>();
  const { nextStep, prevStep, step, isThanksStep, isSubmitStep } =
    useMultiStepFormContext();

  const submitStepBtnText = isSubmitStep ? "Confirm" : "Next Step";
  const showPrevBtn = step != 0;

  const handleNextStep = async () => {
    const errors = await validateForm();
    const isFormValid = Object.keys(errors).length == 0;

    const fieldTouch = Object.keys(errors).reduce(
      (prev, curr) => ({
        ...prev,
        [curr]: true,
      }),
      {}
    );

    setTouched(fieldTouch);

    if (isFormValid) {
      nextStep();
    }
  };

  return !isThanksStep ? (
    <div className={styles.main}>
      {showPrevBtn && (
        <Button variant="ghost" text="Go Back" onClick={prevStep} />
      )}
      <Button
        variant={isSubmitStep ? "submit" : "primary"}
        type="submit"
        disabled={!isValid}
        text={submitStepBtnText}
        onClick={handleNextStep}
      />
    </div>
  ) : (
    <></>
  );
};
