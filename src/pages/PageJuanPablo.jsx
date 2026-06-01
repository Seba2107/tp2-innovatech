import Perfil from '../components/Perfil'
import { integrantes } from '../data/integrantes'

function PageJuanPablo() {
  const juanpablo = integrantes.find(i => i.id === 'juanpablo')
  return <Perfil integrante={juanpablo} />
}

export default PageJuanPablo