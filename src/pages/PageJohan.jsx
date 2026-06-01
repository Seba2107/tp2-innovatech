import Perfil from '../components/Perfil'
import { integrantes } from '../data/integrantes'

function PageJohan() {
  const johan = integrantes.find(i => i.id === 'johan')
  return <Perfil integrante={johan} />
}

export default PageJohan