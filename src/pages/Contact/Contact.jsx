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
              <div className="contact-card__meta-item">
                <strong>Ubicación</strong>
                <p>Av. Aconquija 1702, Yerba Buena, Tucumán</p>
              </div>
              <div className="contact-card__meta-item">
                <strong>Horarios &amp; Días</strong>
                <p className="contact-card__schedule">
                  <span>Viernes y Sábados:</span> 11:30 PM - 06:00 AM<br />
                  <span>Vísperas de Feriados:</span> 11:30 PM - 06:00 AM
                </p>
              </div>
              <div className="contact-card__meta-item">
                <strong>Teléfono</strong>
                <p>+54 9 381 123-4567</p>
              </div>
              <div className="contact-card__meta-item">
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

        {/* Interactive Styled Google Map Section */}
        <div className="contact-page__map-section">
          <div className="contact-page__map-header">
            <span className="contact-page__map-tag">Ubicación</span>
            <h2 className="contact-page__map-title">Cómo llegar al Templo</h2>
          </div>
          <div className="contact-page__map-container glass-card">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.106098254714!2d-65.2917537!3d-26.8190772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7ff3303%3A0x6b4ef84c7e6c381c!2sAv.%20Aconquija%201702%2C%20Yerba+Buena%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar"
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Mr. John's & Warhol"
            ></iframe>
          </div>
        </div>

        {/* Luxury Brands Sponsor Cloud Section */}
        <div className="contact-page__sponsors-section">
          <h3 className="contact-page__sponsors-title">Sponsors Oficiales del Templo</h3>
          <div className="sponsors-grid">
            {['Boucheron', 'Steinway', 'Rolex', 'Dom Pérignon', 'Vogue'].map(brand => (
              <div key={brand} className="sponsor-item">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
