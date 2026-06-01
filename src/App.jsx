import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ArcadeIntro from './components/ArcadeIntro'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import PageSeba from './pages/PageSeba'
import PageJohan from './pages/PageJohan'
import PageJuanPablo from './pages/PageJuanPablo'
import Explorador from './pages/Explorador'
import Api from './pages/Api'
import Galeria from './pages/Galeria'
import Bitacora from './pages/Bitacora'
import Arbol from './pages/Arbol'
import './App.css'

function App() {
  const [started, setStarted] = useState(false)

  if (!started) {
    return <ArcadeIntro onStart={() => setStarted(true)} />
  }

  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ marginLeft: '200px', width: 'calc(100% - 200px)', minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seba" element={<PageSeba />} />
            <Route path="/johan" element={<PageJohan />} />
            <Route path="/juanpablo" element={<PageJuanPablo />} />
            <Route path="/explorador" element={<Explorador />} />
            <Route path="/api" element={<Api />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/bitacora" element={<Bitacora />} />
            <Route path="/arbol" element={<Arbol />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App