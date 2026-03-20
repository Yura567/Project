import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post, Comment } from "../types/community";
import { mockPosts } from "../data/mockData";

interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: mockPosts,
};

const addReplyToComment = (
  comments: Comment[],
  parentId: string,
  newReply: Comment
): boolean => {
  for (const comment of comments) {
    if (comment.id === parentId) {
      comment.replies.push(newReply);
      return true;
    }
    if (addReplyToComment(comment.replies, parentId, newReply)) {
      return true;
    }
  }
  return false;
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<{ title: string; body: string; author: string }>) {
      const newPost: Post = {
        id: `post-${Date.now()}`,
        author: action.payload.author,
        title: action.payload.title,
        body: action.payload.body,
        createdAt: new Date().toISOString(),
        comments: [],
      };
      state.posts.unshift(newPost);
    },

    addComment(
      state,
      action: PayloadAction<{ postId: string; author: string; text: string }>
    ) {
      const post = state.posts.find((p) => p.id === action.payload.postId);
      if (!post) return;

      const newComment: Comment = {
        id: `comment-${Date.now()}`,
        author: action.payload.author,
        text: action.payload.text,
        createdAt: new Date().toISOString(),
        replies: [],
      };
      post.comments.push(newComment);
    },

    addReply(
      state,
      action: PayloadAction<{
        postId: string;
        parentCommentId: string;
        author: string;
        text: string;
      }>
    ) {
      const post = state.posts.find((p) => p.id === action.payload.postId);
      if (!post) return;

      const newReply: Comment = {
        id: `reply-${Date.now()}`,
        author: action.payload.author,
        text: action.payload.text,
        createdAt: new Date().toISOString(),
        replies: [],
      };
      addReplyToComment(post.comments, action.payload.parentCommentId, newReply);
    },
  },
});

export const { addPost, addComment, addReply } = postsSlice.actions;
export default postsSlice.reducer;
