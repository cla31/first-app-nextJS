import { Layout } from '../components/layout'
import Link from 'next/link'
import { useRouter } from 'next/router'
// const PostLink = ({ titre }) => (
//   <li>
//     <Link legacyBehavior href={`/blog/${titre}`}>
//       <a>{titre}</a>
//     </Link>
//   </li>
// )
// Routes dynamiques avec des paramètres de requêtes
const PostLink = ({ titre }) => (
  <li>
    <Link legacyBehavior href={`/blog?titre=${titre}`}>
      <a>{titre}</a>
    </Link>
  </li>
)

const Blog = () => {
  const router = useRouter()
  console.log(router.query)
  return (
    <Layout>
      <h1>Blog</h1>
      {/* Création d'une liste de billets par technos */}
      <ul>
        <PostLink titre="react" />
        <PostLink titre="angular" />
        <PostLink titre="vue" />
        <PostLink titre="svelte" />
        <PostLink titre="apprendre Next js" />
      </ul>
      <h2>Affichage dynamique du titre::::</h2>
      <h1>{router.query.titre}</h1>
    </Layout>
  )
}

export default Blog
