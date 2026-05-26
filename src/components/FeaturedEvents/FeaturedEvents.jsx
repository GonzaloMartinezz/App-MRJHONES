import React from 'react'
import '../../index.css'

const mainEvent = {
  time: 'Viernes · 22:00 hs',
  title: 'Noche Inaugural: El Legado de los Grandes',
  image: '/HeroSeccion.png',
  performers: [
    { role: 'Residente', name: 'DJ Marcos' },
    { role: 'Invitado', name: 'DJ Paul G' },
  ],
}

const sideEvent = {
  time: 'Sábado · 23:00 hs',
  title: 'Terraza House Sessions',
  desc: 'Música house seleccionada, ambiente al aire libre y coctelería premium.',
  featuring: 'DJ Invitado de Córdoba',
  image: '/interior.jpg',
}

const FeaturedEvents = () => {
  return (
    <section className="featured-events">
      <div className="featured-events__inner">
        <div className="featured-events__grid">

          {/* Left main card */}
          <article className="feat-card feat-card--main">
            <div className="feat-card__image">
              <div className="feat-card__img-bg" style={{ backgroundImage: `url(${mainEvent.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
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
              <div className="feat-card__img-bg" style={{ backgroundImage: `url(${sideEvent.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="feat-card__img-overlay" />
            </div>
            <div className="feat-card__body">
              <p className="feat-card__time">{sideEvent.time}</p>
              <h2 className="feat-card__title">{sideEvent.title}</h2>
              <p className="feat-card__desc">{sideEvent.desc}</p>
              <p className="feat-card__featuring-label">Invitado Especial</p>
              <p className="feat-card__featuring-name">{sideEvent.featuring}</p>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}

export default FeaturedEvents
