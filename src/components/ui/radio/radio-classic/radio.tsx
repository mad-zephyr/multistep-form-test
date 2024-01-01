import { ReactElement } from "react";
import { RadioInputProps } from "./radio.props";

import styles from "./radio.module.sass";

export function RadioBtn<T>({
  field,
  form,
  id,
  label,
  ...props
}: RadioInputProps<T>): ReactElement {
  return (
    <label htmlFor={id} className={styles.main}>
      {label}
      <input {...field} {...props} />
      <div className={styles.wrapper}>
        <div className={styles.checker} />
      </div>
    </label>
  );
}
