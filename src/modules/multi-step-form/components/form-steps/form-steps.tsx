"use client";
import { FC } from "react";

import DeskBg from "@/assets/images/bg-sidebar-desktop.svg";
import MobileBg from "@/assets/images/bg-sidebar-mobile.svg";
import { Step } from "./components";

import styles from "./form-steps.module.sass";
import { useMultiStepFormContext } from "@/context/multistep-form-context";
import { useMediaQuery } from "@uidotdev/usehooks";
import { FORM_STEPS, MOBILE_QUERY } from "@/common/mockData";

export const FormSteps: FC = () => {
  const { step, isThanksStep } = useMultiStepFormContext();
  const isMobile = useMediaQuery(MOBILE_QUERY);

  return (
    <div className={styles.main}>
      <div className={styles.steps}>
        {FORM_STEPS.map((title, index) => (
          <Step
            key={title}
            title={title}
            subtitle={`step ${index + 1}`}
            index={index + 1}
            filled={step == index || (index == 3 && isThanksStep)}
          />
        ))}
      </div>

      {isMobile ? (
        <MobileBg className={styles.bg} />
      ) : (
        <DeskBg className={styles.bg} />
      )}
    </div>
  );
};
