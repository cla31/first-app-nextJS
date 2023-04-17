import { Layout } from '@/components/layout'
// Pour accéder à chacun des éléments
import Link from 'next/link'

const PostLink = ({ titre }) => (
  <li>
    <Link legacyBehavior href={`/blog/${titre}`}>
      <a>{titre}</a>
    </Link>
  </li>
)

const Blog = () => {
  return (
    <Layout>
      <h1>Blog</h1>
      {/* Création d'une liste de billets par technos */}
      <ul>
        <PostLink titre="React" />
        <PostLink titre="Angular" />
        <PostLink titre="Vue JS" />
        <PostLink titre="Svelte" />
        <PostLink titre="Apprendre Next JS" />
      </ul>
    </Layout>
  )
}

export default Blog
