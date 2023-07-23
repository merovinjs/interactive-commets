import React from "react";
import styles from "./styles.module.scss";
import { TextArea } from "../textarea";
import { Button } from "../button";
const NewCommentEditor = ({ image, alt }) => {
  return (
    <div className={styles.newCommentEditor}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={alt} />
      </div>
      <TextArea placeholder="Add a comment..." />
      <Button variant="primary">Post</Button>
    </div>
  );
};

export { NewCommentEditor };
