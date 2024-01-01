import { FieldProps, FormikErrors } from "formik";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface CustomInputProps<T>
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  values: T;
  label: string;
  errors: FormikErrors<T>;
}

export type InputProps<T> = FieldProps & CustomInputProps<T>;
