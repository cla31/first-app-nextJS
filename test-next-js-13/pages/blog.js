import { Layout } from '@/components/layout'
// Pour accéder à chacun des éléments
import Link from 'next/link'

const Blog = () => {
  return (
    <Layout>
      <h1>Blog</h1>
      {/* Création d'une liste de billets par technos */}
      <ul>
        <li>
          {/* as définit le titre dynamiquement */}
          {/* J'ai rajouté legacyBehavior sinon cela me renvoit une erreur */}
          <Link legacyBehavior href="/blog/[titre]" as={'/blog/react'}>
            <a>React</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/blog/[titre]" as={'/blog/angular'}>
            <a>Angular</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/blog/[titre]" as={'/blog/vue'}>
            <a>Vue JS</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/blog/[titre]" as={'/blog/svelte'}>
            <a>Svelte</a>
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export default Blog
