import { FieldProps, FormikErrors } from "formik";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface CustomCheckboxHorizontalProps<T>
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  title: string;
  price: string;

  id: string;
  values: T;
  icon: string;
  icon_fill: string;
  errors: FormikErrors<T>;
}

export type CheckboxHorizontalProps<T> = FieldProps &
  CustomCheckboxHorizontalProps<T>;
