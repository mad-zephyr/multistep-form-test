import { FC } from "react";

import styles from "./step.module.sass";
import { StepProps } from "./step.props";

import cn from "classnames";

export const Step: FC<StepProps> = ({ title, subtitle, index, filled }) => {
  return (
    <div className={styles.main}>
      <div
        className={cn(styles.index, {
          [styles.index_active]: filled,
        })}
      >
        {index}
      </div>
      <div className={styles.wrapper}>
        <div className={styles.subtitle}>{subtitle}</div>
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  );
};
