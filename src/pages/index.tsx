import { ReactNode } from "react";
import { ArticlesFactory } from "../models/article";
import ArticlePreview from "./_components/ArticlePreview";

const Nav = ({ children }: { children: ReactNode }) => {
  return <ul className="border-b flex">{children}</ul>;
};

const NavPill = () => {
  return (
    <li className="px-4 py-2 text-primary text-sm border-b-2 border-primary">
      Global Feed
    </li>
  );
};

export default function Posts() {
  const articles = ArticlesFactory();

  return (
    <div className="flex-1">
      <div className="p-8 text-center bg-primary text-white">
        <h1 className="text-5xl font-bold mb-3">medium</h1>
        <p className="text-xl font-light">A place to share knowledge</p>
      </div>
      <div className="container mx-auto mt-7 row">
        <div className="flex items-start">
          <div className="w-3/4 mr-4">
            <Nav>
              <NavPill></NavPill>
            </Nav>
            {articles.map((article) => (
              <ArticlePreview
                title={article.title}
                author={article.author}
                createdAt={article.createdAt}
                description={article.description}
                favoritesCount={article.favoritesCount}
                tagList={article.tagList}
                key={article.slug}
                
              />
            ))}
          </div>
          <div className="w-1/4 bg-gray-100 ml-4 px-2 py-4 rounded-sm">
            <p className="text-sm text-gray-900">Popular Tags</p>
            <span className="px-2 pb-1 rounded-full text-xs text-gray-100 bg-gray-500">
              coding
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
