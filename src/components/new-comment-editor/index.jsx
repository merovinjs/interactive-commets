import React from "react";
import styles from "./styles.module.scss";
import { TextArea } from "../textarea";
import { Button } from "../button";
import { useState } from "react";
const NewCommentEditor = ({ isReply = false, image, alt, onClick }) => {
  const [comment, setComment] = useState("");
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handleClick = () => {
    onClick(comment);
  };
  return (
    <div className={styles.newCommentEditor}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={alt} />
      </div>
      <TextArea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Add a comment..."
      />
      <Button onClick={handleClick} variant="primary">
        {isReply ? "Reply" : "Send"}
      </Button>
    </div>
  );
};

export { NewCommentEditor };
