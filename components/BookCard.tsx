import Image from 'next/image'
import type { Book } from '@/data/resources'
import styles from './BookCard.module.css'

interface BookCardProps extends Book {}

export function BookCard({ title, coverImage,  buyUrl }: BookCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.coverWrapper}>
        <Image
          src={coverImage}
          alt={`${title}`}
          fill
          className={styles.cover}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className={styles.meta}>
        <p className={styles.title}>{title}</p>
        {buyUrl && buyUrl !== '#' && (
          <a
            href={buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buyLink}
          >
            Buy Book →
          </a>
        )}
      </div>
    </div>
  )
}