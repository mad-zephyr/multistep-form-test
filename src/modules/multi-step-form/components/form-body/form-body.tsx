import { FC } from "react";

import styles from "./form-body.module.sass";
import { Form } from "formik";
import { useMultiStepFormContext } from "@/context/multistep-form-context";

export type FormPropsData = {
  name: string;
  email: string;
  phone: string;
  monthly: boolean;
  plans: string;
  services: {
    online: boolean;
    storage: boolean;
    costumizable: boolean;
  };
};

export const FormBody: FC = () => {
  const { FormStep } = useMultiStepFormContext();

  return (
    <Form className={styles.form}>
      <FormStep />
    </Form>
  );
};
