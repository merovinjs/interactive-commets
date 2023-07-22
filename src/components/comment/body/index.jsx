import React from "react";
import styles from "./styles.module.scss";
import { useComment } from "../../comment/useComment";

const Body = () => {
  const {
    comment: { content },
  } = useComment();

  return (
    <div>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export { Body };
