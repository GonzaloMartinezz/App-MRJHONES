import React from 'react'
import '../../index.css'

const mainEvent = {
  time: 'Friday · 22:00',
  title: 'Velvet Symphony: The Grand Reopening',
  image: 'linear-gradient(160deg, #0d0d0d 0%, #1a1008 30%, #0f0d08 60%, #080808 100%)',
  performers: [
    { role: 'Resident', name: 'Julian Vance' },
    { role: 'Guest', name: 'Elena Rose' },
  ],
}

const sideEvent = {
  time: 'Saturday · 23:00',
  title: 'Deep Theory Sessions',
  desc: 'Minimalist techno and architectural soundscapes.',
  featuring: 'Architect of Sound',
  image: 'radial-gradient(ellipse at 60% 30%, #2a0a00 0%, #1a0500 40%, #0a0800 80%, #060606 100%)',
}

const FeaturedEvents = () => {
  return (
    <section className="featured-events">
      <div className="featured-events__inner">
        <div className="featured-events__grid">

          {/* Left main card */}
          <article className="feat-card feat-card--main">
            <div className="feat-card__image">
              <div className="feat-card__img-bg" style={{ background: mainEvent.image }} />
              <div className="feat-card__img-overlay" />
            </div>
            <div className="feat-card__body">
              <p className="feat-card__time">{mainEvent.time}</p>
              <h2 className="feat-card__title">{mainEvent.title}</h2>
              <div className="feat-card__performers">
                {mainEvent.performers.map(p => (
                  <div key={p.role} className="feat-card__performer">
                    <p className="feat-card__performer-role">{p.role}</p>
                    <p className="feat-card__performer-name">{p.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Right side card */}
          <article className="feat-card feat-card--side">
            <div className="feat-card__image">
              <div className="feat-card__img-bg" style={{ background: sideEvent.image }} />
              <div className="feat-card__img-overlay" />
            </div>
            <div className="feat-card__body">
              <p className="feat-card__time">{sideEvent.time}</p>
              <h2 className="feat-card__title">{sideEvent.title}</h2>
              <p className="feat-card__desc">{sideEvent.desc}</p>
              <p className="feat-card__featuring-label">Featuring</p>
              <p className="feat-card__featuring-name">{sideEvent.featuring}</p>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}

export default FeaturedEvents
