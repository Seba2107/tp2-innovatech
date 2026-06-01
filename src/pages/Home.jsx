import { Link } from 'react-router-dom'
import { integrantes } from '../data/integrantes'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <p className="home-subtitle">// IFTS N.°29 — FRONT END — 2026</p>
        <h1 className="home-title">PONENOS UNA FICHA</h1>
        <p className="home-sub2">SELECCIONÁ TU PERSONAJE</p>
      </div>

      <div className="cards-stage">
        {integrantes.map((p) => (
          <Link to={`/${p.id}`} key={p.id} className="char-card">
            <div className="char-bg" />
            <div className="char-banner">
              <span className="char-name">{p.nombre}</span>
              <span className="char-role-badge">// {p.rol}</span>
            </div>
            <img src={p.img} alt={p.nombre} className="char-avatar" />
            <span className="char-num">{p.player}</span>
            <div className="char-footer">
              <div className="char-tags">
                {p.habilidades.slice(0, 4).map((h) => (
                  <span key={h.nombre} className="char-tag">{h.nombre}</span>
                ))}
              </div>
              <span className="char-arrow">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home