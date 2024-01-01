import { Htag, Ptag } from "@/components/ui";
import { useMultiStepFormContext } from "@/context/multistep-form-context";
import ThankIcon from "@/assets/images/icon-thank-you.svg";

import styles from "./thanks-form.module.sass";

export function ThanksForm(): JSX.Element {
  const { totalSteps, step } = useMultiStepFormContext();
  return (
    <div className={styles.main}>
      <ThankIcon />
      <Htag size="h1" text="Thank you!" />
      <Ptag text="Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com." />
    </div>
  );
}
