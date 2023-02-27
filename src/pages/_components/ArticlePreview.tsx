import { Article } from "@/models/article";

type ArticlePreviewProps = Omit<Article, "content" | "body" | "slug" | "favorited">;

const ArticlePreview = ({
  author,
  createdAt,
  title,
  description,
  tagList,
  favoritesCount,
}: ArticlePreviewProps) => {
  return (
    <div className="py-6 border-b">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <img
            className="rounded-full"
            src="https://api.realworld.io/images/demo-avatar.png"
          />
          <div className="ml-2">
            <span className="text-primary text-sm font-medium block leading-tight">
              {author.name}
            </span>
            <span className="text-slate-400 text-xs block">{createdAt}</span>
          </div>
        </div>
        <button className="text-xs text-green-600 border border-green-600 rounded-sm py-0.5 px-2">
          &hearts; {favoritesCount}
        </button>
      </div>
      <h1 className="text-xl font-bold text-gray-700 mb-1">{title}</h1>
      <p className="text-sm text-gray-400 font-light mb-4">{description}</p>
      <div className="flex justify-between">
        <span className="text-gray-400 text-xs font-light">Read more...</span>
        <div className="flex gap-1">
          {tagList.map((tag) => (
            <span className="px-2 rounded-full border text-xs text-gray-400 font-light">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
