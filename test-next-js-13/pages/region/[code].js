import { useRouter } from 'next/router'
import axios from 'axios'

// const CodeRegion = ({ data }) => {
//   // const router = useRouter()
//   // console.log('code', code)
//   return <div>{JSON.stringify(data)}</div>
// }
// export async function getSrverSideProps(context) {
//   const code = context.params.code
//   const url = 'https://geo.api.gouv.fr'
//   const { data } = await axios.get(url + '/regions/' + code)
//   return {
//     props: {
//       data,
//     },
//   }
// }

const CodeRegion = ({ data }) => {
  // const router = useRouter()
  // console.log('code', code)
  // return <div>{JSON.stringify(data)}</div>
  return (
    <div>
      <h1>Region: {data.nom}</h1>
      <p>Code: {data.code}</p>
    </div>
  )
}
export async function getServerSideProps(context) {
  const code = context.params.code
  const url = 'https://geo.api.gouv.fr'
  const { data } = await axios.get(url + '/regions/' + code)
  return {
    props: {
      data,
    },
  }
}
export default CodeRegion
