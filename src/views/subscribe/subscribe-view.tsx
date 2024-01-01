import { MultiStepForm } from "@/modules";
import { FC } from "react";

import styles from "./subscribe-view.module.sass";

export const SubscribeView: FC = () => {
  return (
    <div className={styles.main}>
      <MultiStepForm />
    </div>
  );
};
