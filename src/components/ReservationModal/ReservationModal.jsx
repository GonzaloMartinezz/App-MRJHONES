import React, { useState } from 'react'
import './ReservationModal.css'

const whatsappNumber = '5493811234567'
const drinkPackages = [
  'Signature Cocktails',
  'Premium Bottle Service',
  'Champagne Toast',
  'Free Flow Mixology',
]
const tableOptions = [
  'Private Sofa',
  'Corner Lounge',
  'Bar Table',
  'Terrace Table',
]
const eventOccasions = [
  'Birthday Celebration',
  'Reception',
  'Corporate Event',
  'Anniversary',
]
const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    alt: 'Club entrance at night',
  },
  {
    src: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=900&q=80',
    alt: 'VIP bar interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    alt: 'Luxury cocktail setup',
  },
]

const ReservationModal = ({ open, onClose }) => {
  const [reservationType, setReservationType] = useState('Table Reservation')
  const [eventOccasion, setEventOccasion] = useState(eventOccasions[0])
  const [tableSelection, setTableSelection] = useState(tableOptions[0])
  const [drinkPackage, setDrinkPackage] = useState(drinkPackages[0])
  const [partySize, setPartySize] = useState('2-4 Guests')
  const [specialRequest, setSpecialRequest] = useState('')

  const handleReserveNow = () => {
    const message = `Hola, quiero reservar en Mr. John's & Warhol.%0A%0ATipo de reserva: ${reservationType}%0A${reservationType === 'Event Reservation' ? `Ocasión: ${eventOccasion}%0A` : ''}Mesa preferida: ${tableSelection}%0APaquete de bebidas: ${drinkPackage}%0ATamaño del grupo: ${partySize}%0AComentarios: ${specialRequest || 'Sin comentarios'}%0A%0APor favor confirmen la disponibilidad y el precio.`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  if (!open) return null

  return (
    <div className="reservation-modal__backdrop" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="reservation-modal" onClick={event => event.stopPropagation()}>
        <div className="reservation-modal__top">
          <div>
            <span className="reservation-modal__eyebrow">Reservation Planner</span>
            <h2>Design your VIP booking</h2>
            <p>Choose the perfect combination of drinks, seating and event package for your next night out.</p>
          </div>
          <button className="reservation-modal__close" type="button" onClick={onClose} aria-label="Close reservation modal">×</button>
        </div>

        <div className="reservation-modal__content-grid">
          <div className="reservation-modal__form-panel">
            <label>
              Reservation Type
              <select value={reservationType} onChange={e => setReservationType(e.target.value)}>
                <option>Table Reservation</option>
                <option>Event Reservation</option>
                <option>Birthday Package</option>
                <option>Bottle Service</option>
              </select>
            </label>

            {reservationType === 'Event Reservation' && (
              <label>
                Event Occasion
                <select value={eventOccasion} onChange={e => setEventOccasion(e.target.value)}>
                  {eventOccasions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
            )}

            <label>
              Table Preference
              <select value={tableSelection} onChange={e => setTableSelection(e.target.value)}>
                {tableOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>

            <label>
              Drinks Package
              <select value={drinkPackage} onChange={e => setDrinkPackage(e.target.value)}>
                {drinkPackages.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>

            <label>
              Party Size
              <select value={partySize} onChange={e => setPartySize(e.target.value)}>
                <option>2-4 Guests</option>
                <option>5-8 Guests</option>
                <option>9-12 Guests</option>
                <option>13+ Guests</option>
              </select>
            </label>

            <label>
              Special requests
              <textarea
                rows="4"
                value={specialRequest}
                onChange={e => setSpecialRequest(e.target.value)}
                placeholder="Tell us about celebrations, music requests or VIP needs"
              />
            </label>
          </div>

          <aside className="reservation-modal__preview-panel">
            <div className="reservation-modal__summary-card">
              <span className="reservation-modal__summary-tag">Preview</span>
              <h3>Reservation summary</h3>
              <p>Confirm your package with a first message to our concierge team on WhatsApp.</p>
              <ul>
                <li><strong>Type:</strong> {reservationType}</li>
                {reservationType === 'Event Reservation' && <li><strong>Occasion:</strong> {eventOccasion}</li>}
                <li><strong>Table:</strong> {tableSelection}</li>
                <li><strong>Drinks:</strong> {drinkPackage}</li>
                <li><strong>Group:</strong> {partySize}</li>
              </ul>
            </div>

            <div className="reservation-modal__gallery">
              {galleryImages.map(image => (
                <div key={image.src} className="reservation-modal__gallery-card">
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="reservation-modal__actions">
          <button className="reservation-modal__confirm" type="button" onClick={handleReserveNow}>Confirm on WhatsApp</button>
          <p className="reservation-modal__note">Select your table and drinks package, then send the request with one click.</p>
        </div>
      </div>
    </div>
  )
}

export default ReservationModal
