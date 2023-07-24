import React from "react";
import styles from "./styles.module.scss";
import { TextArea } from "../textarea";
import { Button } from "../button";
const NewCommentEditor = ({ isReply = false, image, alt }) => {
  return (
    <div className={styles.newCommentEditor}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={alt} />
      </div>
      <TextArea placeholder="Add a comment..." />
      <Button variant="primary">{isReply ? "Reply" : "Send"}</Button>
    </div>
  );
};

export { NewCommentEditor };
