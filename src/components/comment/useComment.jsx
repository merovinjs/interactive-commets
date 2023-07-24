import React from "react";
import { useMemo } from "react";
import { useContext } from "react";
import { createContext } from "react";

const CommentContext = createContext();

function CommentProvider({ children, data }) {
  const [isReply, setIsReply] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);

  const [comment, setComment] = React.useState(data.comment);

  const onReply = () => {
    setIsReply(!isReply);
  };
  const onEdit = () => {
    setIsEdit(!isEdit);
  };
  const onDelete = () => {
    setComment(null);
  };

  const onUpdate = (newComment) => {
    setComment({ ...comment, content: newComment });
    onEdit();
  };

  //buraya daha sonra tekrar bak
  const onNewReply = (newComment) => {
    setComment({
      ...comment,
      replies: [
        ...(comment.replies ?? []),
        {
          content: newComment,
          createdAt: new Date().toLocaleDateString(),
          id: Math.floor(Math.random() * 100),
          user: data.currentUser,
          score: 0,
          replies: [],
          replyingTo: comment.user.username,
        },
      ],
    });

    onReply();
  };

  const contextData = useMemo(
    () => ({
      isReply,
      isEdit,
      onUpdate,
      onReply,
      onDelete,
      onNewReply,
      onEdit,
      comment,
      currentUser: data.currentUser,
    }),
    [isReply, isEdit, comment]
  );

  return (
    <CommentContext.Provider value={contextData}>
      {children}
    </CommentContext.Provider>
  );
}

function useComment() {
  const context = useContext(CommentContext);
  if (!context) {
    throw new Error("useComment must be used within a CommentProvider");
  }
  return context;
}
export { CommentProvider, useComment };
