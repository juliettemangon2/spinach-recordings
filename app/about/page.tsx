'use client'

import { useState, useEffect } from 'react'
import styles from './about.module.css'

const partners = [
  { name: 'Brooklyn Youth' },
  { name: 'Biscuit Head' },
  { name: 'HOKA' },
  { name: 'NAYA' },
  { name: 'SNAP' },
  { name: 'Backline' },
  { name: 'Songwriters of North America' },
  { name: 'MusiCares®' },
  { name: 'Slingshot.FM' },
  { name: 'Sound Mind Center' },
  { name: 'NEW STAND' },
  { name: '1AND1' },
  { name: 'TAPE SELECTS' },
  { name: 'SEED & SPARK' },
  { name: 'RIVIAN' },
]

const DESKTOP_ITEMS = 4
const MOBILE_ITEMS = 2

export default function AboutPage() {
  const [page, setPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(DESKTOP_ITEMS)

  useEffect(() => {
    const update = () => {
      const next = window.innerWidth <= 600 ? MOBILE_ITEMS : DESKTOP_ITEMS
      setItemsPerPage((prev) => {
        if (prev !== next) setPage(0)
        return next
      })
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const totalPages = Math.ceil(partners.length / itemsPerPage)
  const visible = partners.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage)

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImageWrapper}>
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
            className={styles.arrowBtn}
            onClick={() => setPage((p) => (p === 0 ? totalPages - 1 : p - 1))}
            aria-label="Previous partners"
          >
            ←
          </button>

          <div className={styles.carouselTrack}>
            {visible.map((partner) => (
              <div key={partner.name} className={styles.partnerCard}>
                <div className={styles.logoPlaceholder}>
                  <span className={styles.logoInitials}>
                    {partner.name
                      .split(' ')
                      .map((w) => w[0])
                      .join('')
                      .slice(0, 3)}
                  </span>
                </div>
                <p className={styles.partnerCardName}>{partner.name}</p>
              </div>
            ))}
          </div>

          <button
            className={styles.arrowBtn}
            onClick={() => setPage((p) => (p === totalPages - 1 ? 0 : p + 1))}
            aria-label="Next partners"
          >
            →
          </button>
        </div>

        <div className={styles.carouselDots}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === page ? styles.dotActive : ''}`}
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  )
}