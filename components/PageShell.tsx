import styles from './PageShell.module.css'

interface PageShellProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
  centered?: boolean
  fullBleed?: boolean
}

export function PageShell({ 
  children, 
  title, 
  subtitle,
  centered = false,
  fullBleed = false
}: PageShellProps) {
  return (
    <div className={styles.page}>
      {(title || subtitle) && (
        <header className={`${styles.header} ${centered ? styles.centered : ''}`}>
          {title && <h1 className={styles.title}>{title}</h1>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </header>
      )}
      <div className={`${fullBleed ? styles.contentFullBleed : styles.content} ${centered ? styles.centered : ''}`}>
        {children}
      </div>
    </div>
  )
}