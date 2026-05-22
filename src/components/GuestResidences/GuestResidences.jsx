import React from 'react'
import '../../index.css'

const curatorEvent = {
  time: 'Sunday · 20:00',
  title: "The Curator's Dinner",
  desc: 'An evening of curated gastronomy and live art.',
  image: 'radial-gradient(ellipse at 40% 60%, #1f1200 0%, #140d00 40%, #0a0800 70%, #060606 100%)',
}

const residences = [
  {
    id: 1,
    dates: 'Oct 28 — Nov 03',
    name: 'The Paris Ensemble',
    venue: 'Main Lounge',
    status: 'Limited',
    statusType: 'limited',
  },
  {
    id: 2,
    dates: 'Nov 05 — Nov 10',
    name: 'Marceau & Friends',
    venue: 'Warhol Suite',
    status: 'Sold Out',
    statusType: 'sold',
  },
  {
    id: 3,
    dates: 'Nov 15',
    name: 'Midnight Dialogue',
    venue: 'Roof Garden',
    status: 'Reservations Open',
    statusType: 'open',
  },
]

const GuestResidences = () => {
  return (
    <section className="mixed-section">
      <div className="mixed-section__inner">

        {/* Left — Curator's Dinner event card */}
        <article className="curator-event">
          <div className="curator-event__image">
            <div className="curator-event__img-bg" style={{ background: curatorEvent.image }} />
            <div className="curator-event__img-overlay" />
          </div>
          <div className="curator-event__body">
            <p className="curator-event__time">{curatorEvent.time}</p>
            <h3 className="curator-event__title">{curatorEvent.title}</h3>
            <p className="curator-event__desc">{curatorEvent.desc}</p>
            <a href="#contact" className="curator-event__access">Request Access</a>
          </div>
        </article>

        {/* Right — Upcoming Guest Residences */}
        <div className="residences">
          <h2 className="residences__title">Upcoming Guest Residences</h2>
          <ul className="residences__list">
            {residences.map(r => (
              <li key={r.id} className="residence-item">
                <div className="residence-item__left">
                  <p className="residence-item__dates">{r.dates}</p>
                  <p className="residence-item__name">{r.name}</p>
                </div>
                <div className="residence-item__right">
                  <p className="residence-item__venue">{r.venue}</p>
                  <p className={`residence-item__status residence-item__status--${r.statusType}`}>
                    {r.status}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="residences__footer">
            <p className="residences__footer-text">
              Experience a curated selection of world-class performers in
              an environment designed for the discerning few.
            </p>
            <button className="residences__arrow" aria-label="View all residences">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default GuestResidences
