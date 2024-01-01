import { Icon } from "@/components/icon/icon";
import { CheckboxHorizontalProps } from "./checkbox-horizontal.props";

import styles from "./checkbox-horizontal.module.sass";

export function CheckboxHorizontal<T>({
  field,
  form,
  id,
  icon,
  icon_fill,
  label,
  title,
  price,
  ...props
}: CheckboxHorizontalProps<T>) {
  return (
    <label htmlFor={id} className={styles.main}>
      <input {...field} {...props} />
      <div className={styles.checkbox}>
        <Icon width="12" height="12" fill={icon_fill} name={icon} />
      </div>
      <div className={styles.wrapper}>
        <div>{label}</div>
        <div>{title}</div>
      </div>
      <div>{price}</div>
    </label>
  );
}
