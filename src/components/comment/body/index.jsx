import React from "react";
import styles from "./styles.module.scss";
import { useComment } from "../../comment/useComment";

const Body = () => {
  const {
    comment: { content, replyingTo },
  } = useComment();
  console.log(replyingTo);
  return (
    <div>
      <p className={styles.content}>
        {replyingTo && <span className={styles.replyingTo}>@{replyingTo}</span>}

        {content}
      </p>
    </div>
  );
};

export { Body };
