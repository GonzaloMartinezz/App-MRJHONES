import React from 'react'
import '../../index.css'

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">

        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="15" stroke="#c9a84c" strokeWidth="1.5" />
                <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
                  fontSize="10" fill="#c9a84c" fontFamily="Playfair Display" fontStyle="italic">
                  MJ
                </text>
              </svg>
              <span className="footer__logo-text">Mr. Johns &amp; Warhol</span>
            </div>
            <p className="footer__tagline">
              The pinnacle of ultra-premium nightlife.<br />
              Where every night is a masterpiece.
            </p>
          </div>

          <nav className="footer__links">
            <a href="#" className="footer__link">Instagram</a>
            <a href="#" className="footer__link">WhatsApp</a>
            <a href="#" className="footer__link">Location</a>
            <a href="#" className="footer__link">Privacy Policy</a>
          </nav>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} Mr. Johns &amp; Warhol.
          </p>
          <p className="footer__copy footer__copy--right">
            Ultra-Premium Nightlife.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
