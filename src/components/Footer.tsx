import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">M</div>
                <span className="footer-logo-text">MoneyFloat</span>
              </div>
              <p>
                The digital reconciliation tool built specifically for Ghana's
                mobile money agents. Replace manual bookkeeping with accurate,
                offline-first transaction tracking.
              </p>
            </div>

            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li><a href="/#features">Features</a></li>
                <li><a href="/#download">Download</a></li>
                <li><a href="/#networks">Networks</a></li>
                <li><a href="/#how-it-works">How It Works</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/privacy">Terms of Use</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><Link to="/support">FAQ</Link></li>
                <li><Link to="/support">Help Center</Link></li>
                <li><Link to="/contact">Report Issue</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <span className="footer-copyright">
              &copy; 2025 MoneyFloat. Built for Ghana&apos;s MoMo Agents.
            </span>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/support">Support</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
