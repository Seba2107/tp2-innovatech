import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  SiHtml5, SiCss, SiCssmodules, SiGithub, SiGit,
  SiReact, SiJavascript, SiNodedotjs, SiMysql,
  SiPython, SiExpress
} from 'react-icons/si'
import './Perfil.css'

const ICONOS_MAP = {
  SiHtml5:      SiHtml5,
  SiCss:       SiCss,
  SiCssmodules: SiCssmodules,
  SiGithub:     SiGithub,
  SiGit:        SiGit,
  SiReact:      SiReact,
  SiJavascript: SiJavascript,
  SiNodedotjs:  SiNodedotjs,
  SiMysql:      SiMysql,
  SiPython:     SiPython,
  SiExpress:    SiExpress,
}

function Carrusel({ proyectos, color }) {
  const [actual, setActual] = useState(0)

  const anterior = () => setActual((i) => (i === 0 ? proyectos.length - 1 : i - 1))
  const siguiente = () => setActual((i) => (i === proyectos.length - 1 ? 0 : i + 1))

  const proyecto = proyectos[actual]

  return (
    <div className="carrusel">
      <div className="carrusel-track">

        {/* Imagen o placeholder */}
        <div className="carrusel-img-wrap" style={{ borderColor: color }}>
          {proyecto.img
            ? <img src={proyecto.img} alt={proyecto.titulo} className="carrusel-img" />
            : (
              <div className="carrusel-placeholder" style={{ color }}>
                <span className="carrusel-placeholder-icon">{'</>'}</span>
                <span className="carrusel-placeholder-label">PROYECTO</span>
              </div>
            )
          }
          <span className="carrusel-counter" style={{ backgroundColor: color }}>
            {String(actual + 1).padStart(2, '0')} / {String(proyectos.length).padStart(2, '0')}
          </span>
        </div>

        {/* Info */}
        <div className="carrusel-info">
          <p className="carrusel-num" style={{ color }}>// PROYECTO {String(actual + 1).padStart(2, '0')}</p>
          <h3 className="carrusel-titulo">{proyecto.titulo}</h3>
          <p className="carrusel-desc">{proyecto.descripcion}</p>
        </div>

      </div>

      {/* Controles */}
      <div className="carrusel-controles">
        <button className="carrusel-btn" onClick={anterior} style={{ borderColor: color, color }}>
          ← ANTERIOR
        </button>
        <div className="carrusel-dots">
          {proyectos.map((_, i) => (
            <button
              key={i}
              className={`carrusel-dot ${i === actual ? 'activo' : ''}`}
              style={i === actual ? { backgroundColor: color } : {}}
              onClick={() => setActual(i)}
            />
          ))}
        </div>
        <button className="carrusel-btn" onClick={siguiente} style={{ borderColor: color, color }}>
          SIGUIENTE →
        </button>
      </div>
    </div>
  )
}

function Perfil({ integrante }) {
  const [barrasAnimadas, setBarrasAnimadas] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setBarrasAnimadas(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const { player, nombre, rol, ciudad, edad, color, img,
          habilidades, proyectos, peliculas, discos, redes } = integrante

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

      <div className="perfil-section">
        <p className="perfil-section-label" style={{ color }}>// TECH STACK</p>
        <div className="techstack-grid">
          {habilidades.map((h) => {
            const IconComp = ICONOS_MAP[h.icono]
            return (
              <div key={h.nombre} className="techstack-item" style={{ '--color': color }}>
                <div className="techstack-icon-wrap">
                  {IconComp
                    ? <IconComp className="techstack-icon" />
                    : <span className="techstack-icon-fallback">{'<>'}</span>
                  }
                </div>
                <span className="techstack-nombre">{h.nombre}</span>
              </div>
            )
          })}
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

      {/* CARRUSEL DE PROYECTOS */}
      {proyectos && proyectos.length > 0 && (
        <div className="perfil-section">
          <p className="perfil-section-label" style={{ color }}>// PROYECTOS</p>
          <Carrusel proyectos={proyectos} color={color} />
        </div>
      )}

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
