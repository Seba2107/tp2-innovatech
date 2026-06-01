  import { Link } from 'react-router-dom'
import './Perfil.css'

const datos = {
  nombre: 'SEBA',
  rol: 'FRONTEND DEV',
  ciudad: 'Tigre, Buenos Aires',
  edad: 44,
  color: '#0099cc',
  colorBg: '#000d1a',
  img: '/seba.png',
  habilidades: [
    { nombre: 'HTML',       nivel: 80 },
    { nombre: 'CSS',        nivel: 80 },
    { nombre: 'GITHUB',     nivel: 80 },
    { nombre: 'REACT',      nivel: 60 },
    { nombre: 'JAVASCRIPT', nivel: 70 },
  ],
  peliculas: [
    { titulo: 'Volver al Futuro',   year: '1985' },
    { titulo: '9 Reinas',           year: '2000' },
    { titulo: 'Avengers: Endgame',  year: '2019' },
  ],
  discos: [
    { titulo: '74 Jailbreak',         artista: 'AC/DC' },
    { titulo: 'Exile on Main St.',    artista: 'Rolling Stones' },
    { titulo: 'Fuerza Natural',       artista: 'Gustavo Cerati' },
  ],
  redes: [
    { nombre: 'GitHub',    url: 'https://github.com', icono: '⌥' },
    { nombre: 'LinkedIn',  url: 'https://linkedin.com', icono: 'in' },
    { nombre: 'Instagram', url: 'https://instagram.com', icono: '◈' },
  ],
}

function Seba() {
  return (
    <div className="perfil" style={{ '--color': datos.color, '--bg': datos.colorBg }}>

      {/* HEADER */}
      <div className="perfil-header">
        <div className="perfil-header-left">
          <p className="perfil-player">P1 ●</p>
          <h1 className="perfil-nombre">{datos.nombre}</h1>
          <p className="perfil-rol">// {datos.rol}</p>
          <div className="perfil-meta">
            <span>📍 {datos.ciudad}</span>
            <span>🎂 {datos.edad} años</span>
          </div>
          <div className="perfil-redes">
            {datos.redes.map((r) => (
              <a key={r.nombre} href={r.url} target="_blank" rel="noreferrer"
                className="perfil-red-btn">
                {r.icono} {r.nombre}
              </a>
            ))}
          </div>
        </div>
        <div className="perfil-header-right">
          <img src={datos.img} alt={datos.nombre} className="perfil-avatar" />
        </div>
      </div>

      {/* STATS - estilo Street Fighter */}
      <div className="perfil-section">
        <p className="perfil-section-label">// POWER STATS</p>
        <div className="stats-grid">
          {datos.habilidades.map((h) => (
            <div key={h.nombre} className="stat-item">
              <div className="stat-header">
                <span className="stat-nombre">{h.nombre}</span>
                <span className="stat-valor">{h.nivel}</span>
              </div>
              <div className="stat-bar-bg">
                <div
                  className="stat-bar-fill"
                  style={{ width: `${h.nivel}%` }}
                />
                <div className="stat-bar-glow" style={{ width: `${h.nivel}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PELÍCULAS Y DISCOS */}
      <div className="perfil-double">

        <div className="perfil-section">
          <p className="perfil-section-label">// PELÍCULAS FAVORITAS</p>
          <div className="media-list">
            {datos.peliculas.map((p, i) => (
              <div key={i} className="media-item">
                <span className="media-num">0{i + 1}</span>
                <div className="media-info">
                  <span className="media-titulo">{p.titulo}</span>
                  <span className="media-sub">{p.year}</span>
                </div>
                <span className="media-icon">🎬</span>
              </div>
            ))}
          </div>
        </div>

        <div className="perfil-section">
          <p className="perfil-section-label">// DISCOS FAVORITOS</p>
          <div className="media-list">
            {datos.discos.map((d, i) => (
              <div key={i} className="media-item">
                <span className="media-num">0{i + 1}</span>
                <div className="media-info">
                  <span className="media-titulo">{d.titulo}</span>
                  <span className="media-sub">{d.artista}</span>
                </div>
                <span className="media-icon">🎵</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* BOTÓN VOLVER */}
      <div className="perfil-back">
        <Link to="/" className="back-btn">← VOLVER AL INICIO</Link>
      </div>

    </div>
  )
}

export default Seba