import React from "react";
import { Reactions } from "./reactions";
import { Body } from "./body";
import { Header } from "./header";
import styles from "./styles.module.scss";
const Comment = () => {
  return (
    <div className={styles.commentWrapper}>
      <Reactions />
      <div className={styles.commentContentArea}>
        <Body />
        <Header />
      </div>
    </div>
  );
};
export { Comment };
