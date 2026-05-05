import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname !== '/') {
      // Let router navigate; anchor will be handled after navigation
      return
    }
    e.preventDefault()
    const el = document.getElementById('download')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo" aria-label="MoneyFloat home">
            <div className="navbar-logo-icon">M</div>
            <span className="navbar-logo-text">MoneyFloat</span>
          </Link>

          <div className="navbar-links" role="navigation" aria-label="Main navigation">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/support">Support</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          <div className="navbar-cta">
            <a
              href="/#download"
              className="btn btn-gold"
              onClick={handleDownloadClick}
            >
              Get the App
            </a>
          </div>

          <button
            className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`navbar-mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/support" onClick={() => setMenuOpen(false)}>Support</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        <div className="navbar-mobile-cta">
          <a
            href="/#download"
            className="btn btn-gold"
            onClick={handleDownloadClick}
          >
            Get the App
          </a>
        </div>
      </div>
    </nav>
  )
}
