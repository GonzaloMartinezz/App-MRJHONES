import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../../index.css'

const navItems = [
  { label: 'Inicio', to: '/' },
  { label: 'Eventos', to: '/events' },
  { label: 'Experiencia VIP', to: '/vip' },
  { label: 'Contacto', to: '/contact' },
]

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
  }, [menuOpen])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <Link to="/" className="header__logo" onClick={() => setMenuOpen(false)}>
          <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="15" stroke="#c9a84c" strokeWidth="1.5" />
            <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
              fontSize="12" fill="#c9a84c" fontFamily="Playfair Display" fontStyle="italic" fontWeight="700">
              MJ
            </text>
          </svg>
          <span className="header__logo-text">MR JHONES</span>
        </Link>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`} aria-label="Navegación principal">
          <ul className="header__nav-list">
            {navItems.map(({ label, to }) => (
              <li key={label}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `header__nav-link${isActive ? ' header__nav-link--active' : ''}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            {/* Elemento de reservas en menú móvil */}
            <li className="header__mobile-only">
              <Link to="/reservations" className="header__btn-filled header__btn-pill" onClick={() => setMenuOpen(false)}>
                Reservar Mesa
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header__actions">
           <Link to="/reservations" className="header__btn-filled header__btn-pill" onClick={() => setMenuOpen(false)}>
             Reservar
           </Link>
        </div>

        <button
          className={`header__hamburger ${menuOpen ? 'header__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Header
