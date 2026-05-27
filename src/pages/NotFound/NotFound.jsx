import React from 'react'
import { Link } from 'react-router-dom'
import '../../index.css'

const NotFound = () => {
  return (
    <section className="notfound-page">
      <div className="notfound-page__inner">
        <p className="notfound-page__code">404</p>
        <h1 className="notfound-page__title">Page Not Found</h1>
        <p className="notfound-page__text">
          The route you were looking for does not exist. Return to the club entrance and continue exploring.
        </p>
        <Link to="/" className="notfound-page__button">Back to Home</Link>
      </div>
    </section>
  )
}

export default NotFound
