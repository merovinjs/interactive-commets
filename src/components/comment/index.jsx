import React from "react";

const Comment = ({ comment }) => {
  return (
    <div>
      <h2>{comment.user.username}</h2>
    </div>
  );
};

export { Comment };
