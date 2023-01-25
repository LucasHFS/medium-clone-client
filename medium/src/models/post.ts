import Author from "./author";

interface Post {
  author: Author;
  date: Date;
  title: string;
  content: string;
  description: string;
  favoriteCount: number;
  tags: string[];
}

export default Post;
