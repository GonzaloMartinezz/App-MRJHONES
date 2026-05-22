import React from 'react'
import '../../index.css'

const curators = [
  {
    id: 1,
    name: 'Julian Vance',
    role: 'Lead Resident',
    image: 'radial-gradient(ellipse at 50% 30%, #2a2520 0%, #1a1510 50%, #0d0b08 100%)',
  },
  {
    id: 2,
    name: 'Sasha K.',
    role: 'Atmospheric Lead',
    image: 'radial-gradient(ellipse at 50% 25%, #20222a 0%, #121418 50%, #08080d 100%)',
  },
  {
    id: 3,
    name: 'Marcello',
    role: 'Deep House',
    image: 'radial-gradient(ellipse at 50% 30%, #252520 0%, #15150f 50%, #0a0a08 100%)',
  },
  {
    id: 4,
    name: 'Isabella V.',
    role: 'Experimental',
    image: 'radial-gradient(ellipse at 50% 25%, #22202a 0%, #141218 50%, #090808 100%)',
  },
]

const Curators = () => {
  return (
    <section className="curators-section">
      <div className="curators-section__inner">
        <p className="curators-section__label">The Resident Curators</p>
        <div className="curators-section__grid">
          {curators.map(c => (
            <div key={c.id} className="curator-card">
              <div className="curator-card__photo">
                <div className="curator-card__photo-bg" style={{ background: c.image }} />
                <div className="curator-card__photo-overlay" />
              </div>
              <div className="curator-card__info">
                <p className="curator-card__name">{c.name}</p>
                <p className="curator-card__role">{c.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Curators
