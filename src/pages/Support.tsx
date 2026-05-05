import { useState } from 'react'

const faqs = [
  {
    question: 'What is MoneyFloat?',
    answer:
      'MoneyFloat is a free Android app designed for mobile money (MoMo) agents and vendors in Ghana. It replaces manual bookkeeping by digitally tracking your cash and e-money float balances across every transaction. It supports MTN MoMo, Telecel Cash, and AirtelTigo Money, and works completely offline — your data never leaves your device.',
  },
  {
    question: 'How do I open a new session?',
    answer:
      'To open a new session, tap the "Open Session" button on the home screen (or from your agent dashboard). Enter your opening cash balance and your opening e-money float balance, then confirm. The app will start a new session and begin tracking all transactions from that point. You should open one session per working day.',
  },
  {
    question: 'What is a mid-day top-up and when should I record one?',
    answer:
      'A top-up is when you add more e-money float to your account mid-session — for example, when you receive a float transfer from your aggregator during the day. You should record a top-up immediately after receiving the transfer so that your running balance stays accurate. Tap "Top Up" from within an open session and enter the amount.',
  },
  {
    question: 'How do I export a PDF report?',
    answer:
      'From a closed session\'s detail screen, tap the "Export PDF" button. The app will generate a complete summary of that session — including opening balances, all transactions, top-ups, and the final reconciliation — and open Android\'s share sheet. You can save the PDF to your device, send it via WhatsApp, email it, or print it. No internet is required.',
  },
  {
    question: 'What do I do if I forgot my PIN?',
    answer:
      'Because MoneyFloat stores all data locally with no cloud backup, there is no "forgot PIN" email reset. If you forget your PIN, you will need to either try the PIN options you remember, or contact the admin who set up your profile (if you are an agent on a shared device). As a last resort, the device owner can delete and re-create the agent profile — note that this will delete that agent\'s session history.',
  },
  {
    question: 'Can multiple agents use MoneyFloat on the same device?',
    answer:
      'Yes. MoneyFloat supports multiple agent profiles on a single device. Each agent has their own name, phone number, PIN, and independent session history. Agents are kept completely separate — one agent cannot see another\'s transactions. This makes it ideal for a business owner managing a team of operators on a shared phone or tablet.',
  },
  {
    question: 'What happens to my data if I uninstall the app?',
    answer:
      'Uninstalling MoneyFloat permanently deletes all data stored by the app — this includes all agent profiles, sessions, transaction records, and settings. There is no cloud backup, so the data cannot be recovered after uninstallation. If you want to preserve your records, make sure to export PDF reports for each important session before uninstalling.',
  },
  {
    question: 'Which mobile money networks does MoneyFloat support?',
    answer:
      'MoneyFloat currently supports Ghana\'s three major mobile money networks: MTN MoMo, Telecel Cash (formerly Vodafone Cash), and AirtelTigo Money. When opening a session or recording a transaction, you can select which network it belongs to. Support for additional networks may be added in future updates.',
  },
  {
    question: 'Does MoneyFloat work without an internet connection?',
    answer:
      'Yes — MoneyFloat is 100% offline. It does not require an internet connection to open sessions, record transactions, perform reconciliation, or generate PDF reports. All data is stored locally on your device in a SQLite database. The app was specifically designed this way because many MoMo agent locations in Ghana have unreliable or expensive data connectivity.',
  },
  {
    question: 'What Android version do I need to run MoneyFloat?',
    answer:
      'MoneyFloat is compatible with Android 6.0 (Marshmallow) and above. It is optimised to run smoothly on low-end and mid-range Android devices, which are the most common devices among MoMo agents in Ghana. The app has a small install size and does not require significant storage or RAM to operate efficiently.',
  },
]

const issueTypes = [
  { value: '', label: 'Select issue type' },
  { value: 'bug', label: 'Bug / App crash' },
  { value: 'session', label: 'Session issue' },
  { value: 'pdf', label: 'PDF export issue' },
  { value: 'pin', label: 'PIN / Login issue' },
  { value: 'data', label: 'Data / Balance issue' },
  { value: 'other', label: 'Other' },
]

interface SupportFormState {
  name: string
  email: string
  issueType: string
  description: string
}

export default function Support() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [form, setForm] = useState<SupportFormState>({
    name: '',
    email: '',
    issueType: '',
    description: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<SupportFormState>>({})

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const validate = (): boolean => {
    const newErrors: Partial<SupportFormState> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required.'
    if (!form.email.trim()) newErrors.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Please enter a valid email.'
    if (!form.issueType) newErrors.issueType = 'Please select an issue type.'
    if (!form.description.trim()) newErrors.description = 'Description is required.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof SupportFormState]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
      setForm({ name: '', email: '', issueType: '', description: '' })
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-label">Support</span>
          <h1 className="page-hero-title">How Can We Help?</h1>
          <p className="page-hero-subtitle">
            Find answers to common questions below, or submit a support request
            and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="support-layout">
            {/* FAQ */}
            <div>
              <div className="section-header" style={{ textAlign: 'left', marginBottom: '28px' }}>
                <span className="section-label">FAQ</span>
                <h2 className="section-title" style={{ fontSize: '1.7rem' }}>
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="faq-list" role="list">
                {faqs.map((faq, index) => (
                  <div
                    className={`faq-item${openIndex === index ? ' open' : ''}`}
                    key={index}
                    role="listitem"
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={openIndex === index}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <span className="faq-question-text">{faq.question}</span>
                      <span className="faq-chevron" aria-hidden="true">▼</span>
                    </button>
                    <div
                      className="faq-answer-wrapper"
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                    >
                      <div className="faq-answer-inner">
                        <div className="faq-answer">{faq.answer}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Form */}
            <div className="support-form-section">
              <h2>Submit a Support Request</h2>
              <p>
                Can't find what you're looking for? Describe your issue and our
                support team will respond within 24 hours.
              </p>

              <div className="support-form-card">
                {submitted ? (
                  <div className="form-success">
                    ✅ Your support request has been submitted. We'll be in touch within 24 hours!
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                      <label htmlFor="support-name">Full Name</label>
                      <input
                        type="text"
                        id="support-name"
                        name="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        style={errors.name ? { borderColor: '#E74C3C' } : {}}
                      />
                      {errors.name && (
                        <span style={{ color: '#E74C3C', fontSize: '0.78rem', marginTop: '4px', display: 'block' }}>
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="support-email">Email Address</label>
                      <input
                        type="email"
                        id="support-email"
                        name="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        style={errors.email ? { borderColor: '#E74C3C' } : {}}
                      />
                      {errors.email && (
                        <span style={{ color: '#E74C3C', fontSize: '0.78rem', marginTop: '4px', display: 'block' }}>
                          {errors.email}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="support-issue">Issue Type</label>
                      <select
                        id="support-issue"
                        name="issueType"
                        value={form.issueType}
                        onChange={handleChange}
                        style={errors.issueType ? { borderColor: '#E74C3C' } : {}}
                      >
                        {issueTypes.map((opt) => (
                          <option key={opt.value} value={opt.value} disabled={!opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      {errors.issueType && (
                        <span style={{ color: '#E74C3C', fontSize: '0.78rem', marginTop: '4px', display: 'block' }}>
                          {errors.issueType}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="support-description">Describe Your Issue</label>
                      <textarea
                        id="support-description"
                        name="description"
                        placeholder="Please describe your issue in as much detail as possible — including what you were doing when it happened, any error messages you saw, and your Android version if known..."
                        value={form.description}
                        onChange={handleChange}
                        style={errors.description ? { borderColor: '#E74C3C' } : {}}
                      />
                      {errors.description && (
                        <span style={{ color: '#E74C3C', fontSize: '0.78rem', marginTop: '4px', display: 'block' }}>
                          {errors.description}
                        </span>
                      )}
                    </div>

                    <button type="submit" className="btn btn-navy form-submit">
                      Submit Request →
                    </button>
                  </form>
                )}
              </div>

              <div className="still-need-help">
                <h3>Still Need Help?</h3>
                <p>
                  Our support team is available Monday through Friday and responds
                  to all messages within 24 hours. Don't hesitate to reach out.
                </p>
                <a href="mailto:support@moneyfloat.app">
                  ✉️ support@moneyfloat.app
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
