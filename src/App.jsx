import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Events from './pages/Events/Events'
import VIP from './pages/VIP/VIP'
import Reservations from './pages/Reservations/Reservations'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'
import './index.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="vip" element={<VIP />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
