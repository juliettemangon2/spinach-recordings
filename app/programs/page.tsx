import styles from './programs.module.css'

const events = [
  { title: 'Blacklist x Spinach Records Present: Sonic Wellness Experience', date: '2025-1-11' },
  { title: 'Fuel Your Fire: Crafting Habits for a High-Vibe Fulfilling Year', date: '2025-1-18' },
  { title: 'Muo Duo Album Release Party', date: '2025-5-23' },
  { title: 'SOUND MIND FESTIVAL  DAY 1 ', date: '2025-5-17' },
  { title: 'SOUND MIND FESTIVAL  DAY 2 ', date: '2025-5-17' },
  { title: 'Seed & Spark Creativity Sustainability Summit ', date: '2025-10-17' },
  { title: 'Ajai Kasim Album Listening Party ', date: '2025-10-30' },
  { title: '5 Year Anniv Show (Feat. Ruary & Friends) ', date: '2025-12-10' },
]

export default function ProgramsPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Sustainable Creativity</h1>
      </header>

      {/* Music Industry Masterclasses Section */}
      <section className={styles.masterclassSection}>
        <h2 className={styles.masterclassTitle}>Music Industry Masterclasses</h2>
        <div className={styles.masterclassGrid}>
          <div className={styles.masterclassContent}>
            <p className={styles.masterclassBody}>
              Created as a partnership between Spinach Records and Warner Music Group, we were brought
              together by our shared desire and mission to cultivate sustainable careers for the artists
              we serve, through supporting holistic talent and habit development.
            </p>
            <p className={styles.masterclassBody}>
              Through a series of events with industry experts, we aim to provide
            </p>
            <ol className={styles.masterclassList}>
              <li>Prompts for Introspection</li>
              <li>Space and time for socialization</li>
              <li>Educational resources</li>
            </ol>
            <p className={styles.masterclassBody}>
              We strive to support you on your path towards a healthier, happier relationship with
              yourself and your chosen industry.
            </p>
          </div>
          <div className={styles.masterclassImageWrap}>
            <img
              src="https://placehold.co/700x500/2a2a2a/888888?text=Masterclass+Event+photo"
              alt="Music Industry Masterclass event"
              className={styles.masterclassImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.eventsSection}>
        <p className={styles.sectionLabel}>Past Events</p>
        <ul className={styles.eventList}>
          {events.map((event, i) => (
            <li key={i} className={styles.eventItem}>
              <span className={styles.eventTitle}>{event.title}</span>
              <span className={styles.eventDate}>{event.date}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}