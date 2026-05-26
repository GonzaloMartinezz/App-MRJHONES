import React, { useState } from 'react'
import ReservationModal from '../../components/ReservationModal/ReservationModal'
import './Reservations.css'

const salonSectores = [
  {
    id: 'bunker',
    name: 'El Búnker (The Vault)',
    schedule: 'Viernes y Sábados · 23:00 hs a 06:00 hs',
    capacity: 'Exclusivo para grupos de hasta 8 personas.',
    desc: 'Un espacio reservado con total privacidad, sillones de cuero premium, atención ultra-personalizada y carta de destilados de alta gama.',
    image: '/img3.jpg',
  },
  {
    id: 'terraza',
    name: 'La Terraza Warhol',
    schedule: 'Miércoles a Sábados · 20:00 hs a 03:00 hs',
    capacity: 'Espacios modulares para 4 a 12 personas.',
    desc: 'Bajo el cielo abierto, rodeado de arte callejero y luces colgantes cálidas. Ideal para comenzar la noche con cocktails de autor.',
    image: '/interior.jpg',
  },
  {
    id: 'barra',
    name: 'Barra Monumental',
    schedule: 'Miércoles a Sábados · 20:00 hs al cierre',
    capacity: 'Acceso individual y banquetas VIP.',
    desc: 'El corazón de la coctelería. Disfrutá de la elaboración en vivo de los clásicos y nuestras creaciones exclusivas con hielo tallado.',
    image: '/HeroSeccion.png',
  },
]

const Reservations = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeSector, setActiveSector] = useState('bunker')

  const currentSector = salonSectores.find(s => s.id === activeSector) || salonSectores[0]

  return (
    <div className="reservations-container">
      
      {/* Background Aurora Ambient Glows */}
      <div className="aurora-glow aurora-glow--gold" />
      <div className="aurora-glow aurora-glow--amber" />
      
      <section className="reservations-page">
        
        {/* Full-bleed 100% Cover Hero */}
        <div className="reservations-hero-full" style={{ backgroundImage: 'url("/HeroSeccion.png")' }}>
          <div className="reservations-hero-overlay" />
          <div className="reservations-hero-content animate-fade-in-up">
            <span className="reservations-eyebrow-pill">Reservas Exclusivas</span>
            <h1>Asegurá tu lugar en la mejor noche de la provincia</h1>
            <p>
              Diseñá tu experiencia nocturna a medida. Ya sea un sillón privado al lado del DJ, una noche relajada en la terraza o la reserva de un gran acontecimiento corporativo, nos ocupamos de cada detalle.
            </p>
            <button className="reservations-cta-pill" type="button" onClick={() => setModalOpen(true)}>
              Iniciar Planificador de Reservas
            </button>
          </div>
        </div>

        {/* Sectors and Hours (Horarios y Distribución de Mesas) */}
        <div className="sectors-showcase">
          <div className="sectors-showcase__header">
            <span className="sectors-showcase__sub">Sectores &amp; Horarios</span>
            <h2>Explorá el Salón y elegí tu ambiente</h2>
            <p>Mr. John's &amp; Warhol cuenta con sectores diferenciados diseñados para cada estado de ánimo de la noche.</p>
          </div>

          <div className="sectors-tabs">
            {salonSectores.map(s => (
              <button 
                key={s.id} 
                className={`sector-tab-btn ${activeSector === s.id ? 'active' : ''}`}
                onClick={() => setActiveSector(s.id)}
              >
                {s.name}
              </button>
            ))}
          </div>

          {/* Interactive Full-Width Sector Panel */}
          <div className="sector-display animate-fade-in">
            <div 
              className="sector-display__image-panel"
              style={{ backgroundImage: `url(${currentSector.image})` }}
            >
              <div className="sector-display__img-overlay" />
              <div className="sector-display__title-tag">
                {currentSector.name}
              </div>
            </div>

            <div className="sector-display__info-panel glass-card">
              <span className="info-tag">Detalles del Sector</span>
              <h3>Disponibilidad &amp; Características</h3>
              
              <div className="info-item">
                <strong>Horario de Apertura:</strong>
                <p>{currentSector.schedule}</p>
              </div>

              <div className="info-item">
                <strong>Capacidad de Mesa:</strong>
                <p>{currentSector.capacity}</p>
              </div>

              <div className="info-item">
                <strong>La Experiencia:</strong>
                <p>{currentSector.desc}</p>
              </div>

              <button className="sector-book-btn" onClick={() => setModalOpen(true)}>
                Reservar en {currentSector.name}
              </button>
            </div>
          </div>
        </div>

        {/* Experience Pillars */}
        <div className="reservations-grid">
          <article className="reservations-card glass-card">
            <div className="card-top">
              <div className="card-icon">👑</div>
              <h2>Ingreso VIP Preferencial</h2>
            </div>
            <p>Todas las reservas de mesa cuentan con acceso fast-pass por nuestra entrada principal sin filas ni demoras.</p>
          </article>
          
          <article className="reservations-card glass-card card-accented">
            <div className="card-top">
              <div className="card-icon">🍾</div>
              <h2>Servicio de Botella</h2>
            </div>
            <p>Elegí tus marcas favoritas de antemano y las serviremos a la temperatura exacta con acompañamientos premium.</p>
          </article>
          
          <article className="reservations-card glass-card">
            <div className="card-top">
              <div className="card-icon">🎵</div>
              <h2>Proximidad a Cabina</h2>
            </div>
            <p>¿Querés sentir la energía del DJ? Seleccioná las mesas "Primera Fila" y viví el sonido en su máxima expresión.</p>
          </article>
        </div>

      </section>

      <ReservationModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}

export default Reservations
