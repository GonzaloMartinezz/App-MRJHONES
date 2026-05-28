import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './VIPExperience.css'

const whatsappNumber = '5493811234567'

const tableOptions = [
  {
    title: 'El Búnker (The Vault)',
    description: 'Espacio semi-privado con servicio exclusivo de coctelería y total discreción.',
    meta: 'Hasta 8 personas · Consumo Mínimo $2000',
    status: 'Disponible',
    accent: 'vip',
  },
  {
    title: 'Lounge de la Terraza',
    description: 'Vistas elevadas, cómodos sillones y una iluminación tenue bajo el cielo abierto.',
    meta: '4-6 personas · Consumo Mínimo $800',
    status: 'Reservado',
    accent: 'reserved',
  },
  {
    title: 'Primera Fila (DJ Booth)',
    description: 'Mesas premium ubicadas al lado de la cabina del DJ para vivir la energía en primera fila.',
    meta: '2-4 personas · Consumo Mínimo $500',
    status: 'Disponible',
    accent: 'available',
  },
  {
    title: 'Pista Principal',
    description: 'El corazón del boliche. En el centro de la acción, dinámico y vibrante.',
    meta: 'Hasta 12 personas · Consumo Mínimo $600',
    status: 'Disponible',
    accent: 'vip',
  },
]

const drinkPromos = [
  {
    name: 'Aged Old Fashioned',
    label: 'Premium',
    detail: 'Bourbon reserva de 12 años, bitters ahumados, naranja caramelizada e hielo tallado a mano.',
    price: '$45',
  },
  {
    name: 'Signature Gold Martini',
    label: 'Premium',
    detail: 'Gin de partida limitada, vermut seco, finas láminas de oro comestible y final helado.',
    price: '$55',
  },
  {
    name: 'Midnight Espresso',
    label: 'Clásico',
    detail: 'Café espresso cold-brew, vodka premium y un toque de licor de cacao oscuro.',
    price: '$30',
  },
]

const VIPExperience = ({ isHome = false }) => {
  const [form, setForm] = useState({
    name: '',
    date: '',
    time: '',
    guests: '2 Personas',
    experience: 'El Búnker (The Vault)',
    notes: '',
  })

  const updateField = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const buildMessage = () => {
    return `Hola, quiero reservar una experiencia VIP en Mr. John's & Warhol.\n\nNombre: ${form.name || 'No especificado'}\nFecha: ${form.date || 'No especificado'}\nHora: ${form.time || 'No especificado'}\nCantidad de invitados: ${form.guests}\nExperiencia elegida: ${form.experience}\nComentarios adicionales: ${form.notes || 'Ninguno'}\n\nPor favor, confirmen disponibilidad y el siguiente paso para completar la reserva.`
  }

  const handleSubmit = event => {
    event.preventDefault()
    const message = buildMessage()
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="vip" id="vip">
      
      {/* Background Glows */}
      <div className="aurora-glow aurora-glow--vip" />

      <div className="vip__inner">
        <div className="vip__hero" style={{ backgroundImage: 'url("/img3.jpg")' }}>
          <div className="vip__hero-overlay" />
          <div className="vip__hero-content">
            <p className="vip__eyebrow">Experiencia VIP</p>
            <h2 className="vip__title">El Santuario VIP</h2>
            <p className="vip__subtitle">
              Accedé a nuestro círculo más selecto con tragos curados, mesas exclusivas y una atención premium diseñada para vivir la noche a otro nivel.
            </p>
            {isHome ? (
              <Link to="/vip" className="vip__hero-button">Reservá tu Mesa VIP</Link>
            ) : (
              <a href="#reserve" className="vip__hero-button">Reservá tu Mesa VIP</a>
            )}
          </div>
        </div>

        <div className={`vip__content ${isHome ? 'vip__content--promo' : ''}`}>
          <div className="vip__panel vip__panel--drinks glass-card">
            <div className="vip__section-header">
              <span className="vip__section-tag">Coctelería Premium</span>
              <h3>Nuestra Barra Seleccionada</h3>
              <p>Las mezclas y botellas más exclusivas para acompañar tu mesa VIP.</p>
            </div>
            <div className="vip__cards">
              {drinkPromos.map(drink => (
                <article key={drink.name} className="vip__card glass-card">
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

          {!isHome && (
            <>
              <div className="vip__panel vip__panel--tables glass-card">
                <div className="vip__section-header">
                  <span className="vip__section-tag">Distribución VIP</span>
                  <h3>Mapa Interactivo de Mesas</h3>
                  <p>Toca en el sector del salón preferido para seleccionarlo en el formulario de reservas.</p>
                </div>
                
                <div className="vip__tables-grid-layout">
                  {/* Interactive Salon Seating Grid */}
                  <div className="vip__map">
                    <div className="vip__map-grid">
                      <div 
                        className={`vip__map-card vip__map-card--big clickable ${form.experience === 'El Búnker (The Vault)' ? 'selected' : ''}`}
                        onClick={() => updateField('experience', 'El Búnker (The Vault)')}
                      >
                        <span className="vip__map-label">El Búnker (Vault)</span>
                        <p>Privacidad absoluta · Servicio dedicado · Hasta 8 pers.</p>
                        {form.experience === 'El Búnker (The Vault)' && <span className="selection-badge">✓ Seleccionado</span>}
                      </div>
                      
                      <div 
                        className={`vip__map-card vip__map-card--side clickable ${form.experience === 'Lounge de la Terraza' ? 'selected' : ''}`}
                        onClick={() => updateField('experience', 'Lounge de la Terraza')}
                      >
                        <span className="vip__map-label">Lounge Terraza</span>
                        <p>Aire libre · Vista elevada · 4-6 pers.</p>
                        {form.experience === 'Lounge de la Terraza' && <span className="selection-badge">✓ Seleccionado</span>}
                      </div>
                      
                      <div 
                        className={`vip__map-card vip__map-card--side clickable ${form.experience === 'Primera Fila (DJ Booth)' ? 'selected' : ''}`}
                        onClick={() => updateField('experience', 'Primera Fila (DJ Booth)')}
                      >
                        <span className="vip__map-label">Primera Fila</span>
                        <p>Cerca del DJ · Máxima energía · 2-4 pers.</p>
                        {form.experience === 'Primera Fila (DJ Booth)' && <span className="selection-badge">✓ Seleccionado</span>}
                      </div>
                      
                      <div 
                        className={`vip__map-card vip__map-card--wide clickable ${form.experience === 'Pista Principal' ? 'selected' : ''}`}
                        onClick={() => updateField('experience', 'Pista Principal')}
                      >
                        <span className="vip__map-label">Pista Principal</span>
                        <p>El centro de la noche · Hasta 12 pers.</p>
                        {form.experience === 'Pista Principal' && <span className="selection-badge">✓ Seleccionado</span>}
                      </div>
                    </div>
                  </div>

                  <div className="vip__table-list">
                    {tableOptions.map(table => (
                      <article 
                        key={table.title} 
                        className={`vip__table-item clickable ${form.experience === table.title ? 'selected-row' : ''}`}
                        onClick={() => updateField('experience', table.title)}
                      >
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
              </div>

              <div className="vip__panel vip__panel--reserve glass-card" id="reserve">
                <div className="vip__section-header vip__section-header--reserve">
                  <span className="vip__section-tag">Reservas Exclusivas</span>
                  <h3>Solicitar Mesa VIP</h3>
                  <p>Completá el formulario y te contactaremos por WhatsApp para coordinar tu ingreso.</p>
                </div>
                <form className="vip__form" onSubmit={handleSubmit}>
                  {/* Sección 1: Información de Contacto */}
                  <fieldset className="vip__form-section">
                    <legend className="vip__form-legend">
                      <span className="vip__legend-number">01</span>
                      <span className="vip__legend-text">Información de Contacto</span>
                    </legend>
                    <div className="vip__form-section-content">
                      <label className="vip__form-label">
                        Nombre Completo
                        <div className="vip__input-wrapper">
                          <svg className="vip__input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                          <input
                            type="text"
                            value={form.name}
                            onChange={e => updateField('name', e.target.value)}
                            placeholder="Ej: Gonzalo Martínez"
                            required
                          />
                        </div>
                      </label>
                      
                      <label className="vip__form-label">
                        Cantidad de Invitados
                        <div className="vip__input-wrapper">
                          <select value={form.guests} onChange={e => updateField('guests', e.target.value)}>
                            <option>2 Personas</option>
                            <option>4 Personas</option>
                            <option>6 Personas</option>
                            <option>8 Personas</option>
                            <option>10+ Personas</option>
                          </select>
                        </div>
                      </label>
                    </div>
                  </fieldset>

                  {/* Sección 2: Fecha y Hora del Ingreso */}
                  <fieldset className="vip__form-section">
                    <legend className="vip__form-legend">
                      <span className="vip__legend-number">02</span>
                      <span className="vip__legend-text">Fecha &amp; Hora de Reserva</span>
                    </legend>
                    <div className="vip__form-section-content">
                      <label className="vip__form-label">
                        Fecha de Reserva
                        <div className="vip__input-wrapper">
                          <input
                            type="date"
                            value={form.date}
                            onChange={e => updateField('date', e.target.value)}
                            required
                          />
                        </div>
                      </label>
                      
                      <label className="vip__form-label">
                        Hora de Ingreso
                        <div className="vip__input-wrapper">
                          <input
                            type="time"
                            value={form.time}
                            onChange={e => updateField('time', e.target.value)}
                            required
                          />
                        </div>
                      </label>
                    </div>
                  </fieldset>

                  {/* Sección 3: Preferencias VIP */}
                  <fieldset className="vip__form-section">
                    <legend className="vip__form-legend">
                      <span className="vip__legend-number">03</span>
                      <span className="vip__legend-text">Preferencia de Mesa &amp; Detalles</span>
                    </legend>
                    <div className="vip__form-section-content vip__form-section-content--wide">
                      <label className="vip__form-label">
                        Experiencia VIP Preferida
                        <div className="vip__input-wrapper">
                          <select value={form.experience} onChange={e => updateField('experience', e.target.value)}>
                            <option value="El Búnker (The Vault)">El Búnker (The Vault)</option>
                            <option value="Lounge de la Terraza">Lounge de la Terraza</option>
                            <option value="Primera Fila (DJ Booth)">Primera Fila (DJ Booth)</option>
                            <option value="Pista Principal">Pista Principal</option>
                          </select>
                        </div>
                      </label>

                      <label className="vip__form-label">
                        Pedidos Especiales / Comentarios
                        <div className="vip__input-wrapper">
                          <textarea
                            rows="4"
                            value={form.notes}
                            onChange={e => updateField('notes', e.target.value)}
                            placeholder="Contanos si celebrás algo especial, preferencias de bebidas o requisitos del grupo..."
                          />
                        </div>
                      </label>
                    </div>
                  </fieldset>

                  <div className="vip__form-submit-container">
                    <button type="submit" className="vip__submit-button">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
                        <path d="M12.031 2c-5.514 0-9.969 4.456-9.969 9.971 0 1.625.387 3.206 1.129 4.629L2 22l5.549-1.455c1.396.7 2.942 1.071 4.482 1.071 5.515 0 9.969-4.455 9.969-9.971C22 6.456 17.546 2 12.031 2zM12 20c-1.482 0-2.93-.388-4.195-1.125l-.302-.178-3.118.817.83-3.04-.196-.312C4.269 14.88 3.654 13.468 3.654 12c0-4.602 3.743-8.346 8.346-8.346s8.346 3.743 8.346 8.346S16.602 20 12 20zM16.617 13.918c-.254-.127-1.503-.742-1.737-.827-.234-.085-.405-.127-.576.128-.172.255-.662.827-.812.998-.15.17-.3.191-.554.064-.254-.128-1.071-.395-2.04-1.26-.754-.672-1.263-1.504-1.411-1.759-.148-.255-.016-.393.111-.52.115-.114.254-.297.381-.446.127-.149.17-.255.254-.425.085-.17.043-.319-.021-.446-.064-.127-.576-1.387-.79-1.897-.208-.5-.436-.43-.597-.43-.153-.005-.33-.005-.507-.005-.177 0-.466.066-.71.332-.244.266-.931.91-.931 2.22 0 1.31.954 2.576 1.087 2.75 1.483 1.942 2.87 2.844 4.887 3.633.48.188.948.3 1.3.414.88.28 1.68.24 2.312.146.705-.105 2.164-.885 2.469-1.738.305-.852.305-1.583.213-1.738-.09-.154-.254-.239-.508-.367z"/>
                      </svg>
                      Enviar Consulta por WhatsApp
                    </button>
                  </div>
                </form>
                <div className="vip__note">
                  Las reservas están sujetas a aprobación de la casa. Nuestro concierge se pondrá en contacto con vos para coordinar el ingreso definitivo y las señas correspondientes.
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default VIPExperience
