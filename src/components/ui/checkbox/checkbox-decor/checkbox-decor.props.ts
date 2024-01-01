import { FieldProps, FormikErrors } from "formik";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface CustomCheckboxDecorProps<T>
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  price: string;
  subtitle: string;

  id: string;
  values: T;
  icon: string;
  icon_fill: string;
  errors: FormikErrors<T>;
}

export type CheckboxDecorProps<T> = FieldProps & CustomCheckboxDecorProps<T>;
