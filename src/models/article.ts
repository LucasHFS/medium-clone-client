import Author from "./author";

export interface Article {
  slug: string;
  body: string;
  author: Author;
  title: string;
  content?: string;
  description: string;
  tagList: string[];
  createdAt: string;
  favorited: boolean;
  favoritesCount: number;
}

export const ArticlesFactory = (): Article[] => {
  return [
    {
      slug: "how-to-train-your-dragon",
      title: "How to train your dragon",
      description: "Ever wonder how?",
      body: "It takes a Jacobian",
      tagList: ["dragons", "training"],
      createdAt: "2016-02-18T03:22:56.637Z",
      favorited: false,
      favoritesCount: 2,
      author: {
        name: "jake",
        bio: "I work at statefarm",
        image: "https://i.stack.imgur.com/xHWG8.jpg",
        following: false,
      },
    },
    {
      slug: "how-to-train-your-dragon-2",
      title: "How to train your dragon 2",
      description: "So toothless",
      body: "It a dragon",
      tagList: ["dragons", "training"],
      createdAt: "2016-02-18T03:22:56.637Z",
      favorited: false,
      favoritesCount: 1,
      author: {
        name: "jake",
        bio: "I work at statefarm",
        image: "https://i.stack.imgur.com/xHWG8.jpg",
        following: false,
      },
    },
  ];
};
