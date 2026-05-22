import React, { useState } from 'react'
import '../../index.css'

const tabs = ['This Week', 'Special Guests', 'Exclusive']

const EventsHero = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="events-hero">
      <div className="events-hero__inner">
        <h1 className="events-hero__title">Nocturnal Calendar</h1>
        <div className="events-hero__tabs">
          <div className="events-hero__tab-list">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                className={`events-hero__tab ${activeTab === i ? 'events-hero__tab--active' : ''}`}
                onClick={() => setActiveTab(i)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="events-hero__month">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="2.5" width="12" height="10.5" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M5 1v3M9 1v3M1 6h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            October 2024
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsHero
