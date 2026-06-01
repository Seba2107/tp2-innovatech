import './Bitacora.css'

const entradas = [
  {
    semana: 'SEMANA 1',
    titulo: 'Inicio del Proyecto — TP1',
    fecha: 'Marzo 2026',
    contenido: 'Definimos el nombre del equipo InnovaTech, la estructura de archivos y el enfoque visual. Cada integrante aportó su estilo propio, unificado por la portada común. Trabajamos con HTML, CSS y JavaScript vanilla.',
    tags: ['HTML', 'CSS', 'JS', 'GitHub'],
  },
  {
    semana: 'SEMANA 2',
    titulo: 'Páginas Individuales — TP1',
    fecha: 'Abril 2026',
    contenido: 'Cada integrante desarrolló su tarjeta personal con la información requerida: habilidades, películas, discos y datos personales. Se implementó el diseño responsive con breakpoints en 400px, 900px y 1200px.',
    tags: ['Responsive', 'CSS Grid', 'Flexbox'],
  },
  {
    semana: 'SEMANA 3',
    titulo: 'Entrega TP1 — Deploy en Vercel',
    fecha: 'Abril 2026',
    contenido: 'Revisión cruzada de estilos, implementación de breakpoints y ajustes finales. Publicación en Vercel y entrega del repositorio en GitHub con README completo.',
    tags: ['Vercel', 'GitHub', 'README'],
  },
  {
    semana: 'SEMANA 4',
    titulo: 'Migración a React — TP2',
    fecha: 'Mayo 2026',
    contenido: 'Decisión de migrar la arquitectura estática del TP1 hacia React con Vite. Se definió la estructura de componentes reutilizables, el sistema de rutas con React Router y la separación de datos en archivos JSON.',
    tags: ['React', 'Vite', 'React Router'],
  },
  {
    semana: 'SEMANA 5',
    titulo: 'Componentes y Estética Arcade',
    fecha: 'Mayo 2026',
    contenido: 'Implementación de la intro arcade con animación de zoom, sidebar fija, componente Perfil reutilizable para los 3 integrantes. Se decidió darle una identidad visual beat\'em up única con columnas inclinadas y colores por personaje.',
    tags: ['useState', 'useEffect', 'CSS Animations'],
  },
  {
    semana: 'SEMANA 6',
    titulo: 'Funcionalidades Avanzadas — TP2',
    fecha: 'Mayo 2026',
    contenido: 'Desarrollo del Explorador JSON con filtrado en tiempo real, integración de la API de RAWG para la sección de juegos arcade con paginación, y galería interactiva con Lightbox, navegación por teclado y cierre con ESC.',
    tags: ['API REST', 'RAWG', 'Lightbox', 'JSON'],
  },
]

const dificultades = [
  {
    problema: 'Posicionamiento de la pantalla sobre el arcade',
    solucion: 'Ajuste manual de top, width y height en porcentajes usando position absolute sobre la imagen.',
  },
  {
    problema: 'Componente Perfil reutilizable para 3 integrantes',
    solucion: 'Separación de datos en integrantes.js y uso de props para pasar la información al componente.',
  },
  {
    problema: 'Animación de barras de habilidades',
    solucion: 'Uso de useEffect con setTimeout para disparar la animación CSS después del montaje del componente.',
  },
]

function Bitacora() {
  return (
    <div className="bitacora">
      <div className="bitacora-header">
        <p className="bitacora-label">// PROCESO DE DESARROLLO</p>
        <h1 className="bitacora-titulo">BITÁCORA</h1>
        <p className="bitacora-sub">Del HTML estático al ecosistema React</p>
      </div>

      {/* MIGRACIÓN */}
      <div className="bitacora-migracion">
        <p className="bitacora-section-label">// JUSTIFICACIÓN DE MIGRACIÓN HTML → REACT</p>
        <div className="migracion-grid">
          <div className="migracion-card">
            <h3 className="migracion-titulo">TP1 — HTML/CSS/JS</h3>
            <ul className="migracion-lista">
              <li>Archivos HTML separados por página</li>
              <li>CSS duplicado entre páginas</li>
              <li>JavaScript sin estructura de componentes</li>
              <li>Sin manejo de estado centralizado</li>
              <li>Navegación con recarga de página</li>
            </ul>
          </div>
          <div className="migracion-arrow">→</div>
          <div className="migracion-card react">
            <h3 className="migracion-titulo">TP2 — React</h3>
            <ul className="migracion-lista">
              <li>Componentes reutilizables (Perfil, Sidebar)</li>
              <li>CSS modular por componente</li>
              <li>Estado con useState y efectos con useEffect</li>
              <li>Datos centralizados en JSON</li>
              <li>SPA con React Router sin recargas</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ENTRADAS */}
      <div className="bitacora-entradas">
        <p className="bitacora-section-label">// REGISTRO SEMANAL</p>
        {entradas.map((e, i) => (
          <div key={i} className="bita-entry">
            <div className="bita-left">
              <span className="bita-semana">{e.semana}</span>
              <span className="bita-fecha">{e.fecha}</span>
            </div>
            <div className="bita-right">
              <h3 className="bita-titulo">{e.titulo}</h3>
              <p className="bita-contenido">{e.contenido}</p>
              <div className="bita-tags">
                {e.tags.map(t => (
                  <span key={t} className="bita-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DIFICULTADES */}
      <div className="bitacora-dificultades">
        <p className="bitacora-section-label">// DIFICULTADES Y SOLUCIONES</p>
        {dificultades.map((d, i) => (
          <div key={i} className="difi-entry">
            <div className="difi-problema">
              <span className="difi-label">PROBLEMA</span>
              <p>{d.problema}</p>
            </div>
            <div className="difi-arrow">→</div>
            <div className="difi-solucion">
              <span className="difi-label">SOLUCIÓN</span>
              <p>{d.solucion}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Bitacora