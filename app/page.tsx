import styles from './page.module.css'

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* Hero Section - placeholder for homepage content */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Spinach Recordings®</h1>
          <p className={styles.tagline}>
            Artist Management & Publishing
          </p>
        </div>
      </section>

      {/* Add more homepage sections as needed */}
    </div>
  )
}
