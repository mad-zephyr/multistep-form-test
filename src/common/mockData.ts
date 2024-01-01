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

const ADDONS = [
  {
    name: "plans",
    value: "arcade",
    icon: "joystic_advanced",
    icon_fill: "#FFAF7E",
    label: "Arcade",
    price: 9,
    subtitle: "2 months free",
  },
  {
    name: "plans",
    value: "advanced",
    type: "radio",
    label: "Advanced",
    icon: "joystic_arcade",
    icon_fill: "#F9818E",
    price: 12,
    subtitle: "2 months free",
  },
  {
    name: "plans",
    value: "pro",
    type: "radio",
    label: "Pro",
    icon: "joystic_pro",
    icon_fill: "#483EFF",
    price: 15,
    subtitle: "2 months free",
  },
];

export { MOBILE_QUERY, FORM_STEPS, HEADERS, ADDONS };
