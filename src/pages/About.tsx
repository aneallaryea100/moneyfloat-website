const values = [
  {
    icon: '🎯',
    title: 'Accuracy',
    desc: 'Every transaction is recorded precisely, eliminating manual calculation errors that cost agents money.',
  },
  {
    icon: '✨',
    title: 'Simplicity',
    desc: 'Designed for agents at all literacy levels. Clean UI, minimal taps, and plain language throughout.',
  },
  {
    icon: '🔒',
    title: 'Trust',
    desc: 'Your data never leaves your device. No cloud, no servers, no third parties. Your business is yours.',
  },
  {
    icon: '⚡',
    title: 'Speed',
    desc: 'Log a transaction in under 5 seconds. Generate a full-day PDF report in under 3. Time is money.',
  },
]

const offlinePoints = [
  {
    icon: '📶',
    title: 'Unreliable connectivity',
    desc: 'Many MoMo agent locations in Ghana experience patchy or expensive mobile data. MoneyFloat works with zero internet.',
  },
  {
    icon: '🔐',
    title: 'Data privacy',
    desc: 'Agents handle sensitive customer phone numbers and transaction values. Keeping data on-device removes exposure to cloud breaches.',
  },
  {
    icon: '🔋',
    title: 'Low-end device support',
    desc: 'The app is lightweight and fast on budget Android phones — the devices most agents actually use.',
  },
  {
    icon: '💸',
    title: 'No hidden costs',
    desc: 'No subscription fee, no data charges. The app is completely free and does not require an active SIM to operate.',
  },
]

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-label">About Us</span>
          <h1 className="page-hero-title">Built for Ghana's MoMo Agents</h1>
          <p className="page-hero-subtitle">
            MoneyFloat was created to solve a real problem: the daily reconciliation
            headache that every mobile money agent in Ghana knows all too well.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Mission</span>
            <h2 className="section-title">Empowering Agents with Accurate Records</h2>
            <p className="section-subtitle">
              We believe every MoMo agent — from a single kiosk operator to a
              multi-location vendor — deserves professional-grade financial tools
              that are simple, reliable, and free.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section section-light">
        <div className="container">
          <div className="about-story">
            <div className="about-story-text">
              <h2>The Story Behind MoneyFloat</h2>
              <p>
                Ghana's mobile money ecosystem is one of the most active in Africa,
                with hundreds of thousands of agents processing transactions daily
                for MTN MoMo, Telecel Cash, and AirtelTigo Money. Yet most of these
                agents still reconcile their books at the end of the day using pen
                and paper — or worse, from memory.
              </p>
              <p>
                The consequences are real: miscounted float, disputed transactions,
                and end-of-day shortfalls that come out of the agent's own pocket.
                MoneyFloat was born out of a direct observation of this pain. We
                watched agents spend 30–60 minutes every evening trying to balance
                their books, often getting it wrong.
              </p>
              <p>
                We asked one question: what if there was a simple app that did
                exactly what a MoMo agent needs — and nothing more? No bank account
                required, no internet, no monthly fee. Just open the app, log your
                transactions, and close your day with confidence.
              </p>
              <p>
                That question became MoneyFloat. Every design decision — from the
                offline-first architecture to the PIN-secured multi-agent support —
                was made with the Ghanaian MoMo agent in mind.
              </p>
            </div>

            <div className="about-visual">
              <h3>At a Glance</h3>
              <div className="about-stat-row">
                <div className="about-stat">
                  <span className="about-stat-icon">🇬🇭</span>
                  <div className="about-stat-info">
                    <strong>Made for Ghana</strong>
                    <span>Designed around Ghanaian MoMo workflows and networks</span>
                  </div>
                </div>
                <div className="about-stat">
                  <span className="about-stat-icon">📵</span>
                  <div className="about-stat-info">
                    <strong>100% Offline</strong>
                    <span>Works without any internet connection, ever</span>
                  </div>
                </div>
                <div className="about-stat">
                  <span className="about-stat-icon">📱</span>
                  <div className="about-stat-info">
                    <strong>Android-First</strong>
                    <span>Optimised for budget Android devices common in Ghana</span>
                  </div>
                </div>
                <div className="about-stat">
                  <span className="about-stat-icon">🔒</span>
                  <div className="about-stat-info">
                    <strong>On-Device Storage</strong>
                    <span>All data stored locally with SQLite — no cloud upload</span>
                  </div>
                </div>
                <div className="about-stat">
                  <span className="about-stat-icon">💰</span>
                  <div className="about-stat-info">
                    <strong>Free Forever</strong>
                    <span>No subscriptions, no premium tiers, no hidden fees</span>
                  </div>
                </div>
                <div className="about-stat">
                  <span className="about-stat-icon">👥</span>
                  <div className="about-stat-info">
                    <strong>Multi-Agent Ready</strong>
                    <span>Supports multiple agent profiles on a single device</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Ghana — Offline */}
      <section className="offline-section">
        <div className="container">
          <div className="offline-inner">
            <div className="offline-content">
              <h2>Why Offline-First Matters in Ghana</h2>
              <p>
                Building MoneyFloat as an offline-first application was not a
                technical choice — it was a user-first decision.
              </p>
              <div className="offline-points">
                {offlinePoints.map((pt) => (
                  <div className="offline-point" key={pt.title}>
                    <div className="offline-point-icon">{pt.icon}</div>
                    <p className="offline-point-text">
                      <strong>{pt.title}: </strong>{pt.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="offline-cards">
              <div className="offline-card">
                <div className="offline-card-emoji">🗄️</div>
                <div className="offline-card-title">SQLite Storage</div>
                <div className="offline-card-sub">Local database, no cloud sync</div>
              </div>
              <div className="offline-card">
                <div className="offline-card-emoji">🔐</div>
                <div className="offline-card-title">PIN Security</div>
                <div className="offline-card-sub">Hashed PINs, no plaintext stored</div>
              </div>
              <div className="offline-card">
                <div className="offline-card-emoji">📄</div>
                <div className="offline-card-title">PDF Export</div>
                <div className="offline-card-sub">Reports generated on-device</div>
              </div>
              <div className="offline-card">
                <div className="offline-card-emoji">⚡</div>
                <div className="offline-card-title">Instant Load</div>
                <div className="offline-card-sub">No network wait, always fast</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Values</span>
            <h2 className="section-title">What We Stand For</h2>
            <p className="section-subtitle">
              These four principles guide every decision we make about MoneyFloat —
              from feature design to how we handle your data.
            </p>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div className="value-card" key={v.title}>
                <div className="value-icon">{v.icon}</div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
