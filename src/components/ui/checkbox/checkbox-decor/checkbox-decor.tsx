import { CheckboxDecorProps } from "./checkbox-decor.props";

import styles from "./checkbox-decor.module.sass";
import { Icon } from "@/components/icon/icon";

export function RadioDecor<T>({
  field,
  form,
  name,
  id,
  icon,
  icon_fill,
  label,
  price,
  subtitle,
  value,
  ...props
}: CheckboxDecorProps<T>) {
  return (
    <label htmlFor={name} className={styles.main}>
      <Icon fill={icon_fill} name={icon} />
      <div className={styles.wrapper}>
        <div>{label}</div>
        <div>{price}</div>
        {subtitle && <div>{subtitle}</div>}
      </div>
      <input checked={value == name} {...field} {...props} />
    </label>
  );
}
