import React from 'react'
import { Link } from 'react-router-dom'
import '../../index.css'

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">

        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="15" stroke="#c9a84c" strokeWidth="1.5" />
                <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
                  fontSize="12" fill="#c9a84c" fontFamily="Playfair Display" fontStyle="italic" fontWeight="700">
                  MJ
                </text>
              </svg>
              <span className="footer__logo-text">MR JHONES</span>
            </div>
            <p className="footer__tagline">
              El referente de la noche y la coctelería premium.<br />
              Donde cada fin de semana se convierte en una obra de arte.
            </p>
          </div>

          <div className="footer__grid-cols">
            <div className="footer__col">
              <h4>Navegación</h4>
              <nav className="footer__links-col">
                <Link to="/" className="footer__link">Inicio</Link>
                <Link to="/events" className="footer__link">Eventos</Link>
                <Link to="/vip" className="footer__link">Experiencia VIP</Link>
                <Link to="/reservations" className="footer__link">Reservas</Link>
              </nav>
            </div>

            <div className="footer__col">
              <h4>Contacto</h4>
              <div className="footer__contact-info">
                <p>Av. Aconquija 1702, Yerba Buena</p>
                <p>Tucumán, Argentina</p>
                <a href="https://wa.me/5493811234567" target="_blank" rel="noreferrer" className="footer__link footer__link--whatsapp">
                  WhatsApp: +54 9 381 123-4567
                </a>
              </div>
            </div>

            <div className="footer__col">
              <h4>Redes</h4>
              <nav className="footer__links-col">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer__link">Instagram</a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer__link">Facebook</a>
                <Link to="/contact" className="footer__link">Contacto / Concierge</Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} Mr. John's &amp; Warhol. Todos los derechos reservados.
          </p>
          <p className="footer__copy footer__copy--right">
            El mejor club de la provincia.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
