import { useState } from 'react'
import './ArcadeIntro.css'

function ArcadeIntro({ onStart }) {
  const [zooming, setZooming] = useState(false)
  const [flash, setFlash] = useState(false)

  const handleStart = async () => {
  try {
    const audio = new Audio('/coin.mp3')
    audio.volume = 0.7
    await audio.play()
  } catch (e) {
    console.log('Audio bloqueado:', e)
  }
  setZooming(true)
  setFlash(true)
  setTimeout(() => {
    onStart()
  }, 2400)
}

  return (
    <div className={`arcade-intro ${zooming ? 'zooming' : ''}`}>
      <div className="arcade-wrapper">
        <img
          src="/Old-Arcade-Machine-PNG.png"
          alt="Arcade Machine"
          className="arcade-img"
        />
        <div className="arcade-screen">
          {flash && <div className="crt-flash" />}
          {!zooming && (
            <div className="screen-content">
              <p className="screen-title">INNOVA<span>TECH</span></p>
              <p className="screen-sub">IFTS N.°29 — 2026</p>
              <button className="start-btn" onClick={handleStart}>
                ▶ INSERT COIN
              </button>
              <p className="screen-hint">PRESS START</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ArcadeIntro