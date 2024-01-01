import { FormHeaderProps } from "@/modules/multi-step-form/components/form-header/form-header.props";

const MOBILE_QUERY = "only screen and (max-width: 640px)";
const FORM_STEPS = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

const HEADERS: FormHeaderProps[] = [
  {
    title: "Personal info",
    subtitle: "Please provide your name, email address, and phone number.",
  },
  {
    title: "Select your plan",
    subtitle: "You have the option of monthly or yearly billing.",
  },
  {
    title: "Pick add-ons",
    subtitle: "Add-ons help enhance your gaming experience.",
  },
  {
    title: "Finishing up",
    subtitle: "Double-check everything looks OK before confirming.",
  },
];

export { MOBILE_QUERY, FORM_STEPS, HEADERS };
