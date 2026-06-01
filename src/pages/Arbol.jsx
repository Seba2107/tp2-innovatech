import './Arbol.css'

function Arbol() {
  return (
    <div className="arbol">
      <div className="arbol-header">
        <p className="arbol-label">// ARQUITECTURA DE COMPONENTES</p>
        <h1 className="arbol-titulo">ÁRBOL DE RENDERIZADO</h1>
        <p className="arbol-sub">Estructura jerárquica de la aplicación React</p>
      </div>

      <div className="arbol-content">

        {/* ÁRBOL VISUAL */}
        <div className="arbol-tree">

          {/* ROOT */}
          <div className="tree-level root-level">
            <div className="tree-node root">
              <span className="node-tag">main.jsx</span>
              <span className="node-desc">Punto de entrada</span>
            </div>
          </div>

          <div className="tree-connector" />

          {/* APP */}
          <div className="tree-level">
            <div className="tree-node app">
              <span className="node-tag">App.jsx</span>
              <span className="node-desc">Componente raíz · useState</span>
            </div>
          </div>

          <div className="tree-connector" />

          {/* NIVEL 2 */}
          <div className="tree-level level-2">
            <div className="tree-node intro">
              <span className="node-tag">ArcadeIntro</span>
              <span className="node-desc">useState · onStart prop</span>
            </div>
            <div className="tree-node layout">
              <span className="node-tag">BrowserRouter</span>
              <span className="node-desc">React Router DOM</span>
            </div>
          </div>

          <div className="tree-connector-split" />

          {/* NIVEL 3 */}
          <div className="tree-level level-3">
            <div className="tree-node nodo-sidebar">
              <span className="node-tag">Sidebar</span>
              <span className="node-desc">NavLink · navegación</span>
            </div>
            <div className="tree-node routes">
              <span className="node-tag">Routes</span>
              <span className="node-desc">Enrutador principal</span>
            </div>
          </div>

          <div className="tree-connector-split" />

          {/* PÁGINAS */}
          <div className="tree-level level-pages">
            <div className="tree-node page">
              <span className="node-tag">Home</span>
              <span className="node-desc">integrantes.js</span>
            </div>
            <div className="tree-node page">
              <span className="node-tag">Perfil ×3</span>
              <span className="node-desc">useState · useEffect</span>
            </div>
            <div className="tree-node page">
              <span className="node-tag">Explorador</span>
              <span className="node-desc">useState · filtros</span>
            </div>
            <div className="tree-node page">
              <span className="node-tag">Api</span>
              <span className="node-desc">useState · useEffect · fetch</span>
            </div>
            <div className="tree-node page">
              <span className="node-tag">Galeria</span>
              <span className="node-desc">useState · Lightbox</span>
            </div>
            <div className="tree-node page">
              <span className="node-tag">Bitácora</span>
              <span className="node-desc">datos estáticos</span>
            </div>
          </div>

        </div>

        {/* LEYENDA */}
        <div className="arbol-leyenda">
          <p className="arbol-section-label">// LEYENDA</p>
          <div className="leyenda-grid">
            <div className="leyenda-item">
              <div className="leyenda-color root-color" />
              <span>Punto de entrada</span>
            </div>
            <div className="leyenda-item">
              <div className="leyenda-color app-color" />
              <span>Componente raíz</span>
            </div>
            <div className="leyenda-item">
              <div className="leyenda-color intro-color" />
              <span>Componentes de layout</span>
            </div>
            <div className="leyenda-item">
              <div className="leyenda-color page-color" />
              <span>Páginas / Vistas</span>
            </div>
          </div>
        </div>

        {/* HOOKS USADOS */}
        <div className="arbol-hooks">
          <p className="arbol-section-label">// HOOKS UTILIZADOS</p>
          <div className="hooks-grid">
            <div className="hook-card">
              <span className="hook-nombre">useState</span>
              <p className="hook-desc">Manejo de estado local en ArcadeIntro, Perfil, Explorador, Api y Galería.</p>
              <span className="hook-count">×5 componentes</span>
            </div>
            <div className="hook-card">
              <span className="hook-nombre">useEffect</span>
              <p className="hook-desc">Animación de barras en Perfil y fetch asíncrono de API en Api.jsx.</p>
              <span className="hook-count">×2 componentes</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Arbol