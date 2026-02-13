'use client'

import { useState, useCallback } from 'react'
import styles from './about.module.css'

const partners = [
  { name: 'Brooklyn Youth', logo: '/partners/brooklyn-youth.png' },
  { name: 'Biscuit Head', logo: '/partners/biscuit-head.png' },
  { name: 'HOKA', logo: '/partners/hoka.png' },
  { name: 'NAYA', logo: '/partners/naya.png' },
  { name: 'SNAP', logo: '/partners/snap.png' },
  { name: 'Backline', logo: '/partners/backline.png' },
  { name: 'Songwriters of North America', logo: '/partners/sona.png' },
  { name: 'MusiCares®', logo: '/partners/musicares.png' },
  { name: 'Slingshot.FM', logo: '/partners/slingshot-fm.png' },
  { name: 'Sound Mind Center', logo: '/partners/sound-mind-center.png' },
  { name: 'NEW STAND', logo: '/partners/new-stand.png' },
  { name: '1AND1', logo: '/partners/1and1.png' },
  { name: 'TAPE SELECTS', logo: '/partners/tape-selects.png' },
  { name: 'SEED & SPARK', logo: '/partners/seed-and-spark.png' },
  { name: 'RIVIAN', logo: '/partners/rivian.png' },
]

const VISIBLE_COUNT = 4

export default function AboutPage() {
  const [startIndex, setStartIndex] = useState(0)

  const handlePrev = useCallback(() => {
    setStartIndex((prev) => (prev === 0 ? partners.length - 1 : prev - 1))
  }, [])

  const handleNext = useCallback(() => {
    setStartIndex((prev) => (prev + 1) % partners.length)
  }, [])

  // Get the currently visible partners (wrapping around)
  const visiblePartners = Array.from({ length: VISIBLE_COUNT }, (_, i) => {
    const index = (startIndex + i) % partners.length
    return partners[index]
  })

  return (
      
      <div className={styles.page}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroImageWrapper}>
            {/* Replace src with your actual hero image */}
            <div className={styles.heroImagePlaceholder} />
            <div className={styles.heroOverlay} />
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeading}>
              At Spinach, we embrace challenges and nurture bold ideas, making
              them real for the curious and the passionate. We don&rsquo;t just
              create; we empower talent to explore, innovate, and connect.
            </h1>
          </div>
        </section>

        {/* Partners Section */}
        <section className={styles.partners}>
          <h2 className={styles.partnersHeading}>Our partners</h2>

          <div className={styles.carouselWrapper}>
            <button
              className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}
              onClick={handlePrev}
              aria-label="Previous partner"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 15L7.5 10L12.5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className={styles.carouselTrack}>
              {visiblePartners.map((partner, i) => (
                <div className={styles.partnerCard} key={`${partner.name}-${i}`}>
                  <div className={styles.partnerLogoWrapper}>
                    {/* Replace with <Image /> or <img> when logos are available */}
                    <div className={styles.partnerLogoPlaceholder} />
                  </div>
                  <span className={styles.partnerName}>{partner.name}</span>
                </div>
              ))}
            </div>

            <button
              className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
              onClick={handleNext}
              aria-label="Next partner"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 5L12.5 10L7.5 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </section>
      </div>
  )
}