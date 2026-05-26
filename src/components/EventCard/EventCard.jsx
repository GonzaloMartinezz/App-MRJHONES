import React from 'react'
import { Link } from 'react-router-dom'
import '../../index.css'

const EventCard = ({ event }) => {
  const { title, titleEm, date, time, djs, category, tags, image, size } = event

  const isGradient = image && image.includes('gradient')
  const backgroundStyle = isGradient 
    ? { background: image } 
    : { backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }

  if (size === 'small') {
    return (
      <article className="event-card event-card--small">
        <div className="event-card__thumb">
          <div className="event-card__thumb-bg" style={backgroundStyle} />
        </div>
        <div className="event-card__small-body">
          {category && <span className="event-card__category">{category}</span>}
          <h3 className="event-card__title-sm">{title}</h3>
          {date && <p className="event-card__date-sm">{date}</p>}
          {time && <p className="event-card__time-sm">{time}</p>}
        </div>
        <Link to="/reservations" className="event-card__arrow" aria-label="Reservar lugar">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </article>
    )
  }

  return (
    <article className="event-card event-card--large">
      <div className="event-card__image">
        <div className="event-card__image-bg" style={backgroundStyle} />
        <div className="event-card__image-overlay" />
        {tags && tags.map((tag) => (
          <span key={tag.label} className={`event-card__tag event-card__tag--${tag.type}`}>
            {tag.label}
          </span>
        ))}
      </div>
      <div className="event-card__body">
        <h3 className="event-card__title">
          {title}
          {titleEm && <><br /><em className="event-card__title-em">{titleEm}</em></>}
        </h3>
        <div className="event-card__meta">
          {date && (
            <span className="event-card__meta-item">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect x="1" y="2" width="10" height="9" rx="1" stroke="currentColor" strokeWidth="1.1" />
                <path d="M4 1v2M8 1v2M1 5h10" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
              </svg>
              {date}
            </span>
          )}
          {time && (
            <span className="event-card__meta-item">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.1" />
                <path d="M6 3.5V6l2 1.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
              </svg>
              {time}
            </span>
          )}
        </div>
        {djs && <p className="event-card__djs">{djs}</p>}
        <Link to="/reservations" className="event-card__reserve">Reservar Mesa</Link>
      </div>
    </article>
  )
}

export default EventCard
