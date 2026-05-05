import { useState } from 'react'

const subjectOptions = [
  { value: '', label: 'Select a subject' },
  { value: 'general', label: 'General Inquiry' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'technical', label: 'Technical Issue' },
  { value: 'feedback', label: 'Feedback' },
]

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required.'
    if (!form.email.trim()) newErrors.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Please enter a valid email.'
    if (!form.subject) newErrors.subject = 'Please select a subject.'
    if (!form.message.trim()) newErrors.message = 'Message is required.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-label">Contact</span>
          <h1 className="page-hero-title">Get in Touch</h1>
          <p className="page-hero-subtitle">
            Have a question, partnership idea, or just want to say hello? We'd
            love to hear from you. We typically respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Info */}
            <div>
              <div className="contact-info">
                <div className="contact-info-card">
                  <div className="contact-info-icon">✉️</div>
                  <div className="contact-info-body">
                    <h4>Email</h4>
                    <p>support@moneyfloat.app</p>
                    <span>For all inquiries and support requests</span>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">📍</div>
                  <div className="contact-info-body">
                    <h4>Location</h4>
                    <p>Accra, Ghana</p>
                    <span>West Africa — GMT+0</span>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">⏱️</div>
                  <div className="contact-info-body">
                    <h4>Response Time</h4>
                    <p>Within 24 Hours</p>
                    <span>Monday–Friday, business hours</span>
                  </div>
                </div>
              </div>

              <div className="contact-social" style={{ marginTop: '24px' }}>
                <h4 style={{
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#6C757D',
                  marginBottom: '12px',
                }}>
                  Follow Us
                </h4>
                <div className="social-links">
                  <span className="social-link">🐦 Twitter</span>
                  <span className="social-link">📘 Facebook</span>
                  <span className="social-link">📸 Instagram</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-card">
              <h3>Send a Message</h3>
              <p>Fill in the form below and we'll get back to you as soon as possible.</p>

              {submitted ? (
                <div className="form-success">
                  ✅ Thank you for your message! We'll get back to you within 24 hours.
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
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
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
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
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      style={errors.subject ? { borderColor: '#E74C3C' } : {}}
                    >
                      {subjectOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} disabled={!opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {errors.subject && (
                      <span style={{ color: '#E74C3C', fontSize: '0.78rem', marginTop: '4px', display: 'block' }}>
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us how we can help..."
                      value={form.message}
                      onChange={handleChange}
                      style={errors.message ? { borderColor: '#E74C3C' } : {}}
                    />
                    {errors.message && (
                      <span style={{ color: '#E74C3C', fontSize: '0.78rem', marginTop: '4px', display: 'block' }}>
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <button type="submit" className="btn btn-navy form-submit">
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
