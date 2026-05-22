import React from 'react'
import '../../index.css'

const EventsFooter = () => {
  return (
    <footer className="events-footer">
      <div className="events-footer__inner">
        <div className="events-footer__grid">

          {/* Brand */}
          <div>
            <div className="events-footer__brand-logo">
              <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="15" stroke="#c9a84c" strokeWidth="1.5" />
                <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
                  fontSize="10" fill="#c9a84c" fontFamily="Playfair Display" fontStyle="italic">
                  MJ
                </text>
              </svg>
              <span className="events-footer__brand-logo-text">Mr. Johns &amp; Warhol</span>
            </div>
            <p className="events-footer__tagline">
              A quiet sanctuary for the<br />
              architectural mind and the<br />
              nocturnal soul.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="events-footer__col-label">Explore</p>
            <div className="events-footer__col-links">
              <a href="#" className="events-footer__col-link">Corporate</a>
              <a href="#" className="events-footer__col-link">Legal</a>
            </div>
          </div>

          {/* Privacy */}
          <div>
            <p className="events-footer__col-label">Privacy</p>
            <div className="events-footer__col-links">
              <a href="#" className="events-footer__col-link">Privacy Policy</a>
              <a href="#" className="events-footer__col-link">Terms of Service</a>
            </div>
          </div>

          {/* Copyright */}
          <div className="events-footer__right">
            <p className="events-footer__copy">
              &copy; {new Date().getFullYear()} Mr. Johns &amp; Warhol.<br />
              All rights reserved.
            </p>
            <div className="events-footer__icons">
              <button className="events-footer__icon" aria-label="Sound">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 4.5H4L7 2v9l-3-2.5H2v-4z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
                  <path d="M9 4.5c.8.5 1.2 1.2 1.2 2s-.4 1.5-1.2 2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
                </svg>
              </button>
              <button className="events-footer__icon" aria-label="Language">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.1" />
                  <path d="M6.5 1c0 0-2.5 2-2.5 5.5S6.5 12 6.5 12M6.5 1c0 0 2.5 2 2.5 5.5S6.5 12 6.5 12M1 6.5h11" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default EventsFooter
