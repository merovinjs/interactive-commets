import React from "react";
import { useMemo } from "react";
import { useContext } from "react";
import { createContext } from "react";

const CommentContext = createContext();

function CommentProvider({ children, data }) {
  const [isReply, setIsReply] = React.useState(false);
  const [comment, setComment] = React.useState(data.comment);

  const onReply = () => {
    setIsReply(!isReply);
  };
  const onDelete = () => {
    setComment(null);
  };

  const contextData = useMemo(
    () => ({
      isReply,
      onReply,
      onDelete,
      comment,
      currentUser: data.currentUser,
    }),
    [isReply, comment]
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
