"use client";

import { FC } from "react";

import styles from "./multi-step-form.module.sass";
import { FormBody, FormFooter, FormHeader, FormSteps } from "./components";
import {
  AddonsForm,
  FinishingForm,
  PersonalInfoForm,
  SelectedPlanForm,
  ThanksForm,
} from "../forms";
import { MultiStepFormContextProvider } from "@/context/multistep-form-context";
import { Formik } from "formik";
import { StepFormValidationSchema } from "./components/form-body/form-validation-schema";
import { FormPropsData } from "./components/form-body/form-body";
import { useMediaQuery } from "@uidotdev/usehooks";
import { MOBILE_QUERY } from "@/common/mockData";

export const INITIAL_VALUES: FormPropsData = {
  name: "",
  email: "",
  phone: "",
  monthly: false,
  plans: "arcade",
  services: {
    online: false,
    storage: false,
    costumizable: false,
  },
};

export const MultiStepForm: FC = () => {
  const isMobile = useMediaQuery(MOBILE_QUERY);

  const steps = [
    PersonalInfoForm,
    AddonsForm,
    SelectedPlanForm,
    FinishingForm,
    ThanksForm,
  ];

  return (
    <MultiStepFormContextProvider forms={steps}>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={StepFormValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <div className={styles.main}>
          <div className={styles.left}>
            <FormSteps />
          </div>
          <div className={styles.right}>
            <div className={styles.wrapper}>
              <FormHeader />
              <FormBody />
              {!isMobile && <FormFooter />}
            </div>
          </div>
          {isMobile && <FormFooter />}
        </div>
      </Formik>
    </MultiStepFormContextProvider>
  );
};
