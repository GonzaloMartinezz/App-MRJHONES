import React from 'react'
import '../../index.css'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <div className="hero__overlay" />
        <div className="hero__spotlight hero__spotlight--left" />
        <div className="hero__spotlight hero__spotlight--right" />
        <div className="hero__spotlight hero__spotlight--center" />
      </div>

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Ultra-Premium Experience
        </div>

        <h1 className="hero__title">
          The Gold Standard<br />
          of <em className="hero__title-em">Nightlife</em>
        </h1>

        <p className="hero__subtitle">
          Step into an atmosphere of exclusive luxury. Where high-energy<br />
          modernism meets the iconic heritage of club culture.
        </p>

        <div className="hero__actions">
          <a href="#contact" className="hero__btn hero__btn--primary">Book Your Table</a>
          <a href="/events" className="hero__btn hero__btn--secondary">View Guestlist</a>
        </div>
      </div>

      <div className="hero__scroll">
        <span className="hero__scroll-label">Scroll</span>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <path d="M8 1v16M1 11l7 7 7-7" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
