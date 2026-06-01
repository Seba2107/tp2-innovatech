import { useState, useEffect } from 'react'
import './Api.css'

const API_KEY = '4eb06e9b228e4a4ba6fa950e7f9707e5'

function Api() {
  const [juegos, setJuegos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pagina, setPagina] = useState(1)
  const [totalPaginas, setTotalPaginas] = useState(1)
  const porPagina = 12

  useEffect(() => {
    const fetchJuegos = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(
          `https://api.rawg.io/api/games?key=${API_KEY}&genres=arcade&page=${pagina}&page_size=${porPagina}&ordering=-rating`
        )
        if (!res.ok) throw new Error('Error al cargar los datos')
        const data = await res.json()
        setJuegos(data.results)
        setTotalPaginas(Math.ceil(data.count / porPagina))
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchJuegos()
  }, [pagina])

  return (
    <div className="api">
      <div className="api-header">
        <p className="api-label">// API EXTERNA — RAWG.IO</p>
        <h1 className="api-titulo">ARCADE GAMES</h1>
        <p className="api-sub">Base de datos de juegos arcade clásicos</p>
      </div>

      {/* PAGINACIÓN ARRIBA */}
      <div className="api-paginacion">
        <button
          className="pag-btn"
          onClick={() => setPagina(p => p - 1)}
          disabled={pagina === 1 || loading}
        >
          ← ANTERIOR
        </button>
        <span className="pag-info">PÁGINA {pagina} / {totalPaginas}</span>
        <button
          className="pag-btn"
          onClick={() => setPagina(p => p + 1)}
          disabled={pagina === totalPaginas || loading}
        >
          SIGUIENTE →
        </button>
      </div>

      {/* ESTADOS */}
      {loading && (
        <div className="api-estado">
          <p className="api-loading">// CARGANDO JUEGOS...</p>
        </div>
      )}

      {error && (
        <div className="api-estado">
          <p className="api-error">// ERROR: {error}</p>
        </div>
      )}

      {/* GRID */}
      {!loading && !error && (
        <div className="api-grid">
          {juegos.map((j) => (
            <div key={j.id} className="juego-card">
              <div className="juego-img-wrap">
                {j.background_image
                  ? <img src={j.background_image} alt={j.name} className="juego-img" />
                  : <div className="juego-img-placeholder">NO IMAGE</div>
                }
                <span className="juego-rating">⭐ {j.rating?.toFixed(1)}</span>
              </div>
              <div className="juego-info">
                <h3 className="juego-nombre">{j.name.toUpperCase()}</h3>
                <div className="juego-meta">
                  <span className="juego-year">
                    {j.released ? j.released.slice(0, 4) : '----'}
                  </span>
                  <div className="juego-plataformas">
                    {j.platforms?.slice(0, 3).map(p => (
                      <span key={p.platform.id} className="juego-plataforma">
                        {p.platform.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* PAGINACIÓN ABAJO */}
      {!loading && !error && (
        <div className="api-paginacion">
          <button
            className="pag-btn"
            onClick={() => setPagina(p => p - 1)}
            disabled={pagina === 1 || loading}
          >
            ← ANTERIOR
          </button>
          <span className="pag-info">PÁGINA {pagina} / {totalPaginas}</span>
          <button
            className="pag-btn"
            onClick={() => setPagina(p => p + 1)}
            disabled={pagina === totalPaginas || loading}
          >
            SIGUIENTE →
          </button>
        </div>
      )}
    </div>
  )
}

export default Api