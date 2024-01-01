"use client";

import { ReactElement } from "react";
import cn from "classnames";

import styles from "./input.module.sass";
import { InputProps } from "./input.props";

export function Input<T>({
  field,
  form,
  id,
  label,
  ...props
}: InputProps<T>): ReactElement {
  const { errors, touched } = form;
  const hasErrors = !!(touched?.[id] && errors[id]);
  const error = errors[id]?.toString();

  return (
    <label
      htmlFor={id}
      className={cn(styles.main, {
        [styles.errors]: hasErrors,
      })}
    >
      <div className={styles.descriptor}>
        <span className={styles.title}>{label}</span>
        {hasErrors && <span className={styles.error}>{error}</span>}
      </div>
      <input {...field} {...props} />
    </label>
  );
}
