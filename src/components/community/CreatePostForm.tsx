import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { addPost } from "../../store/postsSlice";
import "./CreatePostForm.css";

const CreatePostForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !body.trim() || !author.trim()) return;

    dispatch(addPost({ title: title.trim(), body: body.trim(), author: author.trim() }));

    setTitle("");
    setBody("");
    setAuthor("");
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button className="create-post-toggle" onClick={() => setIsOpen(true)}>
        + Create New Post
      </button>
    );
  }

  return (
    <form className="create-post-form" onSubmit={handleSubmit}>
      <h2>Create a New Post</h2>

      <label htmlFor="post-author">Your Name</label>
      <input
        id="post-author"
        type="text"
        placeholder="Enter your name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <label htmlFor="post-title">Title</label>
      <input
        id="post-title"
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="post-body">Body</label>
      <textarea
        id="post-body"
        placeholder="What's on your mind?"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={4}
      />

      <div className="form-actions">
        <button type="submit" className="btn-primary">
          Post
        </button>
        <button type="button" className="btn-secondary" onClick={() => setIsOpen(false)}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CreatePostForm;
