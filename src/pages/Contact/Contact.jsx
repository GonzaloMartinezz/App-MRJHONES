import React, { useState } from 'react'
import '../../index.css'
import './Contact.css'

const whatsappNumber = '5493811234567'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const updateField = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    const message = `Hola, quiero reservar una mesa VIP.\n\nNombre: ${form.name || 'No especificado'}\nEmail: ${form.email || 'No especificado'}\nMensaje: ${form.message || 'Ninguno'}\n\nPor favor, contáctenme para confirmar.`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="contact-page">
      <div className="contact-page__hero">
        <p className="contact-page__eyebrow">Concierge Desk</p>
        <h1 className="contact-page__title">Secure Your Night</h1>
        <p className="contact-page__subtitle">
          Our concierge team is ready to craft the ultimate VIP reservation.
          Submit your details and we will follow up with a personalized proposal.
        </p>
        <a
          className="contact-page__cta"
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, quiero reservar una mesa VIP. Por favor, contáctenme.')}`}
          target="_blank"
          rel="noreferrer"
        >
          Message via WhatsApp
        </a>
      </div>

      <div className="contact-page__grid">
        <div className="contact-card contact-card--info">
          <span className="contact-card__tag">Contact Details</span>
          <h2>VIP Reservations</h2>
          <p>Reach our concierge directly for table designation, bottle service and private guestlist access.</p>
          <div className="contact-card__meta">
            <div>
              <strong>Location</strong>
              <p>Av. Aconquija 1702, Yerba Buena, Tucumán</p>
            </div>
            <div>
              <strong>Phone</strong>
              <p>+54 9 381 123-4567</p>
            </div>
            <div>
              <strong>Email</strong>
              <p>concierge@mrjohnsandwarhol.com</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Full Name
            <input
              type="text"
              value={form.name}
              onChange={e => updateField('name', e.target.value)}
              placeholder="Alexander Vane"
              required
            />
          </label>
          <label>
            Email Address
            <input
              type="email"
              value={form.email}
              onChange={e => updateField('email', e.target.value)}
              placeholder="alex@mrjohns.com"
              required
            />
          </label>
          <label>
            Message
            <textarea
              rows="5"
              value={form.message}
              onChange={e => updateField('message', e.target.value)}
              placeholder="Tell us your preferred night, party size, or special requirements"
            />
          </label>
          <button type="submit" className="contact-form__submit">Send via WhatsApp</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
