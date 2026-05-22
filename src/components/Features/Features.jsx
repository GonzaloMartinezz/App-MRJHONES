import React from 'react'
import '../../index.css'
import EventCard from '../EventCard/EventCard'

const eventsData = [
  {
    id: 1,
    title: 'SÁBADO ÚNICO ft. International Guest',
    date: 'Sábado 2 Mayo',
    time: '11:30 PM - Late',
    tags: [
      { label: 'Main Room', type: 'room' },
      { label: 'Sold Out', type: 'sold' },
    ],
    image: 'linear-gradient(135deg, #1a0a0a 0%, #2d0a0a 30%, #1a1a2e 60%, #0a0a0a 100%)',
    size: 'large',
  },
  {
    id: 2,
    title: 'Jäger Fest:',
    titleEm: 'Keep It Real',
    date: 'Sábado 9 Mayo',
    djs: 'Resident DJs: Marcos & Paul G',
    tags: [{ label: 'VIP Only', type: 'vip' }],
    image: 'linear-gradient(135deg, #1a1200 0%, #2d2000 30%, #1a0f00 60%, #0d0800 100%)',
    size: 'large',
  },
  {
    id: 3,
    title: 'Viernes 17 Abril',
    category: 'Live Performance',
    time: '11:00 PM Hasta 1:30 AM',
    image: 'radial-gradient(circle at center, #8b0000 0%, #3d0000 50%, #1a0000 100%)',
    size: 'small',
  },
  {
    id: 4,
    title: 'Keep Walking to Mr. Johns',
    category: 'Special Event',
    date: 'Sábado 18 Abril',
    image: 'linear-gradient(135deg, #1a1500 0%, #2a2200 50%, #0d0d00 100%)',
    size: 'small',
  },
]

const Features = () => {
  return (
    <section className="features" id="events">
      <div className="features__inner">

        <div className="features__header">
          <div className="features__header-left">
            <h2 className="features__title">
              Upcoming <em className="features__title-em">Highlights</em>
            </h2>
            <p className="features__subtitle">
              Curated events designed for the trend-setting elite. Secure your<br />
              access to the city's most exclusive nights.
            </p>
          </div>
          <a href="/events" className="features__view-all">
            View All Events
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M1 6h14M9 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="features__grid">
          <div className="features__grid-large">
            {eventsData.filter(e => e.size === 'large').map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="features__grid-small">
            {eventsData.filter(e => e.size === 'small').map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Features
