/**
 * Mock data that populates the community page on first load.
 * Demonstrates posts with flat and nested comments.
 */

import { Post } from "../types/community";

export const mockPosts: Post[] = [
  {
    id: "post-1",
    author: "Alice",
    title: "Welcome to the Community!",
    body: "Hey everyone! This is our new community forum. Feel free to introduce yourself and share your thoughts.",
    createdAt: "2026-03-15T10:00:00Z",
    comments: [
      {
        id: "comment-1",
        author: "Bob",
        text: "Great to be here! Looking forward to the discussions.",
        createdAt: "2026-03-15T11:00:00Z",
        replies: [
          {
            id: "comment-1-1",
            author: "Alice",
            text: "Welcome, Bob! Glad you joined us.",
            createdAt: "2026-03-15T11:30:00Z",
            replies: [],
          },
        ],
      },
      {
        id: "comment-2",
        author: "Charlie",
        text: "Nice initiative! Is there a specific topic for this forum?",
        createdAt: "2026-03-15T12:00:00Z",
        replies: [],
      },
    ],
  },
  {
    id: "post-2",
    author: "Diana",
    title: "Tips for Learning TypeScript",
    body: "I've been learning TypeScript for a few months now. Here are some tips that helped me: start with strict mode, use interfaces over types when possible, and practice with small projects.",
    createdAt: "2026-03-16T09:00:00Z",
    comments: [
      {
        id: "comment-3",
        author: "Eve",
        text: "Thanks for sharing! I'd also recommend reading the official handbook.",
        createdAt: "2026-03-16T10:00:00Z",
        replies: [
          {
            id: "comment-3-1",
            author: "Frank",
            text: "The handbook is great. Also check out Matt Pocock's tutorials.",
            createdAt: "2026-03-16T10:30:00Z",
            replies: [
              {
                id: "comment-3-1-1",
                author: "Diana",
                text: "Yes! Matt Pocock's content is excellent for intermediate learners.",
                createdAt: "2026-03-16T11:00:00Z",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "post-3",
    author: "Grace",
    title: "What's your favorite React state management library?",
    body: "I've tried Context API, Redux, Zustand, and Jotai. Curious what everyone else prefers and why.",
    createdAt: "2026-03-17T14:00:00Z",
    comments: [
      {
        id: "comment-4",
        author: "Hank",
        text: "Redux Toolkit all the way. The dev tools are unmatched.",
        createdAt: "2026-03-17T15:00:00Z",
        replies: [],
      },
    ],
  },
];
