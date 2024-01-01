import { FC } from "react";
import { PtagProps } from "./ptag.props";

import styles from "./ptag.module.sass";

export const Ptag: FC<PtagProps> = ({ text }) => {
  return <p className={styles.main}>{text}</p>;
};
