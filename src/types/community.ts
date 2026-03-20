export interface Comment {
  id: string;
  author: string;
  text: string;
  createdAt: string;
  replies: Comment[];
}

export interface Post {
  id: string;
  author: string;
  title: string;
  body: string;
  createdAt: string;
  comments: Comment[];
}
