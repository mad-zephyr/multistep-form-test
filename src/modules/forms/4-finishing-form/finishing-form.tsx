import { FC } from "react";
import { useFormikContext } from "formik";

import styles from "./finishing-form.module.sass";
import { FormPropsData } from "@/modules/multi-step-form/components/form-body/form-body";
import { FINISH_FORM_MAP as FFM } from "./finish-form-map";
import { showPriceBaseOnPlan } from "@/helpers/showPriceBaseOnPlan";
import { useMultiStepFormContext } from "@/context/multistep-form-context";

export function FinishingForm({}): JSX.Element {
  const { goToStep } = useMultiStepFormContext();
  const { values } = useFormikContext<FormPropsData>();

  const time_unit = values.monthly ? "year" : "month";
  const yearly = !!values.monthly;

  const getServiceName = (service: string) => {
    return FFM[service].title;
  };

  const handleGoToStep = () => {
    goToStep(1);
  };

  const checkedServices = Object.keys(values.services).filter(
    (service) => values.services[service as keyof FormPropsData["services"]]
  );

  const isServicesExists = checkedServices.length > 0;

  const calculateTotalPrice = (): string => {
    const allServices = [values.plans, ...checkedServices].reduce(
      (prevValue, currentValue) => prevValue + FFM[currentValue].price,
      0
    );

    return showPriceBaseOnPlan(yearly, allServices);
  };

  const total = calculateTotalPrice();

  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <div>
            <div
              className={styles.title}
            >{`${values.plans} (${time_unit}ly)`}</div>
            <div
              role="button"
              onClick={handleGoToStep}
              className={styles.subtitle}
            >
              Change
            </div>
          </div>
          <div className={styles.price}>
            {showPriceBaseOnPlan(yearly, FFM[values.plans].price)}
          </div>
        </div>

        {isServicesExists && <hr />}

        <div className={styles.wrapper_row}>
          {checkedServices.map((service) => (
            <div key={service} className={styles.row}>
              <div className={styles.subtitle}>{getServiceName(service)}</div>
              <div className={styles.sub_price}>
                {showPriceBaseOnPlan(yearly, FFM[service].price)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.row}>
          <div className={styles.subtitle}>Total (per {time_unit})</div>
          <div className={styles.total}>{total}</div>
        </div>
      </div>
    </div>
  );
}
