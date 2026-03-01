import Image from 'next/image'
import styles from './founders-notes.module.css'

const images = [
  { src: '/impact-report/impactFirstPage.jpg', alt: 'Impact Report - Page 1' },
  { src: '/impact-report/impactSecondPage.jpg', alt: 'Impact Report - Page 2' },
  { src: '/impact-report/impactThirdPage.jpg', alt: 'Impact Report - Page 3' },
  { src: '/impact-report/impactFourthPage.jpg', alt: 'Impact Report - Page 4' },
]

export default function FoundersNotesPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Founder's Notes</h1>
      </header>

      <section className={styles.imagesSection}>
        <div className={styles.imageRow}>
          {images.slice(0, 2).map((img, i) => (
            <div key={img.src} className={styles.imageWrapper}>
              <Image
                src={img.src}
                alt={img.alt}
                width={0}
                height={0}
                sizes="(max-width: 700px) 100vw, 50vw"
                className={styles.image}
                priority={i === 0}
              />
            </div>
          ))}
        </div>
        <div className={styles.imageRow}>
          {images.slice(2, 4).map((img) => (
            <div key={img.src} className={styles.imageWrapper}>
              <Image
                src={img.src}
                alt={img.alt}
                width={0}
                height={0}
                sizes="(max-width: 700px) 100vw, 50vw"
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
