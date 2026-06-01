import Perfil from '../components/Perfil'
import { integrantes } from '../data/integrantes'

function PageSeba() {
  const seba = integrantes.find(i => i.id === 'seba')
  return <Perfil integrante={seba} />
}

export default PageSeba