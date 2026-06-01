import { useState } from 'react'
import { galeriaJuegos } from '../data/galeria'
import './Galeria.css'

const generos = ["Todos", "Beat 'em Up", "Carreras", "Naves", "Shooter"]

function Galeria() {
  const [generoActivo, setGeneroActivo] = useState('Todos')
  const [lightbox, setLightbox] = useState(null)

  const filtrados = galeriaJuegos.filter(j =>
    generoActivo === 'Todos' || j.genero === generoActivo
  )

  const abrirLightbox = (juego) => setLightbox(juego)
  const cerrarLightbox = () => setLightbox(null)

  const navegar = (direccion) => {
    const idx = filtrados.findIndex(j => j.id === lightbox.id)
    const nuevoIdx = idx + direccion
    if (nuevoIdx >= 0 && nuevoIdx < filtrados.length) {
      setLightbox(filtrados[nuevoIdx])
    }
  }

  // Cerrar con ESC
  const handleKey = (e) => {
    if (e.key === 'Escape') cerrarLightbox()
    if (e.key === 'ArrowRight') navegar(1)
    if (e.key === 'ArrowLeft') navegar(-1)
  }

  return (
    <div className="galeria" onKeyDown={handleKey} tabIndex={0}>
      <div className="galeria-header">
        <p className="galeria-label">// GALERÍA INTERACTIVA</p>
        <h1 className="galeria-titulo">ARCADE CLASSICS</h1>
        <p className="galeria-sub">Los mejores clásicos del arcade — hacé clic para ampliar</p>
      </div>

      {/* FILTROS */}
      <div className="galeria-filtros">
        {generos.map(g => (
          <button
            key={g}
            onClick={() => setGeneroActivo(g)}
            className={`gen-btn ${generoActivo === g ? 'activo' : ''}`}
          >
            {g}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="galeria-grid">
        {filtrados.map((j) => (
          <div
            key={j.id}
            className="galeria-item"
            onClick={() => abrirLightbox(j)}
          >
            <img
              src={j.img}
              alt={j.titulo}
              className="galeria-img"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300/0d0d0d/0099cc?text=' + j.titulo }}
            />
            <div className="galeria-overlay">
              <span className="galeria-item-titulo">{j.titulo}</span>
              <span className="galeria-item-genero">{j.genero} · {j.year}</span>
              <span className="galeria-zoom">🔍 VER</span>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="lightbox" onClick={cerrarLightbox}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>

            <button className="lightbox-cerrar" onClick={cerrarLightbox}>
              [ ESC ] CERRAR
            </button>

            <img
              src={lightbox.img}
              alt={lightbox.titulo}
              className="lightbox-img"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/800x500/0d0d0d/0099cc?text=' + lightbox.titulo }}
            />

            <div className="lightbox-info">
              <h2 className="lightbox-titulo">{lightbox.titulo}</h2>
              <p className="lightbox-meta">{lightbox.genero} · {lightbox.year}</p>
            </div>

            <div className="lightbox-nav">
              <button
                className="nav-btn"
                onClick={() => navegar(-1)}
                disabled={filtrados.findIndex(j => j.id === lightbox.id) === 0}
              >
                ← ANTERIOR
              </button>
              <span className="nav-contador">
                {filtrados.findIndex(j => j.id === lightbox.id) + 1} / {filtrados.length}
              </span>
              <button
                className="nav-btn"
                onClick={() => navegar(1)}
                disabled={filtrados.findIndex(j => j.id === lightbox.id) === filtrados.length - 1}
              >
                SIGUIENTE →
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}

export default Galeria