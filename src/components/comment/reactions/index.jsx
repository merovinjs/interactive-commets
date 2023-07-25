import React from "react";
import { Button } from "../../button";
import styles from "./styles.module.scss";
import { useComment } from "../useComment";
const Reactions = () => {
  const {
    negativeReactions,
    positiveReactions,
    comment: { score },
  } = useComment();

  return (
    <div className={styles.reactionsWrapper}>
      <Button onClick={positiveReactions}>
        <img src="./images/icon-plus.svg" alt="plusIcon" />
      </Button>
      <p>{score}</p>
      <Button onClick={negativeReactions}>
        <img src="./images/icon-minus.svg" alt="plusIcon" />
      </Button>
    </div>
  );
};

export { Reactions };
