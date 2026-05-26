import React, { useEffect, useRef } from 'react'
import '../../index.css'

const galleryItems = [
  {
    image: '/frente2.jpg',
    title: 'El Frente',
    tag: 'La Fachada',
    desc: 'Un portal icónico iluminado con neón rojo que te da la bienvenida a lo exclusivo.',
    size: 'bento-large'
  },
  {
    image: '/interior.jpg',
    title: 'La Terraza',
    tag: 'El Ambiente',
    desc: 'Arte urbano y luces cálidas conviven bajo las estrellas en nuestro patio al aire libre.',
    size: 'bento-medium'
  },
  {
    image: '/img1.png',
    title: 'Mr. John\'s',
    tag: 'El Legado',
    desc: 'El sello histórico de los grandes momentos. Calidad y distinción embotellada.',
    size: 'bento-small'
  }
]

const Gallery = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('gallery--revealed')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    const items = containerRef.current?.querySelectorAll('.bento-item')
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="gallery-section" id="experiencia" ref={containerRef}>
      <div className="gallery-section__inner">
        <div className="gallery-section__header bento-item">
          <span className="gallery-section__sub">Galería Exclusiva</span>
          <h2 className="gallery-section__title">
            Una Mirada a <em className="gallery-section__title-em">Mr. John's &amp; Warhol</em>
          </h2>
          <p className="gallery-section__desc">
            Cada rincón de nuestro club está diseñado para inspirar momentos inolvidables. La elegancia de lo clásico y el pulso moderno se funden en cada espacio.
          </p>
        </div>

        <div className="bento-grid">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className={`bento-item ${item.size}`}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="bento-item__overlay" />
              <div className="bento-item__content">
                <span className="bento-item__tag">{item.tag}</span>
                <h3 className="bento-item__title">{item.title}</h3>
                <p className="bento-item__desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
