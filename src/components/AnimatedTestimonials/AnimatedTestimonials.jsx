import React, { useEffect, useRef, useState } from "react"
import { Quote, Star } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import "./AnimatedTestimonials.css"

export function AnimatedTestimonials({
  title = "Loved by the community",
  subtitle = "Don't just take our word for it. See what developers and companies have to say about our starter template.",
  badgeText = "Trusted by developers",
  testimonials = [],
  autoRotateInterval = 6000,
  trustedCompanies = [],
  trustedCompaniesTitle = "Trusted by developers from companies worldwide",
  className,
}) {
  const [activeIndex, setActiveIndex] = useState(0)

  // Refs for scroll animations
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  // Animation variants for section entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // Smooth custom ease
      },
    },
  }

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Auto rotate testimonials
  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, autoRotateInterval)

    return () => clearInterval(interval)
  }, [autoRotateInterval, testimonials.length])

  if (testimonials.length === 0) {
    return null
  }

  // Helper to safely handle avatar fallback
  const handleImageError = (e) => {
    e.target.style.display = 'none'
    const fallback = e.target.nextSibling
    if (fallback) {
      fallback.style.display = 'flex'
    }
  }

  return (
    <section ref={sectionRef} id="testimonials" className={`testimonials-section ${className || ""}`}>
      
      {/* Background Aurora Glow */}
      <div className="aurora-glow aurora-glow--testimonials" />

      <div className="testimonials-container">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="testimonials-grid"
        >
          {/* Left side: Heading and navigation */}
          <motion.div variants={itemVariants} className="testimonials-info">
            <div className="testimonials-info-content">
              {badgeText && (
                <div className="testimonials-badge">
                  <Star className="testimonials-badge-icon" />
                  <span>{badgeText}</span>
                </div>
              )}

              <h2 className="testimonials-title">
                {title.includes(" ") ? (
                  <>
                    {title.split(" ").slice(0, -1).join(" ")}{" "}
                    <em className="testimonials-title-em">{title.split(" ").slice(-1)}</em>
                  </>
                ) : (
                  title
                )}
              </h2>

              <p className="testimonials-subtitle">{subtitle}</p>

              <div className="testimonials-nav-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`testimonials-dot-btn ${activeIndex === index ? "active" : ""}`}
                    aria-label={`Ver reseña ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side: Testimonial cards */}
          <motion.div variants={itemVariants} className="testimonials-cards-container">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="testimonials-card-wrapper"
                initial={{ opacity: 0, x: 80, scale: 0.95 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : (index > activeIndex ? 80 : -80),
                  scale: activeIndex === index ? 1 : 0.95,
                  pointerEvents: activeIndex === index ? "auto" : "none",
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ zIndex: activeIndex === index ? 10 : 0 }}
              >
                <div className="testimonials-card glass-card">
                  <div className="testimonials-rating">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="testimonials-star-icon" />
                      ))}
                  </div>

                  <div className="testimonials-content-box">
                    <Quote className="testimonials-quote-icon" />
                    <p className="testimonials-text">"{testimonial.content}"</p>
                  </div>

                  <hr className="testimonials-separator" />

                  <div className="testimonials-author">
                    <div className="testimonials-avatar-container">
                      <img 
                        className="testimonials-avatar-img" 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        onError={handleImageError}
                      />
                      <div className="testimonials-avatar-fallback">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div className="testimonials-author-info">
                      <h3 className="testimonials-author-name">{testimonial.name}</h3>
                      <p className="testimonials-author-meta">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Decorative elements */}
            <div className="testimonials-deco testimonials-deco--bottom"></div>
            <div className="testimonials-deco testimonials-deco--top"></div>
          </motion.div>
        </motion.div>

        {/* Logo cloud / Brand list */}
        {trustedCompanies.length > 0 && (
          <motion.div variants={itemVariants} initial="hidden" animate={controls} className="testimonials-brand-cloud">
            <h3 className="testimonials-brand-title">{trustedCompaniesTitle}</h3>
            <div className="testimonials-brand-grid">
              {trustedCompanies.map((company) => (
                <div key={company} className="testimonials-brand-item">
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
