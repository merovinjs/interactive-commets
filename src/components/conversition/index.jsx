import React from "react";
import styles from "./styles.module.scss";
import { Comment } from "../comment";
import { NewCommentEditor } from "../new-comment-editor";
import Data from "../../../data.json";
import { CommentProvider } from "../comment/useComment";
const Conversition = () => {
  return (
    <div className={styles.conversitionWrapper}>
      {Data.comments.map((comment) => (
        <CommentProvider
          key={comment.id}
          data={{ comment, currentUser: Data.currentUser }}
        >
          <Comment />
        </CommentProvider>
      ))}

      <NewCommentEditor
        image={Data.currentUser.image.png}
        alt={Data.currentUser.username}
      />
    </div>
  );
};

export { Conversition };
