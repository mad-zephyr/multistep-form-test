import { CheckboxHorizontal } from "@/components/ui";
import { Field, useFormikContext } from "formik";
import { FC } from "react";

import styles from "./selected-plan-form.module.sass";
import { FormPropsData } from "@/modules/multi-step-form/components/form-body/form-body";
import { showPriceBaseOnPlan } from "@/helpers/showPriceBaseOnPlan";

const PLAN_DATA = [
  {
    name: "services.online",
    label: "Online service",
    title: "Access to multiplayer games",
    price: 1,
  },
  {
    name: "services.storage",
    label: "Larger storage",
    title: "Extra 1TB of cloud save",
    price: 2,
  },
  {
    name: "services.costumizable",
    label: "Customizable profile",
    title: "Custom theme on your profile",
    price: 2,
  },
];

export function SelectedPlanForm(): JSX.Element {
  const { values } = useFormikContext<FormPropsData>();

  return (
    <div className={styles.main}>
      {PLAN_DATA.map((data) => (
        <Field
          key={data.name}
          name={data.name}
          type="checkbox"
          icon={"check"}
          icon_fill="#ffffff"
          label={data.label}
          title={data.title}
          price={showPriceBaseOnPlan(values["monthly"], data.price)}
          component={CheckboxHorizontal}
        />
      ))}
    </div>
  );
}
