import { object, string, number } from "yup";

export const StepFormValidationSchema = object().shape({
  name: string().min(5).required("Required"),
  email: string().email("Invalid email address").required("Required"),
  phone: string()
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Phone number is not valid")
    .required("Phone number is required"),
});
