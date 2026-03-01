import styles from './page.module.css'

export default function HomePage() {
  return (
    <div className={styles.page}>
      <video
        className={styles.videoBg}
        src="/home/viktori.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  )
}