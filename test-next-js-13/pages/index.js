import { Layout } from '@/components/layout'
import { Inter } from 'next/font/google'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

const Home = ({ data }) => {
  const styles = {
    padding: 10,
    margin: 10,
    borderBottom: '1px solid #DDD',
  }
  return (
    <Layout>
      <h1>Bonjour</h1>
      {/* {JSON.stringify(data)} */}
      {data.map((region, index) => (
        <div key={`${region}-${index}`} style={styles}>
          <h1>{region.nom}</h1>
          <p>{region.code}</p>
        </div>
      ))}
    </Layout>
  )
}
export async function getServerSideProps(context) {
  const url = 'https://geo.api.gouv.fr'
  const { data } = await axios.get(url + '/regions')
  return {
    props: {
      data,
    },
  }
}
export default Home
