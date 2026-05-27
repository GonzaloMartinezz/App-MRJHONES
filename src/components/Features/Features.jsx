import React from 'react'
import { Link } from 'react-router-dom'
import '../../index.css'
import EventCard from '../EventCard/EventCard'

const eventsData = [
  {
    id: 1,
    title: 'SÁBADO ÚNICO ft. International Guest',
    date: 'Sábado 30 Mayo',
    time: '11:30 PM - Late',
    tags: [
      { label: 'Main Room', type: 'room' },
      { label: 'Agotado', type: 'sold' },
    ],
    image: '/interior.jpg',
    size: 'large',
  },
  {
    id: 2,
    title: 'Jäger Fest:',
    titleEm: 'Noches Exclusivas',
    date: 'Sábado 6 Junio',
    djs: 'DJs Residentes: Marcos & Paul G',
    tags: [{ label: 'VIP Only', type: 'vip' }],
    image: '/img3.jpg',
    size: 'large',
  },
  {
    id: 3,
    title: 'Viernes 29 Mayo',
    category: 'Show en Vivo',
    time: '11:00 PM Hasta 1:30 AM',
    image: '/img1.png',
    size: 'small',
  },
  {
    id: 4,
    title: 'Keep Walking con Johnnie Walker',
    category: 'Evento Especial',
    date: 'Sábado 13 Junio',
    image: '/frente2.jpg',
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
              Próximos <em className="features__title-em">Eventos</em>
            </h2>
            <p className="features__subtitle">
              Experiencias curadas y exclusivas pensadas para nuestro público premium. Asegurá tu lugar en las mejores noches de la provincia.
            </p>
          </div>
          <Link to="/events" className="features__view-all">
            Ver Todos los Eventos
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M1 6h14M9 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
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
