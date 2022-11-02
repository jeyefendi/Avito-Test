import React from "react";
import { useQuery } from "react-query";
import { getSingleComment } from "../../services/api";
import { mapTime } from "../../services/mapTime";

const Comment = ({ commentId }) => {
  const {
    isLoading,
    data: comment,
    isError,
    error,
  } = useQuery(["comment", commentId], () => getSingleComment(commentId));

  if (isLoading) {
    return <h2 className="mx-16 my-8">Loading...</h2>;
  }

  if (isError) {
    return <h2 className="mx-16 my-8">{error.message}</h2>;
  }

  return (
    comment && (
      <>
        <hr />
        <div className="m-2 w-full">
          <div className="m-2">
            <span>👤 {comment.by}</span>
            <time dateTime={comment.time}>🕑 {mapTime(comment.time)}</time>
          </div>
          <h3>{comment.text}</h3>
        </div>
      </>
    )
  );
};

export default Comment;
