import Author from "./author";

export interface Article {
  author: Author;
  date: Date;
  title: string;
  content: string;
  description: string;
  favoriteCount: number;
  tags: string[];
}

export const ArticlesFactory = (): Article[]  => {
  return [
    {
      author: {
        avatarUrl: "",
        name: 'Mateus Wilding'
      },
      date: new Date(),
      title: 'If we quantify the alarm, we can get to the FTP pixel through the online SSL interface!',
      description: 'Omnis perspiciatis qui quia commodi sequi modi. Nostrum quam aut cupiditate est facere omnis possimus. Tenetur similique nemo illo soluta molestias facere quo. Ipsam totam facilis delectus nihil quidem soluta vel est omnis.',
      content: '',
      favoriteCount: 415,
      tags: ["coding", "js", "blog"]
    },
    {
      author: {
        avatarUrl: "",
        name: 'Mateus Wilding'
      },
      date: new Date(),
      title: 'Try to transmit the HTTP card, maybe it will override the multi-byte hard drive!',
      description: 'Assumenda molestiae laboriosam enim ipsum quaerat enim officia vel quo. Earum odit rem natus totam atque cumque. Sint dolorem facere non.',
      content: '',
      favoriteCount: 415,
      tags: ["coding", "js", "blog"]
    }
  ]
}
