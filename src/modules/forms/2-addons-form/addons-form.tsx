import { RadioBtn } from "@/components/ui";
import { FormPropsData } from "@/modules/multi-step-form/components/form-body/form-body";
import { Field, useFormikContext } from "formik";
import { FC } from "react";

import cn from "classnames";

import styles from "./addons-form.module.sass";
import { RadioDecor } from "@/components/ui";
import { showPriceBaseOnPlan } from "@/helpers/showPriceBaseOnPlan";

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

export function AddonsForm(): JSX.Element {
  const { values } = useFormikContext<FormPropsData>();

  const monthlyPlan = !!values["monthly"];

  return (
    <>
      <div className={styles.main} id={"plans"}>
        {ADDONS.map((addon) => (
          <Field
            type="radio"
            key={addon.name + addon.value}
            value={addon.value}
            name={addon.name}
            icon={addon.icon}
            icon_fill={addon.icon_fill}
            label={addon.label}
            price={showPriceBaseOnPlan(monthlyPlan, addon.price)}
            subtitle={monthlyPlan && addon.subtitle}
            component={RadioDecor}
          />
        ))}
      </div>
      <div className={styles.footer}>
        <span className={cn({ [styles.checked]: !monthlyPlan })}>Monthly</span>
        <Field name={"monthly"} type="checkbox" component={RadioBtn} />
        <span className={cn({ [styles.checked]: monthlyPlan })}>Yearly</span>
      </div>
    </>
  );
}
