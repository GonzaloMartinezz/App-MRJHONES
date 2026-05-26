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
    const message = `Hola, quiero hacer una consulta.\n\nNombre: ${form.name || 'No especificado'}\nEmail: ${form.email || 'No especificado'}\nMensaje: ${form.message || 'Ninguno'}\n\nPor favor, contáctenme para confirmar.`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="contact-container" style={{ position: 'relative', overflow: 'hidden', width: '100%', backgroundColor: 'var(--black)' }}>
      <div className="aurora-glow aurora-glow--gold" style={{ top: '20%', left: '-10%' }} />
      <div className="aurora-glow aurora-glow--amber" style={{ top: '65%', right: '-10%' }} />

      <section className="contact-page" style={{ position: 'relative', zIndex: 1 }}>
        <div className="contact-page__hero" style={{ backgroundImage: 'url("/interior.jpg")' }}>
          <div className="contact-page__hero-overlay" />
          <div className="contact-page__hero-content">
            <p className="contact-page__eyebrow">Conserjería VIP</p>
            <h1 className="contact-page__title">Asegurá tu noche</h1>
            <p className="contact-page__subtitle">
              Nuestro equipo de conserjería y relaciones públicas está listo para preparar tu reserva VIP ideal.
              Completá tus datos y te responderemos con una propuesta personalizada para tu grupo.
            </p>
            <a
              className="contact-page__cta"
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, quiero reservar una mesa VIP. Por favor, contáctenme.')}`}
              target="_blank"
              rel="noreferrer"
            >
              Mensaje Directo por WhatsApp
            </a>
          </div>
        </div>

        <div className="contact-page__grid">
          <div className="contact-card contact-card--info">
            <span className="contact-card__tag">Datos de Contacto</span>
            <h2>Reservas Selectas</h2>
            <p>Contactanos de forma directa para asignación de mesas premium, servicio de botellas personalizadas y accesos a listas exclusivas.</p>
            <div className="contact-card__meta">
              <div>
                <strong>Ubicación</strong>
                <p>Av. Aconquija 1702, Yerba Buena, Tucumán</p>
              </div>
              <div>
                <strong>Teléfono</strong>
                <p>+54 9 381 123-4567</p>
              </div>
              <div>
                <strong>Email</strong>
                <p>conserjeria@mrjohns.com</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Nombre Completo
              <input
                type="text"
                value={form.name}
                onChange={e => updateField('name', e.target.value)}
                placeholder="Ej: Gonzalo Martínez"
                required
              />
            </label>
            <label>
              Correo Electrónico
              <input
                type="email"
                value={form.email}
                onChange={e => updateField('email', e.target.value)}
                placeholder="gonzalo@gmail.com"
                required
              />
            </label>
            <label>
              Mensaje / Consulta
              <textarea
                rows="5"
                value={form.message}
                onChange={e => updateField('message', e.target.value)}
                placeholder="Detallanos qué fecha preferís, cantidad de personas en tu grupo o cualquier pedido especial..."
              />
            </label>
            <button type="submit" className="contact-form__submit">Enviar por WhatsApp</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
