import { Article }  from '@/models/post'

type ArticlePreviewProps = Omit< Article, 'content' >

const ArticlePreview = ({author, date , title, description, tags, favoriteCount}: ArticlePreviewProps) => {
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
              Mateus Wilding
            </span>
            <span className="text-slate-400 text-xs block">
              December 9, 2022
            </span>
          </div>
        </div>
        <button className="text-xs text-green-600 border border-green-600 rounded-sm py-0.5 px-2">
          &hearts; 415
        </button>
      </div>
      <h1 className="text-xl font-bold text-gray-700 mb-1">
        If we quantify the alarm, we can get to the FTP pixel through the online
        SSL interface!
      </h1>
      <p className="text-sm text-gray-400 font-light mb-4">
        Omnis perspiciatis qui quia commodi sequi modi. Nostrum quam aut
        cupiditate est facere omnis possimus. Tenetur similique nemo illo soluta
        molestias facere quo. Ipsam totam facilis delectus nihil quidem soluta
        vel est omnis.
      </p>
      <div className="flex justify-between">
        <span className="text-gray-400 text-xs font-light">Read more...</span>
        <div className="flex gap-1">
          <span className="px-2 rounded-full border text-xs text-gray-400 font-light">
            coding
          </span>
          <span className="px-2 rounded-full border text-xs text-gray-400 font-light">
            js
          </span>
          <span className="px-2 rounded-full border text-xs text-gray-400 font-light">
            blog
          </span>
        </div>
      </div>
    </div>
  )
}


export default ArticlePreview