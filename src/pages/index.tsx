import { ReactNode } from 'react'
import { ArticlesFactory } from '../models/post'
import ArticlePreview from './_components/ArticlePreview'

const Nav = ({ children }: { children: ReactNode }) => {
  return <ul className="border-b flex">{children}</ul>
}

const NavPill = () => {
  return (  
    <li className="px-4 py-2 text-primary text-sm border-b-2 border-primary">
      Global Feed
    </li>
  )
}

// const ArticlePreview = () => {
//   return (
//     <div className="py-6 border-b">
//       <div className="flex justify-between items-start mb-4">
//         <div className="flex items-center">
//           <img
//             className="rounded-full"
//             src="https://api.realworld.io/images/demo-avatar.png"
//           />
//           <div className="ml-2">
//             <span className="text-primary text-sm font-medium block leading-tight">
//               Mateus Wilding
//             </span>
//             <span className="text-slate-400 text-xs block">
//               December 9, 2022
//             </span>
//           </div>
//         </div>
//         <button className="text-xs text-green-600 border border-green-600 rounded-sm py-0.5 px-2">
//           &hearts; 415
//         </button>
//       </div>
//       <h1 className="text-xl font-bold text-gray-700 mb-1">
//         If we quantify the alarm, we can get to the FTP pixel through the online
//         SSL interface!
//       </h1>
//       <p className="text-sm text-gray-400 font-light mb-4">
//         Omnis perspiciatis qui quia commodi sequi modi. Nostrum quam aut
//         cupiditate est facere omnis possimus. Tenetur similique nemo illo soluta
//         molestias facere quo. Ipsam totam facilis delectus nihil quidem soluta
//         vel est omnis.
//       </p>
//       <div className="flex justify-between">
//         <span className="text-gray-400 text-xs font-light">Read more...</span>
//         <div className="flex gap-1">
//           <span className="px-2 rounded-full border text-xs text-gray-400 font-light">
//             coding
//           </span>
//           <span className="px-2 rounded-full border text-xs text-gray-400 font-light">
//             js
//           </span>
//           <span className="px-2 rounded-full border text-xs text-gray-400 font-light">
//             blog
//           </span>
//         </div>
//       </div>
//     </div>
//   )
// }

export default function Posts() {
  const articles = ArticlesFactory()

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
            {articles.map((article) => )}
            <ArticlePreview author={undefined} date={undefined} title={''} description={''} favoriteCount={0} tags={[]}></ArticlePreview>
            <ArticlePreview></ArticlePreview>
            <ArticlePreview></ArticlePreview>
            <ArticlePreview></ArticlePreview>
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
  )
}
