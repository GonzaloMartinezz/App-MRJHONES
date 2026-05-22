import React, { useState } from 'react'
import './VIPExperience.css'

const whatsappNumber = '5493811234567'

const tableOptions = [
  {
    title: 'The Vault',
    description: 'Private alcove with dedicated service and total discretion.',
    meta: 'Up to 8 guests · Min Spend $2,000',
    status: 'Available',
    accent: 'vip',
  },
  {
    title: 'Terrace Lounge',
    description: 'Panoramic views, elevated seating and curated lighting.',
    meta: '4-6 guests · Min Spend $800',
    status: 'Reserved',
    accent: 'reserved',
  },
  {
    title: 'Front Row',
    description: 'Premium tables adjacent to the DJ booth for maximum exposure.',
    meta: '2-4 guests · Min Spend $500',
    status: 'Available',
    accent: 'available',
  },
  {
    title: 'Main Floor',
    description: 'The heartbeat of the club. Dynamic, social and vibrant.',
    meta: 'Up to 12 guests · Min Spend $600',
    status: 'Available',
    accent: 'vip',
  },
]

const drinkPromos = [
  {
    name: 'Aged Old Fashioned',
    label: 'Premium',
    detail: '12-year reserve bourbon, smoked bitters, charred orange and hand-carved ice.',
    price: '$45',
  },
  {
    name: 'Signature Gold Martini',
    label: 'Premium',
    detail: 'Small-batch gin, dry vermouth, edible gold leaf and a silk-cold finish.',
    price: '$55',
  },
  {
    name: 'Midnight Espresso',
    label: 'Standard',
    detail: 'Cold-brew espresso, premium vodka and a dash of dark cocoa liqueur.',
    price: '$30',
  },
]

const VIPExperience = () => {
  const [form, setForm] = useState({
    name: '',
    date: '',
    time: '',
    guests: '2 Guests',
    experience: 'The Vault',
    notes: '',
  })

  const updateField = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const buildMessage = () => {
    return `Hola, quiero reservar una experiencia VIP en Mr. Johns & Warhol.\n\nNombre: ${form.name || 'No especificado'}\nFecha: ${form.date || 'No especificado'}\nHora: ${form.time || 'No especificado'}\nCantidad de invitados: ${form.guests}\nExperiencia elegida: ${form.experience}\nComentarios adicionales: ${form.notes || 'Ninguno'}\n\nPor favor, confirmen disponibilidad y el siguiente paso para completar la reserva.`
  }

  const handleSubmit = event => {
    event.preventDefault()
    const message = buildMessage()
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="vip" id="vip">
      <div className="vip__inner">
        <div className="vip__hero">
          <p className="vip__eyebrow">VIP Experience</p>
          <h2 className="vip__title">The VIP Sanctuary</h2>
          <p className="vip__subtitle">
            Step into the inner circle with curated drinks, prime tables and a club layout built for nightlife royalty.
          </p>
          <a href="#reserve" className="vip__hero-button">Reserve Your Table</a>
        </div>

        <div className="vip__content">
          <div className="vip__panel vip__panel--drinks">
            <div className="vip__section-header">
              <span className="vip__section-tag">The Best Drinks</span>
              <h3>Promociones de bebidas</h3>
              <p>Las mezclas más exclusivas para acompañar tu mesa VIP.</p>
            </div>
            <div className="vip__cards">
              {drinkPromos.map(drink => (
                <article key={drink.name} className="vip__card">
                  <div className="vip__card-header">
                    <h4>{drink.name}</h4>
                    <span className={`vip__label vip__label--${drink.label.toLowerCase()}`}>{drink.label}</span>
                  </div>
                  <p>{drink.detail}</p>
                  <div className="vip__price">{drink.price}</div>
                </article>
              ))}
            </div>
          </div>

          <div className="vip__panel vip__panel--tables">
            <div className="vip__section-header">
              <span className="vip__section-tag">Available Tables</span>
              <h3>Ubicación de mesas</h3>
              <p>Un mapa conceptual para elegir la mejor posición en el boliche.</p>
            </div>
            <div className="vip__map">
              <div className="vip__map-grid">
                <div className="vip__map-card vip__map-card--big">
                  <span className="vip__map-label">The Vault</span>
                  <p>Private room · Top privacy · Up to 8 guests</p>
                </div>
                <div className="vip__map-card vip__map-card--side">
                  <span className="vip__map-label">Terrace Lounge</span>
                  <p>City views · Elevated seating · 4-6 guests</p>
                </div>
                <div className="vip__map-card vip__map-card--side">
                  <span className="vip__map-label">Front Row</span>
                  <p>DJ booth access · High visibility · 2-4 guests</p>
                </div>
                <div className="vip__map-card vip__map-card--wide">
                  <span className="vip__map-label">Main Floor</span>
                  <p>Social heart · Up to 12 guests · Electric atmosphere</p>
                </div>
              </div>
            </div>
            <div className="vip__table-list">
              {tableOptions.map(table => (
                <article key={table.title} className="vip__table-item">
                  <div>
                    <h4>{table.title}</h4>
                    <p>{table.description}</p>
                  </div>
                  <div className="vip__meta-group">
                    <span className={`vip__status vip__status--${table.accent}`}>{table.status}</span>
                    <span className="vip__meta">{table.meta}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="vip__panel vip__panel--reserve" id="reserve">
            <div className="vip__section-header vip__section-header--reserve">
              <span className="vip__section-tag">Secure Your Experience</span>
              <h3>Request a Table</h3>
              <p>Complete the form and enviaremos todos tus datos directamente a WhatsApp.</p>
            </div>
            <form className="vip__form" onSubmit={handleSubmit}>
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
              <div className="vip__form-row">
                <label>
                  Date
                  <input
                    type="date"
                    value={form.date}
                    onChange={e => updateField('date', e.target.value)}
                    required
                  />
                </label>
                <label>
                  Time
                  <input
                    type="time"
                    value={form.time}
                    onChange={e => updateField('time', e.target.value)}
                    required
                  />
                </label>
              </div>
              <label>
                Guest Count
                <select value={form.guests} onChange={e => updateField('guests', e.target.value)}>
                  <option>2 Guests</option>
                  <option>4 Guests</option>
                  <option>6 Guests</option>
                  <option>8 Guests</option>
                  <option>10+ Guests</option>
                </select>
              </label>
              <label>
                Preferred Experience
                <select value={form.experience} onChange={e => updateField('experience', e.target.value)}>
                  <option>The Vault</option>
                  <option>Terrace Lounge</option>
                  <option>Front Row</option>
                  <option>Main Floor</option>
                </select>
              </label>
              <label>
                Special Requests
                <textarea
                  rows="4"
                  value={form.notes}
                  onChange={e => updateField('notes', e.target.value)}
                  placeholder="Allergies, preferred spirits, specific table requests..."
                />
              </label>
              <button type="submit" className="vip__submit-button">Send via WhatsApp</button>
            </form>
            <div className="vip__note">
              Reservations are subject to approval. Our concierge will contact you to confirm the final details.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VIPExperience
