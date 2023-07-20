import React from "react";
import { useContext } from "react";
import { createContext } from "react";

const CommentContext = createContext();

function CommentProvider({ children, data }) {
  return (
    <CommentContext.Provider value={data}>{children}</CommentContext.Provider>
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
