import React, { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import '../../index.css'

const homeNav = [
  { label: 'Home', to: '/' },
  { label: 'Events', to: '/events' },
  { label: 'Experience', to: '#experience' },
  { label: 'Contact', to: '#contact' },
]

const eventsNav = [
  { label: 'Experience', to: '#experience' },
  { label: 'Events', to: '/events' },
  { label: 'VIP', to: '#vip' },
  { label: 'Reservations', to: '#contact' },
]

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isEvents = location.pathname === '/events'
  const navItems = isEvents ? eventsNav : homeNav

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">

        <Link to="/" className="header__logo">
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="15" stroke="#c9a84c" strokeWidth="1.5" />
            <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
              fontSize="10" fill="#c9a84c" fontFamily="Playfair Display" fontStyle="italic">
              MJ
            </text>
          </svg>
          <span className="header__logo-text">Mr. Johns &amp; Warhol</span>
        </Link>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            {navItems.map(({ label, to }) => (
              <li key={label}>
                {to.startsWith('/') ? (
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `header__nav-link${isActive ? ' header__nav-link--active' : ''}`
                    }
                  >
                    {label}
                  </NavLink>
                ) : (
                  <a href={to} className="header__nav-link">{label}</a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          {!isEvents && (
            <button className="header__cart" aria-label="Cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </button>
          )}
          {isEvents ? (
            <a href="#contact" className="header__btn-filled">Book a Table</a>
          ) : (
            <a href="#contact" className="header__btn-outline">Reservations</a>
          )}
        </div>

        <button
          className={`header__hamburger ${menuOpen ? 'header__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
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
