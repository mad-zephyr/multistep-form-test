import { FC } from "react";
import { ButtonProps } from "./button.props";

import styles from "./button.module.sass";

import cn from "classnames";

export const Button: FC<ButtonProps> = ({ text, variant, ...props }) => {
  return (
    <button
      className={cn(styles.main, {
        [styles.ghost]: variant === "ghost",
        [styles.primary]: variant === "primary",
        [styles.submit]: variant === "submit",
      })}
      {...props}
    >
      {text}
    </button>
  );
};
