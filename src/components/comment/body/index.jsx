import React from "react";
import styles from "./styles.module.scss";
import { useComment } from "../../comment/useComment";
import { TextArea } from "../../textarea";
import { Button } from "../../button";
import { useState } from "react";
const Body = () => {
  const {
    comment: { content, replyingTo },
    onUpdate,
    isEdit,
  } = useComment();
  const [comment, setComment] = useState(content);

  const handleComment = (e) => {
    setComment(e.target.value);
  };
  const handleUpdate = () => {
    onUpdate(comment);
  };

  return (
    <div>
      {isEdit ? (
        <>
          <TextArea value={comment} onChange={handleComment} />
          <Button onClick={handleUpdate} variant="primary">
            UPDATE
          </Button>
        </>
      ) : (
        <p className={styles.content}>
          {replyingTo && (
            <span className={styles.replyingTo}>@{replyingTo}</span>
          )}

          {content}
        </p>
      )}
    </div>
  );
};

export { Body };
