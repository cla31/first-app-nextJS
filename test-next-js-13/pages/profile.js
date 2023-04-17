import { Layout } from '@/components/layout'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NameLink = ({ nom }) => (
  <li>
    <Link legacyBehavior href={`/profile?nom=${nom}`}>
      <a>{nom}</a>
    </Link>
  </li>
)
const Profile = () => {
  const router = useRouter()
  console.log(router.query)
  return (
    <Layout>
      <h1>Profile</h1>
      <ul>
        <NameLink nom="John Doe" />
        <NameLink nom="Paul" />
        <NameLink nom="Jean" />
      </ul>
      <h2>Affichage dynamique des noms::::</h2>
      <h1>{router.query.nom}</h1>
    </Layout>
  )
}

export default Profile
