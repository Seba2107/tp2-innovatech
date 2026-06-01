import { NavLink } from 'react-router-dom'
import './Sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-text">INNOVA</span>
        <span className="logo-text">TECH</span>
      </div>

      <div className="sidebar-credits">
        CREDITS: ● ● ●
      </div>

      <nav className="sidebar-nav">
        <p className="nav-label">// EQUIPO</p>
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          ▶ INICIO
        </NavLink>
        <NavLink to="/seba" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          SEBA
        </NavLink>
        <NavLink to="/johan" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          JOHAN
        </NavLink>
        <NavLink to="/juanpablo" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          JUAN PABLO
        </NavLink>

        <p className="nav-label">// SECCIONES</p>
        <NavLink to="/explorador" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          EXPLORADOR
        </NavLink>
        <NavLink to="/api" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          API
        </NavLink>
        <NavLink to="/galeria" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          GALERÍA
        </NavLink>

        <p className="nav-label">// DOCS</p>
        <NavLink to="/bitacora" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          BITÁCORA
        </NavLink>
        <NavLink to="/arbol" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          ÁRBOL
        </NavLink>
      </nav>

      <div className="sidebar-insert">
        ▼ INSERT COIN ▼
      </div>
    </aside>
  )
}

export default Sidebar