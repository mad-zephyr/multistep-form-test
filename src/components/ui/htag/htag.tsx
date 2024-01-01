import { FC } from "react";
import { HtagProps } from "./htag.props";

import styles from "./htag.module.sass";

export const Htag: FC<HtagProps> = ({ text, size, ...props }) => {
  switch (size) {
    case "h1": {
      return (
        <h1 className={styles.h1} {...props}>
          {text}
        </h1>
      );
    }

    case "h2": {
      return (
        <h2 className={styles.h2} {...props}>
          {text}
        </h2>
      );
    }

    case "h3": {
      return (
        <h3 className={styles.h3} {...props}>
          {text}
        </h3>
      );
    }

    default: {
      return (
        <h4 className={styles.h4} {...props}>
          {text}
        </h4>
      );
    }
  }
};
