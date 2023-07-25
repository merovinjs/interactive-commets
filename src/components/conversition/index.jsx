import React from "react";
import styles from "./styles.module.scss";
import { Comment } from "../comment";
import { NewCommentEditor } from "../new-comment-editor";
import Data from "../../../data.json";
import { CommentProvider } from "../comment/useComment";
const Conversition = () => {
  const [comments, setComments] = React.useState(Data.comments);

  const handleNewComment = (newComment) => {
    setComments([
      ...comments,
      {
        content: newComment,
        createdAt: new Date().toLocaleDateString(),
        id: Math.floor(Math.random() * 100),
        user: Data.currentUser,
        score: 0,
      },
    ]);
  };

  return (
    <div className={styles.conversitionWrapper}>
      {comments.map((comment) => (
        <CommentProvider
          key={comment.id}
          data={{ comment, currentUser: Data.currentUser }}
        >
          <Comment />
        </CommentProvider>
      ))}

      <NewCommentEditor
        onClick={handleNewComment}
        image={Data.currentUser.image.png}
        alt={Data.currentUser.username}
      />
    </div>
  );
};

export { Conversition };
