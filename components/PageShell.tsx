import styles from './PageShell.module.css'

interface PageShellProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
  centered?: boolean
}

export function PageShell({ 
  children, 
  title, 
  subtitle,
  centered = false 
}: PageShellProps) {
  return (
    <div className={styles.page}>
      {(title || subtitle) && (
        <header className={`${styles.header} ${centered ? styles.centered : ''}`}>
          {title && <h1 className={styles.title}>{title}</h1>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </header>
      )}
      <div className={`${styles.content} ${centered ? styles.centered : ''}`}>
        {children}
      </div>
    </div>
  )
}
