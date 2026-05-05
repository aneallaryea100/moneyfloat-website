import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const features = [
  {
    icon: '💰',
    title: 'Cash & Float Tracking',
    desc: 'Monitor your physical cash and e-money float in real time. Always know exactly how much you have across both balances without touching a calculator.',
  },
  {
    icon: '📅',
    title: 'Daily Session Management',
    desc: 'Open a session at the start of the day with your opening balances. Every transaction is logged under that session, giving you a clean daily record.',
  },
  {
    icon: '🔄',
    title: 'Mid-Day Top-Up',
    desc: 'Running low on float? Record a top-up mid-session and the app instantly adjusts your running balance so reconciliation stays accurate.',
  },
  {
    icon: '✅',
    title: 'End-of-Day Reconciliation',
    desc: 'Close the day with a one-tap reconciliation. The app shows expected vs. actual balances and flags any discrepancy so nothing slips through.',
  },
  {
    icon: '📄',
    title: 'PDF Reports',
    desc: 'Generate professional PDF summaries for any session or date range. Share with your manager or keep for your own records — no internet required.',
  },
  {
    icon: '👥',
    title: 'Multi-Agent Support',
    desc: 'Managing a team? Create separate agent profiles on one device. Each agent has their own PIN, sessions, and transaction history.',
  },
]

const steps = [
  {
    number: '1',
    emoji: '🚀',
    title: 'Open Session',
    desc: 'Start each working day by opening a new session and entering your opening cash and float balances.',
  },
  {
    number: '2',
    emoji: '📝',
    title: 'Record Transactions',
    desc: 'Log every cash-in and cash-out transaction as it happens. The app updates balances instantly.',
  },
  {
    number: '3',
    emoji: '⚡',
    title: 'Top Up if Needed',
    desc: 'Need more float? Record a mid-day top-up at any time to keep your balance accurate throughout the day.',
  },
  {
    number: '4',
    emoji: '🎯',
    title: 'Reconcile & Close',
    desc: 'At end of day, close the session. The app reconciles expected vs. actual and saves a full report.',
  },
]

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#download') {
      const el = document.getElementById('download')
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }, [location])

  const scrollToDownload = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* ---- HERO ---- */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                Now available on Android
              </div>
              <h1 className="hero-title">
                Digital Reconciliation for{' '}
                <span className="highlight">Ghana's MoMo</span>{' '}
                Agents
              </h1>
              <p className="hero-subtitle">
                Replace manual bookkeeping with accurate, real-time tracking of
                your cash and e-money float. Works completely offline — your data
                stays on your device, always.
              </p>
              <div className="hero-actions">
                <a href="#download" className="btn btn-gold btn-lg" onClick={scrollToDownload}>
                  📱 Download on Android
                </a>
                <a href="#features" className="btn btn-outline btn-lg">
                  Learn More
                </a>
              </div>
              <div className="hero-trust">
                <div className="hero-trust-item">
                  <span className="dot" />
                  100% Offline
                </div>
                <div className="hero-trust-item">
                  <span className="dot" />
                  Free to Use
                </div>
                <div className="hero-trust-item">
                  <span className="dot" />
                  MTN · Telecel · AirtelTigo
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="phone-mockup">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <div className="phone-header">
                    <div className="phone-header-label">Total Float Balance</div>
                    <div className="phone-header-amount">GH₵ 2,450.00</div>
                    <div className="phone-header-sub">Session active · MTN MoMo</div>
                  </div>

                  <div className="phone-row">
                    <div className="phone-card">
                      <div className="phone-card-label">Cash</div>
                      <div className="phone-card-value success">GH₵ 980</div>
                    </div>
                    <div className="phone-card">
                      <div className="phone-card-label">E-Float</div>
                      <div className="phone-card-value" style={{ color: '#FFD700' }}>GH₵ 1,470</div>
                    </div>
                  </div>

                  <div className="phone-row">
                    <div className="phone-card">
                      <div className="phone-card-label">In</div>
                      <div className="phone-card-value success">+1,200</div>
                    </div>
                    <div className="phone-card">
                      <div className="phone-card-label">Out</div>
                      <div className="phone-card-value danger">-850</div>
                    </div>
                  </div>

                  <div className="phone-txn-list">
                    <div className="phone-txn-label">Recent</div>
                    <div className="phone-txn-item">
                      <span className="phone-txn-desc">Cash-In · 055****89</span>
                      <span className="phone-txn-amount credit">+200</span>
                    </div>
                    <div className="phone-txn-item">
                      <span className="phone-txn-desc">Cash-Out · 024****12</span>
                      <span className="phone-txn-amount debit">-350</span>
                    </div>
                    <div className="phone-txn-item">
                      <span className="phone-txn-desc">Top-Up · Float</span>
                      <span className="phone-txn-amount credit">+500</span>
                    </div>
                    <div className="phone-txn-item">
                      <span className="phone-txn-desc">Cash-In · 020****77</span>
                      <span className="phone-txn-amount credit">+150</span>
                    </div>
                  </div>

                  <div className="phone-btn">Close Session</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- STATS BAR ---- */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-inner">
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Offline</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Networks Supported</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Free</span>
              <span className="stat-label">To Use</span>
            </div>
          </div>
        </div>
      </div>

      {/* ---- FEATURES ---- */}
      <section className="section section-light" id="features">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Features</span>
            <h2 className="section-title">Everything You Need to Manage Your Float</h2>
            <p className="section-subtitle">
              MoneyFloat gives you all the tools a MoMo agent needs — from opening
              a session to generating end-of-day PDF reports.
            </p>
          </div>
          <div className="features-grid">
            {features.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- HOW IT WORKS ---- */}
      <section className="section" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Four Simple Steps Every Day</h2>
            <p className="section-subtitle">
              MoneyFloat fits into your existing workflow. Open, transact, top up,
              and reconcile — it takes seconds, not hours.
            </p>
          </div>
          <div className="steps-grid">
            {steps.map((s) => (
              <div className="step-item" key={s.number}>
                <div className="step-number">{s.number}</div>
                <div>
                  <div className="step-emoji">{s.emoji}</div>
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- NETWORKS ---- */}
      <section className="section section-light" id="networks">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Networks</span>
            <h2 className="section-title">Works with Ghana's Top Networks</h2>
            <p className="section-subtitle">
              Whether you're an MTN MoMo agent, Telecel Cash vendor, or AirtelTigo
              Money operator, MoneyFloat has you covered.
            </p>
          </div>
          <div className="networks-grid">
            <div className="network-card mtn">
              <div className="network-icon">📶</div>
              <h3 className="network-name">MTN MoMo</h3>
              <p className="network-desc">
                Ghana's largest mobile money network. Track your MTN MoMo float
                and cash balances with full transaction history.
              </p>
              <span className="network-badge">Supported</span>
            </div>
            <div className="network-card telecel">
              <div className="network-icon">📡</div>
              <h3 className="network-name">Telecel Cash</h3>
              <p className="network-desc">
                Formerly Vodafone Cash, now Telecel. Manage your Telecel Cash
                agent operations accurately and efficiently.
              </p>
              <span className="network-badge">Supported</span>
            </div>
            <div className="network-card airteltigo">
              <div className="network-icon">📲</div>
              <h3 className="network-name">AirtelTigo Money</h3>
              <p className="network-desc">
                Complete support for AirtelTigo Money transactions. Keep your
                float reconciled across every shift and agent.
              </p>
              <span className="network-badge">Supported</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---- DOWNLOAD ---- */}
      <section className="download-section" id="download">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label" style={{ marginBottom: '14px', display: 'inline-block' }}>
            Download
          </span>
          <h2 className="section-title" style={{ color: '#fff', fontSize: '2.6rem', marginBottom: '16px' }}>
            Available on Android
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '40px' }}>
            Download MoneyFloat for free on your Android device. No account
            required, no internet needed — just install and start tracking.
          </p>

          <div className="download-btn-group">
            <a href="#download" className="play-store-btn" onClick={(e) => e.preventDefault()}>
              <span className="store-icon">▶</span>
              <span className="store-text">
                <span className="store-sub">Get it on</span>
                <span className="store-name">Google Play</span>
              </span>
            </a>
          </div>

          <p className="ios-note">iOS version coming soon</p>
        </div>
      </section>
    </>
  )
}
