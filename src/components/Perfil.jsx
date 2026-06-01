import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Perfil.css'

function Perfil({ integrante }) {
  const [barrasAnimadas, setBarrasAnimadas] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setBarrasAnimadas(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const { player, nombre, rol, ciudad, edad, color, img,
          habilidades, peliculas, discos, redes } = integrante

  return (
    <div className="perfil" style={{ '--color': color }}>

      {/* HEADER */}
      <div className="perfil-header" style={{ borderColor: color }}>
        <div className="perfil-header-left">
          <p className="perfil-player" style={{ color }}>{player} ●</p>
          <h1 className="perfil-nombre" style={{ color }}>{nombre}</h1>
          <p className="perfil-rol">// {rol}</p>
          <div className="perfil-meta">
            <span>📍 {ciudad}</span>
            <span>🎂 {edad} años</span>
          </div>
          <p className="perfil-descripcion">{integrante.descripcion}</p>
          <div className="perfil-redes">
            {redes.map((r) => (
              <a key={r.nombre} href={r.url} target="_blank"
                rel="noreferrer" className="perfil-red-btn"
                style={{ borderColor: color, color }}>
                {r.icono}: {r.nombre}
              </a>
            ))}
          </div>
        </div>
        <div className="perfil-header-right">
          <img src={img} alt={nombre} className="perfil-avatar" />
        </div>
      </div>

      {/* POWER STATS */}
      <div className="perfil-section">
        <p className="perfil-section-label" style={{ color }}>// POWER STATS</p>
        <div className="stats-grid">
          {habilidades.map((h) => (
            <div key={h.nombre} className="stat-item">
              <div className="stat-header">
                <span className="stat-nombre">{h.nombre}</span>
                <span className="stat-valor" style={{ color }}>{h.nivel}</span>
              </div>
              <div className="stat-bar-bg">
                <div
                  className="stat-bar-fill"
                  style={{
                    width: barrasAnimadas ? `${h.nivel}%` : '0%',
                    backgroundColor: color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PELÍCULAS Y DISCOS */}
      <div className="perfil-double">

        <div className="perfil-section">
          <p className="perfil-section-label" style={{ color }}>// PELÍCULAS FAVORITAS</p>
          <div className="media-list">
            {peliculas.map((p, i) => (
              <div key={i} className="media-item">
                <span className="media-num" style={{ color }}>0{i + 1}</span>
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
          <p className="perfil-section-label" style={{ color }}>// DISCOS FAVORITOS</p>
          <div className="media-list">
            {discos.map((d, i) => (
              <div key={i} className="media-item">
                <span className="media-num" style={{ color }}>0{i + 1}</span>
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

      {/* VOLVER */}
      <div className="perfil-back">
        <Link to="/" className="back-btn" style={{ borderColor: color, color }}>
          ← VOLVER AL INICIO
        </Link>
      </div>

    </div>
  )
}

export default Perfil