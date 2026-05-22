import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../../index.css'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Events', to: '/events' },
  { label: 'VIP Experience', to: '/vip' },
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

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`} aria-label="Primary navigation">
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
          </ul>
        </nav>

        <div className="header__actions">
           <NavLink
             to="/contact"
             className={({ isActive }) =>
               `header__contact-link${isActive ? ' header__nav-link--active' : ''}`
             }
             onClick={() => setMenuOpen(false)}
           >
             Contact
           </NavLink>
           <Link to="/reservations" className="header__reservations" onClick={() => setMenuOpen(false)}>
             Reservations
           </Link>
        </div>

        <button
          className={`header__hamburger ${menuOpen ? 'header__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
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
