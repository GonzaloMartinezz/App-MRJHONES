import React from 'react'
import '../../index.css'
import EventsHero from '../../components/EventsHero/EventsHero'
import FeaturedEvents from '../../components/FeaturedEvents/FeaturedEvents'
import GuestResidences from '../../components/GuestResidences/GuestResidences'
import Curators from '../../components/Curators/Curators'
import Partners from '../../components/Partners/Partners'
import EventsFooter from '../../components/EventsFooter/EventsFooter'

const Events = () => {
  return (
    <div className="events-page">
      <main>
        <EventsHero />
        <FeaturedEvents />
        <GuestResidences />
        <Curators />
        <Partners />
        <EventsFooter />
      </main>
    </div>
  )
}

export default Events
