import { useRouter } from 'next/router'
// Utilisation de useRouter pour passer des données entre différentes routes

const Titre = () => {
  const router = useRouter()
  console.log(router.query)
  //   Comme ci-dessous, il nous affiche la query dans le titre
  return <h1>{router.query.titre}</h1>
}

export default Titre
