import React from "react";
import { Post } from "../../types/community";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { addComment } from "../../store/postsSlice";
import CommentThread from "./CommentThread";
import CommentForm from "./CommentForm";
import { formatDate } from "../../utils/formatDate";
import "./PostCard.css";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const dispatch = useAppDispatch();

  const handleAddComment = (author: string, text: string) => {
    dispatch(addComment({ postId: post.id, author, text }));
  };

  return (
    <article className="post-card">
      <div className="post-header">
        <span className="post-author">{post.author}</span>
        <span className="post-date">{formatDate(post.createdAt)}</span>
      </div>

      <h2 className="post-title">{post.title}</h2>
      <p className="post-body">{post.body}</p>

      <div className="post-comments-section">
        <h3 className="comments-heading">
          Comments ({post.comments.length})
        </h3>

        {}
        {post.comments.map((comment) => (
          <CommentThread key={comment.id} comment={comment} postId={post.id} />
        ))}

        {}
        <div className="add-comment">
          <CommentForm onSubmit={handleAddComment} />
        </div>
      </div>
    </article>
  );
};

export default PostCard;
