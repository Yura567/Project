import React from "react";
import { useAppSelector } from "../hooks/useAppDispatch";
import CreatePostForm from "../components/community/CreatePostForm";
import PostCard from "../components/community/PostCard";
import "./CommunityPage.css";

const CommunityPage: React.FC = () => {
  const posts = useAppSelector((state) => state.posts.posts);

  return (
    <div className="community-page">
      <header className="community-header">
        <h1>Community Forum</h1>
        <p>Share ideas, ask questions, and discuss with others.</p>
      </header>

      <main className="community-content">
        <CreatePostForm />

        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}

        {posts.length === 0 && (
          <p className="no-posts">No posts yet. Be the first to create one!</p>
        )}
      </main>
    </div>
  );
};

export default CommunityPage;
