import styles from './about.module.css'

const partners = [
  'Brooklyn Youth',
  'Biscuit Head',
  'HOKA',
  'NAYA',
  'SNAP',
  'Backline',
  'Songwriters of North America',
  'MusiCares®',
  'Slingshot.FM',
  'Sound Mind Center',
  'NEW STAND',
  '1AND1',
  'TAPE SELECTS',
  'SEED & SPARK',
  'RIVIAN',
]

export default function AboutPage() {
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

          <nav className={styles.partnerList}>
            {partners.map((name) => (
              <span key={name} className={styles.partnerName}>
                {name}
              </span>
            ))}
          </nav>
        </section>
      </div>
  )
}