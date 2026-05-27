import React from 'react'
import { Link } from 'react-router-dom'
import '../../index.css'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__bg" style={{ backgroundImage: 'url("/HeroSeccion.png")' }}>
        <div className="hero__overlay" />
      </div>

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Experiencia Ultra-Premium
        </div>

        <h1 className="hero__title">
          Mr. John's <span className="hero__amp">&amp;</span> Warhol<br />
          <em className="hero__title-em">El referente de la noche</em>
        </h1>

        <p className="hero__subtitle">
          Descubrí la experiencia nocturna más exclusiva de la provincia.<br />
          Un espacio diseñado para mayores, donde el buen gusto, los clásicos de siempre y una barra premium se encuentran.
        </p>

        <div className="hero__actions">
          <Link to="/reservations" className="hero__btn hero__btn--primary">
            Reservá tu Mesa
          </Link>
          <Link to="/events" className="hero__btn hero__btn--secondary">
            Ver Eventos
          </Link>
        </div>
      </div>

      <div className="hero__scroll">
        <span className="hero__scroll-label">Deslizar</span>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <path d="M8 1v16M1 11l7 7 7-7" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
