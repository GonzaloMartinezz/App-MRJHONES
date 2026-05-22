import React, { useState } from 'react'
import ReservationModal from '../../components/ReservationModal/ReservationModal'
import './Reservations.css'

const gallery = [
  {
    title: 'Private Entrance',
    description: 'Step into a curated world with personalized arrival and exclusive access.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Lounge Atmosphere',
    description: 'Reserve a premium lounge table with mood lighting and dedicated service.',
    image: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Signature Drinks',
    description: 'Choose from handcrafted cocktails, champagne and custom bottle service.',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80',
  },
]

const Reservations = () => {
  const [modalOpen, setModalOpen] = useState(true)

  return (
    <section className="reservations-page">
      <div className="reservations-hero">
        <span className="reservations-eyebrow">VIP Reservations</span>
        <h1>Book your exclusive table or event experience</h1>
        <p>
          Reserve a private lounge, bottle service or special occasion package. Our concierge
          team will prepare the perfect night for your group.
        </p>
        <button className="reservations-cta" type="button" onClick={() => setModalOpen(true)}>
          Open reservation planner
        </button>
      </div>

      <div className="reservations-grid">
        <article className="reservations-card reservations-card--dark">
          <h2>Table Reservations</h2>
          <p>Choose your seating style from terrace, bar, lounge or private sofa.</p>
        </article>
        <article className="reservations-card reservations-card--accent">
          <h2>Drinks & Packages</h2>
          <p>Pick from signature cocktails, premium bottle service, champagne and mixology packages.</p>
        </article>
        <article className="reservations-card reservations-card--dark">
          <h2>Event Packages</h2>
          <p>Book birthdays, receptions, corporate gatherings or anniversary experiences.</p>
        </article>
      </div>

      <div className="reservations-gallery">
        {gallery.map(item => (
          <div key={item.title} className="reservations-gallery__item">
            <img src={item.image} alt={item.title} />
            <div className="reservations-gallery__meta">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <ReservationModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}

export default Reservations
