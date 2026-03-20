import React, { useState } from "react";
import { Comment } from "../../types/community";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { addReply } from "../../store/postsSlice";
import CommentForm from "./CommentForm";
import { formatDate } from "../../utils/formatDate";
import "./CommentThread.css";

interface CommentThreadProps {
  comment: Comment;
  postId: string;
}

const CommentThread: React.FC<CommentThreadProps> = ({ comment, postId }) => {
  const dispatch = useAppDispatch();
  const [showReplyForm, setShowReplyForm] = useState(false);

  const handleReply = (author: string, text: string) => {
    dispatch(
      addReply({
        postId,
        parentCommentId: comment.id,
        author,
        text,
      })
    );
    setShowReplyForm(false);
  };

  return (
    <div className="comment-thread">
      <div className="comment-bubble">
        <div className="comment-header">
          <span className="comment-author">{comment.author}</span>
          <span className="comment-date">{formatDate(comment.createdAt)}</span>
        </div>
        <p className="comment-text">{comment.text}</p>
        <button
          className="reply-button"
          onClick={() => setShowReplyForm(!showReplyForm)}
        >
          {showReplyForm ? "Cancel" : "Reply"}
        </button>
      </div>

      {showReplyForm && (
        <CommentForm
          onSubmit={handleReply}
          submitLabel="Reply"
          onCancel={() => setShowReplyForm(false)}
        />
      )}

      {}
      {comment.replies.length > 0 && (
        <div className="comment-replies">
          {comment.replies.map((reply) => (
            <CommentThread key={reply.id} comment={reply} postId={postId} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentThread;
