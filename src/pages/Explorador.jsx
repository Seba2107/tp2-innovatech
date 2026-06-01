import { useState } from 'react'
import { tecnologias } from '../data/tecnologias'
import './Explorador.css'

const categorias = ['Todas', 'Frontend', 'Backend', 'DevOps', 'Diseño', 'Tooling']

function Explorador() {
  const [busqueda, setBusqueda] = useState('')
  const [categoriaActiva, setCategoriaActiva] = useState('Todas')

  const filtrados = tecnologias.filter((t) => {
    const coincideTexto = t.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                          t.descripcion.toLowerCase().includes(busqueda.toLowerCase())
    const coincideCategoria = categoriaActiva === 'Todas' || t.categoria === categoriaActiva
    return coincideTexto && coincideCategoria
  })

  return (
    <div className="explorador">
      <div className="explorador-header">
        <p className="explorador-label">// DATA EXPLORER</p>
        <h1 className="explorador-titulo">TECNOLOGÍAS</h1>
        <p className="explorador-sub">20 herramientas del stack moderno</p>
      </div>

      {/* FILTROS */}
      <div className="explorador-filtros">
        <input
          type="text"
          placeholder="// BUSCAR..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="explorador-input"
        />
        <div className="explorador-categorias">
          {categorias.map((c) => (
            <button
              key={c}
              onClick={() => setCategoriaActiva(c)}
              className={`cat-btn ${categoriaActiva === c ? 'activa' : ''}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* CONTADOR */}
      <div className="explorador-contador">
        <span>{filtrados.length} resultado{filtrados.length !== 1 ? 's' : ''}</span>
      </div>

      {/* GRID */}
      <div className="explorador-grid">
        {filtrados.length === 0 ? (
          <p className="explorador-empty">// NO SE ENCONTRARON RESULTADOS</p>
        ) : (
          filtrados.map((t) => (
            <div key={t.id} className="tech-card">
              <div className="tech-card-top">
                <span className="tech-id">#{String(t.id).padStart(2, '0')}</span>
                <span className={`tech-dificultad dif-${t.dificultad.toLowerCase()}`}>
                  {t.dificultad}
                </span>
              </div>
              <h3 className="tech-nombre">{t.nombre}</h3>
              <p className="tech-descripcion">{t.descripcion}</p>
              <span className="tech-categoria">{t.categoria}</span>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Explorador