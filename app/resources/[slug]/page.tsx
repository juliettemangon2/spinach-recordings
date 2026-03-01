import { notFound } from 'next/navigation'
import { resourcesData } from '@/data/resources'
import { PodcastCard } from '@/components/PodCastCard'
import { BookCard } from '@/components/BookCard'
import styles from './page.module.css'

interface Props {
  params: Promise<{ slug: string }>
}

// Pre-generate all resource pages at build time
export function generateStaticParams() {
  return resourcesData.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const resource = resourcesData.find((r) => r.slug === slug)
  return {
    title: resource ? `${resource.title} — Resources` : 'Resources',
  }
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params
  const resource = resourcesData.find((r) => r.slug === slug)

  if (!resource) notFound()

  return (
    <main className={styles.page}>

      {/* ── LISTEN section ───────────────────────────── */}
      <section className={styles.listenSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Listen.</span>
        </div>
        <div className={styles.podcastGrid}>
          {resource.podcasts.map((podcast) => (
            <PodcastCard key={podcast.id} {...podcast} />
          ))}
        </div>
      </section>

      {/* ── READ section ─────────────────────────────── */}
      <section className={styles.readSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Read.</span>
        </div>
        <div className={styles.bookGrid}>
          {resource.books.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </section>

    </main>
  )
}