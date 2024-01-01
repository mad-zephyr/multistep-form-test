import { RadioBtn } from "@/components/ui";
import { FormPropsData } from "@/modules/multi-step-form/components/form-body/form-body";
import { Field, useFormikContext } from "formik";

import cn from "classnames";

import styles from "./addons-form.module.sass";
import { RadioDecor } from "@/components/ui";
import { showPriceBaseOnPlan } from "@/helpers/showPriceBaseOnPlan";
import { ADDONS } from "@/common/mockData";

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
