import React, { useState } from 'react'
import './ReservationModal.css'

const whatsappNumber = '5493811234567'

const drinkPackages = [
  'Tragos de Autor',
  'Servicio de Botellas Premium',
  'Brindis con Espumante',
  'Mixología Libre (Barra Libre)',
]

const tableOptions = [
  'Sillón Privado (Sofa VIP)',
  'Lounge de Esquina',
  'Mesa de Barra Monumental',
  'Mesa en Terraza al Aire Libre',
]

const eventOccasions = [
  'Celebración de Cumpleaños',
  'Recepción / Fiesta Privada',
  'Evento Corporativo / Fin de Año',
  'Aniversario / Festejo Especial',
]

const tableImageMap = {
  'Sillón Privado (Sofa VIP)': { src: '/frente2.jpg', label: 'Sector VIP Principal' },
  'Lounge de Esquina': { src: '/img3.jpg', label: 'Santuario VIP Warhol' },
  'Mesa de Barra Monumental': { src: '/HeroSeccion.png', label: 'Barra Histórica' },
  'Mesa en Terraza al Aire Libre': { src: '/interior.jpg', label: 'Terraza Warhol' },
}

const ReservationModal = ({ open, onClose }) => {
  const [step, setStep] = useState(1)
  const [reservationType, setReservationType] = useState('Reserva de Mesa')
  const [eventOccasion, setEventOccasion] = useState(eventOccasions[0])
  const [tableSelection, setTableSelection] = useState(tableOptions[0])
  const [drinkPackage, setDrinkPackage] = useState(drinkPackages[0])
  const [partySize, setPartySize] = useState('2-4 Personas')
  const [resDate, setResDate] = useState('')
  const [resTime, setResTime] = useState('')
  const [specialRequest, setSpecialRequest] = useState('')

  const activeImage = tableImageMap[tableSelection] || tableImageMap[tableOptions[0]]

  const handleNext = () => {
    if (step === 2 && (!resDate || !resTime)) {
      alert('Por favor selecciona la fecha y hora de tu reserva.')
      return
    }
    setStep(prev => Math.min(prev + 1, 3))
  }

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1))
  }

  const handleReserveNow = () => {
    const message = `Hola, quiero reservar en Mr. John's & Warhol.%0A%0ATipo de reserva: ${reservationType}%0A${reservationType === 'Reserva de Evento' ? `Ocasión: ${eventOccasion}%0A` : ''}Mesa preferida: ${tableSelection}%0APaquete de bebidas: ${drinkPackage}%0ATamaño del grupo: ${partySize}%0AFecha de reserva: ${resDate}%0AHora de ingreso: ${resTime}%0APedidos Especiales: ${specialRequest || 'Sin comentarios'}%0A%0APor favor confirmen la disponibilidad.`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const handleModalClose = () => {
    setStep(1)
    onClose()
  }

  if (!open) return null

  return (
    <div className="reservation-modal__backdrop" role="dialog" aria-modal="true" onClick={handleModalClose}>
      <div className="reservation-modal" onClick={event => event.stopPropagation()}>
        
        {/* Progress Bar */}
        <div className="reservation-modal__progress-bar">
          <div 
            className="reservation-modal__progress-fill" 
            style={{ width: `${(step / 3) * 100}%` }} 
          />
        </div>

        <div className="reservation-modal__top">
          <div>
            <span className="reservation-modal__eyebrow">Planificador de Reservas · Paso {step} de 3</span>
            <h2>Diseñá tu noche VIP</h2>
            <p>Elegí la combinación ideal para una experiencia nocturna inigualable.</p>
          </div>
          <button className="reservation-modal__close" type="button" onClick={handleModalClose} aria-label="Cerrar modal">×</button>
        </div>

        <div className="reservation-modal__content-grid">
          
          {/* Active Step Panel */}
          <div className="reservation-modal__form-panel">
            {step === 1 && (
              <div className="reservation-modal__step-view animate-fade-in">
                <h3 className="step-title">Paso 1: Seleccioná tu Sector</h3>
                <p className="step-subtitle">Elegí el estilo de tu reserva y el sector preferido del club.</p>
                
                <label>
                  Tipo de Reserva
                  <select value={reservationType} onChange={e => setReservationType(e.target.value)}>
                    <option>Reserva de Mesa</option>
                    <option>Reserva de Evento</option>
                    <option>Paquete Cumpleaños</option>
                    <option>Servicio de Botellas VIP</option>
                  </select>
                </label>

                {reservationType === 'Reserva de Evento' && (
                  <label className="animate-fade-in-up">
                    Ocasión del Evento
                    <select value={eventOccasion} onChange={e => setEventOccasion(e.target.value)}>
                      {eventOccasions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </label>
                )}

                <label>
                  Ubicación / Mesa Preferida
                  <select value={tableSelection} onChange={e => setTableSelection(e.target.value)}>
                    {tableOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </label>
                
                <div className="salon-image-indicator-mobile">
                  <p>Previsualización del Sector Seleccionado:</p>
                  <div 
                    className="salon-mobile-preview"
                    style={{ backgroundImage: `url(${activeImage.src})` }}
                  />
                  <span>{activeImage.label}</span>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="reservation-modal__step-view animate-fade-in">
                <h3 className="step-title">Paso 2: Detalles del Grupo &amp; Fecha</h3>
                <p className="step-subtitle">Definí cuántas personas asisten y el momento de tu llegada.</p>

                <label>
                  Tamaño del Grupo
                  <select value={partySize} onChange={e => setPartySize(e.target.value)}>
                    <option>2-4 Personas</option>
                    <option>5-8 Personas</option>
                    <option>9-12 Personas</option>
                    <option>13+ Personas</option>
                  </select>
                </label>

                <div className="reservation-modal__form-row">
                  <label>
                    Fecha
                    <input
                      type="date"
                      value={resDate}
                      onChange={e => setResDate(e.target.value)}
                      required
                    />
                  </label>
                  <label>
                    Hora de Ingreso
                    <input
                      type="time"
                      value={resTime}
                      onChange={e => setResTime(e.target.value)}
                      required
                    />
                  </label>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="reservation-modal__step-view animate-fade-in">
                <h3 className="step-title">Paso 3: Coctelería &amp; Especiales</h3>
                <p className="step-subtitle">Acompañá tu mesa con la mejor selección y haznos saber tus requerimientos.</p>

                <label>
                  Paquete de Bebidas / Consumo
                  <select value={drinkPackage} onChange={e => setDrinkPackage(e.target.value)}>
                    {drinkPackages.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </label>

                <label>
                  Pedidos Especiales / Mensaje a la Casa
                  <textarea
                    rows="5"
                    value={specialRequest}
                    onChange={e => setSpecialRequest(e.target.value)}
                    placeholder="Celebraciones especiales (cumpleaños, aniversarios), marcas de destilados de preferencia, etc..."
                  />
                </label>
              </div>
            )}
          </div>

          {/* Large Salon / Image Preview Panel */}
          <aside className="reservation-modal__preview-panel">
            <div 
              className="reservation-modal__full-salon-image"
              style={{ backgroundImage: `url(${activeImage.src})` }}
            >
              <div className="image-location-tag">
                <span className="gold-dot" />
                {activeImage.label}
              </div>
            </div>

            <div className="reservation-modal__summary-card">
              <span className="reservation-modal__summary-tag">Resumen del Plan</span>
              <ul>
                <li><strong>Tipo:</strong> {reservationType}</li>
                <li><strong>Sector:</strong> {tableSelection}</li>
                <li><strong>Grupo:</strong> {partySize}</li>
                {resDate && <li><strong>Fecha:</strong> {resDate} {resTime && `a las ${resTime} hs`}</li>}
                {step === 3 && <li><strong>Bebidas:</strong> {drinkPackage}</li>}
              </ul>
            </div>
          </aside>
        </div>

        {/* Wizard Controls */}
        <div className="reservation-modal__actions">
          <div className="wizard-controls">
            {step > 1 ? (
              <button 
                className="reservation-modal__back" 
                type="button" 
                onClick={handleBack}
              >
                Atrás
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button 
                className="reservation-modal__confirm" 
                type="button" 
                onClick={handleNext}
              >
                Siguiente Paso
              </button>
            ) : (
              <button 
                className="reservation-modal__confirm reservation-modal__confirm--final" 
                type="button" 
                onClick={handleReserveNow}
              >
                Confirmar por WhatsApp
              </button>
            )}
          </div>
          <p className="reservation-modal__note">
            {step === 3 
              ? 'Listo. Con un solo click te pondremos en contacto directo con nuestro concierge.'
              : 'Seleccioná las opciones ideales para habilitar el siguiente paso.'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ReservationModal
