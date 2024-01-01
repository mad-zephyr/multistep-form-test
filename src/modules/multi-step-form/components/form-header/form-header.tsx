import { FC } from "react";
import { Htag, Ptag } from "@/components/ui";

import styles from "./form-header.module.sass";
import { useMultiStepFormContext } from "@/context/multistep-form-context";
import { HEADERS } from "@/common/mockData";

export const FormHeader: FC = () => {
  const { step, isThanksStep } = useMultiStepFormContext();
  return !isThanksStep ? (
    <div className={styles.main}>
      <Htag size="h1" text={HEADERS[step]?.title} />
      <Ptag text={HEADERS[step]?.subtitle} />
    </div>
  ) : (
    <></>
  );
};
