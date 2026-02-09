import Link from 'next/link'
import Image from 'next/image'
import styles from './CardGrid.module.css'

interface CardItem {
  title: string
  href: string
  image?: string
  description?: string
}

interface CardGridProps {
  items: CardItem[]
  columns?: 2 | 3 | 4
}

export function CardGrid({ items, columns = 3 }: CardGridProps) {
  return (
    <div className={styles.grid} data-columns={columns}>
      {items.map((item) => (
        <Link key={item.href} href={item.href} className={styles.card}>
          {item.image && (
            <div className={styles.imageWrapper}>
              {/* Placeholder for when images aren't available yet */}
              <div className={styles.imagePlaceholder}>
                <span>{item.title.charAt(0)}</span>
              </div>
              {/* Uncomment when you have actual images:
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={styles.image}
              />
              */}
            </div>
          )}
          <div className={styles.content}>
            <h3 className={styles.title}>{item.title}</h3>
            {item.description && (
              <p className={styles.description}>{item.description}</p>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}
