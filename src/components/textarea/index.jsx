import React from "react";
import styles from "./styles.module.scss";
const TextArea = ({ ...props }) => {
  return <textarea className={styles.textarea} {...props} rows={4} />;
};

export { TextArea };
