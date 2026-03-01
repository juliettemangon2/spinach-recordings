import type { Podcast } from '@/data/resources'
import styles from './PodcastCard.module.css'

interface PodcastCardProps extends Podcast {}

export function PodcastCard({ spotifyEmbedUrl, podcast, episode, hideEpisode }: PodcastCardProps) {
  return (
    <div className={styles.card}>
      <iframe
        className={styles.embed}
        src={spotifyEmbedUrl}
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title={podcast}
      />
      <div className={styles.meta}>
        <p><strong>Podcast:</strong> {podcast}</p>
        {!hideEpisode && <p><strong>Episode:</strong> {episode}</p>}
      </div>
    </div>
  )
}