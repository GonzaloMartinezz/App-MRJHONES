import React from 'react'
import '../../index.css'
import Hero from '../../components/Hero/Hero'
import Gallery from '../../components/Gallery/Gallery'
import Features from '../../components/Features/Features'
import VIPExperience from '../../components/VIPExperience/VIPExperience'
import { AnimatedTestimonials } from '../../components/AnimatedTestimonials/AnimatedTestimonials'

const testimonialsData = [
  {
    id: 1,
    name: "Sofía Valenzuela",
    role: "Experiencia VIP",
    company: "El Búnker",
    content: "La experiencia VIP en El Búnker superó todas nuestras expectativas. La atención del concierge fue impecable y la coctelería de autor es de otro planeta.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Santiago Peralta",
    role: "Clubgoer Regular",
    company: "DJ Booth Area",
    content: "Las mejores noches de la provincia están acá. El ambiente premium, el sonido de alta fidelidad y la energía que se vive al lado de la cabina del DJ no tienen comparación.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Martina Bruno",
    role: "Evento Privado",
    company: "Lounge Terraza",
    content: "Reservar el lounge de la terraza para mi cumpleaños fue la mejor decisión. Un espacio exclusivo bajo el cielo abierto, sillones comodísimos y un servicio ágil durante toda la noche.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Mateo Rossi",
    role: "VIP Member",
    company: "Pista Principal",
    content: "Un lugar único que cuida cada detalle, desde el ingreso preferencial ágil hasta la espectacular presentación de los tragos. Mr. John's & Warhol redefine el concepto de exclusividad.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  }
]

const Home = () => {
  return (
    <div className="home-layout">
      <main>
        <Hero />
        <Gallery />
        <Features />
        <VIPExperience isHome={true} />
        <AnimatedTestimonials
          title="La Voz de la Noche"
          subtitle="Nuestros clientes más exclusivos comparten sus sensaciones en el templo de la noche de la provincia."
          badgeText="Reseñas de la Comunidad"
          testimonials={testimonialsData}
          trustedCompanies={['Dom Pérignon', 'Moët & Chandon', 'Chandon', 'Johnnie Walker', 'Belvedere']}
          trustedCompaniesTitle="Nuestros Partners de la Noche"
        />
      </main>
    </div>
  )
}

export default Home
