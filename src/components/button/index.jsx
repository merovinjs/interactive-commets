import React from "react";
import styles from "./styles.module.scss";
const Button = ({ children, ...props }) => {
  return (
    <button variant="ghost" className={styles.button} {...props}>
      {children}
    </button>
  );
};

export { Button };
