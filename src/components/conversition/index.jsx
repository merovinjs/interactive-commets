import React from "react";
import { Comment } from "../comment";
import { NewCommentEditor } from "../new-comment-editor";
import Data from "../../../data.json";
const Conversition = () => {
  return (
    <div>
      {Data.comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}

      <NewCommentEditor />
    </div>
  );
};

export { Conversition };
