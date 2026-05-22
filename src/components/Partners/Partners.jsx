import React from 'react'
import '../../index.css'

const brands = ['Boucheron', 'Steinway', 'Rolex', 'Dom Pérignon', 'Vogue']

const Partners = () => {
  return (
    <section className="partners-section">
      <div className="partners-section__inner">
        <p className="partners-section__label">Partners of the Night</p>
        <div className="partners-section__logos">
          {brands.map(brand => (
            <span key={brand} className="partners-section__brand">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
