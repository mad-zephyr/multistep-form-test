import { FieldProps, FormikErrors } from "formik";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface RadioBtnProps<T>
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  values: T;
  label: string;
  errors: FormikErrors<T>;
}

export type RadioInputProps<T> = FieldProps & RadioBtnProps<T>;
