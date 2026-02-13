import { PageShell } from '@/components/PageShell'
import styles from './artists.module.css'

interface ArtistRelease {
  title: string
  image: string
  link: string
}

interface ArtistData {
  slug: string
  name: string
  tagline: string
  bio: string
  photo: string
  socials: { label: string; url: string }[]
  streaming: { label: string; url: string }[]
  releases: ArtistRelease[]
  videos: { title: string; embedUrl: string }[]
  isPastClient?: boolean
}

const artists: ArtistData[] = [
  {
    slug: 'raury',
    name: 'Raury',
    tagline: '',
    bio: 'Raury is a free-spirited singer, rapper, guitarist, songwriter, and producer. He mixes alternative folk, rap, and electronic music while counting the diverse likes of Chance the Rapper, King Krule, and Lorde as contemporaries. The Atlanta-based artist made his commercial full-length debut in 2015 with All We Need, a ceaselessly positive album that hit the Billboard 200 with help from the lead single "Friends," featuring Tom Morello. Raury then transitioned from major-label Columbia to independence, and has since released projects such as the comparatively hushed Fervent (2019) and funkier Strawberry Moon (2022)',
    photo: '/images/artists/raury.jpg',
    socials: [
      { label: 'INSTAGRAM', url: 'https://www.instagram.com/raury/' },
    ],
    streaming: [
      { label: 'SPOTIFY', url: 'https://open.spotify.com/artist/2PU4qFehXQF7WnlFsJpBiJ?si=Vu7qHW1aQdC_60ZVwx-o3w&nd=1&dlsi=2d6db48fda4448d2' },
      { label: 'APPLE MUSIC', url: 'https://music.apple.com/us/artist/raury/834408903' },
      { label: 'SOUNDCLOUD', url: 'https://soundcloud.com/raury' },
    ],
    releases: [
      { title: 'Indigo Child', image: '/images/releases/placeholder.jpg', link: '#' },
      { title: 'ALL WE NEED', image: '/images/releases/placeholder.jpg', link: '#' },
      { title: 'BONFYE', image: '/images/releases/placeholder.jpg', link: '#' },
      { title: 'STRAWBERRY MOON', image: '/images/releases/placeholder.jpg', link: '#' },
    ],
    videos: [
      { title: 'Feel Good ft B.o.B. (Official Music Video)', embedUrl: 'https://www.youtube-nocookie.com/embed/SWXCABmaJ4k' },
      { title: 'Raury "Heatwave" | Zig-Zag Studio Presents: Studio Sessions', embedUrl: 'https://www.youtube-nocookie.com/embed/C1golwUV8qg' },
    ],
  },
  {
    slug: 'lauren-soyung',
    name: 'Lauren Soyung',
    tagline: '',
    bio: 'Lauren is a 24-year old Korean-American singer-songwriter in Los Angeles and raised in the OC now based in Paris. She has received her certificate degree in Innovations In Textiles and Engineering at MIT. With 10+ years of professional dance experience, trained and competing in Ballet, Ballet-en-Pointe, Tap, Jazz, Lyrical, Contemporary, Hip-Hop and Musical Theatre. She started off as a content creator and industry model signed in 5 countries until launching her brand SOYUNG at the end of 2023. Continually expressing her story through multiple mediums of art, she now seeks to do through auditory story.',
    photo: '/images/artists/lauren-soyung.jpg',
    socials: [
      { label: 'INSTAGRAM', url: 'https://www.instagram.com/laurensoyung/' },
    ],
    streaming: [
      { label: 'SPOTIFY', url: '#' },
      { label: 'APPLE MUSIC', url: '#' },
    ],
    releases: [
      { title: 'Release Title', image: '/images/releases/placeholder.jpg', link: '#' },
    ],
    videos: [],
  },
  {
    slug: 'ajai',
    name: 'AJAI',
    tagline: '',
    bio: 'Ajai Kasim is a multidisciplinary creator whose work spans music, visual storytelling, fashion design, and millinery. Rooted in legacy, identity, and ritual, Kasim crafts immersive experiences that explore the emotional, spiritual, and cultural layers of Black expression. Whether composing a song, designing a silhouette, or shaping a crown by hand, he offers stories that resonate across medium and meaning.',
    photo: '/images/artists/ajai.jpg',
    socials: [
      { label: 'INSTAGRAM', url: 'https://www.instagram.com/twisted.cant.fix.it/' },
      { label: 'YOUTUBE', url: 'https://www.youtube.com/@ajaikasim6168' },
    ],
    streaming: [
      { label: 'SPOTIFY', url: 'https://open.spotify.com/artist/3S2igCADbgBn11o3VEEASQ?si=hrf-8BCOTWeo8ZbaxvCONg&nd=1&dlsi=00c7126180ea4eb8' },
      { label: 'APPLE MUSIC', url: 'https://music.apple.com/us/artist/ainae/1375060570' },
      { label: 'SOUNDCLOUD', url: 'https://soundcloud.com/ajaikasim-music' }
    ],
    releases: [],
    videos: [
      { title: 'AJAI -FROM SPIRIT TO MAN (Official Video)', embedUrl: 'https://youtu.be/_jHoGQxqt6I' },
      { title: 'AJAI - ur favorite song (Official Video) ', embedUrl: 'https://youtu.be/veiF8qmARh0' },
    ],
  },
  {
    slug: 'jayna-elise',
    name: 'Jayna Elise',
    tagline: '',
    bio: 'Jayna Elise is a dynamic vocalist and performer whose star continues to rise. A finalist on American Idol, she captivates audiences with her soulful voice and undeniable stage presence. Most recently, Jayna headlined the North American tour of TINA: The Tina Turner Musical, bringing electrifying performances to audiences nationwide. With a style rooted in R&B and pop, her music weaves heartfelt storytelling with powerful melodies, showcasing her unique artistry. At Spinach Records, Jayna Elise is crafting a sound that blends classic influences with a modern edge, setting the stage for a bold and inspiring career.',
    photo: '/images/artists/jayna-elise.jpg',
    socials: [
      { label: 'INSTAGRAM', url: '#' },
    ],
    streaming: [
      { label: 'SPOTIFY', url: '#' },
      { label: 'APPLE MUSIC', url: '#' },
    ],
    releases: [
      { title: 'Release Title', image: '/images/releases/placeholder.jpg', link: '#' },
    ],
    videos: [],
  },
  {
    slug: 'brennan-gregg',
    name: 'Brennan Gregg',
    tagline: '',
    bio: 'Brennan is a singer-songwriter with a penchant for lyric-forward alternative pop. He believes the mind is both a labyrinth and an endless expanse, and music helps us tread between the two. Introspective, potent, and queer — Brennan paints portraits of this complex network of machinations and desires through song. He invites any and all to weave through his ruminations — those of love, loss, addiction — like driving through an empty suburban street at 4am.',
    photo: '/images/artists/brennan-gregg.jpg',
    socials: [
      { label: 'INSTAGRAM', url: 'https://www.instagram.com/brennangregg/' },
    ],
    streaming: [
      { label: 'SPOTIFY', url: '#' },
      { label: 'APPLE MUSIC', url: '#' },
    ],
    releases: [
      { title: 'Release Title', image: '/images/releases/placeholder.jpg', link: '#' },
    ],
    videos: [],
  },
  {
    slug: 'savannah-summers',
    name: 'Savannah Summers',
    tagline: '',
    bio: 'sav! (Savannah Summers) is a California-born artist and performer whose journey began in childhood, acting in film, commercials, and television.',
    photo: '/images/artists/savannah-summers.jpg',
    socials: [
      { label: 'INSTAGRAM', url: 'https://www.instagram.com/savannahraesummers/' },
      { label: 'TIKTOK', url: 'https://www.tiktok.com/@savirae' },
    ],
    streaming: [
      { label: 'SPOTIFY', url: 'https://open.spotify.com/artist/4jP3M6eTjqHE6KFDAyhBRG?si=XcTbuHkXTrSn6ffOx1Fb2A&nd=1&dlsi=adf11ef5c4444961' },
      { label: 'APPLE MUSIC', url: 'https://music.apple.com/us/artist/sav/1573659848' },
    ],
    releases: [
      { title: 'Release Title', image: '/images/releases/placeholder.jpg', link: '#' },
    ],
    videos: [],
  },
]

const pastClients: ArtistData[] = [
  {
    slug: 'neena-roe',
    name: 'Neena Roe',
    tagline: '',
    bio: 'neena roe.',
    photo: '/images/artists/placeholder.jpg',
    socials: [
      { label: 'INSTAGRAM', url: '#' },
    ],
    streaming: [
      { label: 'SPOTIFY', url: '#' },
      { label: 'APPLE MUSIC', url: '#' },
    ],
    releases: [],
    videos: [],
    isPastClient: true,
  },
  {
    slug: 'bisou-bisou-radio',
    name: 'Bisou Bisou Radio',
    tagline: '',
    bio: 'Bisou Bisou radio',
    photo: '/images/artists/placeholder.jpg',
    socials: [
      { label: 'INSTAGRAM', url: '#' },
    ],
    streaming: [
      { label: 'SPOTIFY', url: '#' },
      { label: 'APPLE MUSIC', url: '#' },
    ],
    releases: [],
    videos: [],
    isPastClient: true,
  },

]

export default function ArtistsPage() {
  return (
    <PageShell fullBleed>
      <div className={styles.page}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.pageTitle}>Artists</h1>
            <p className={styles.blurb}>
              We build with artists who move culture forward — nurturing bold
              voices, championing originality, and creating space for the
              curious to thrive. Every artist we work with is a partner in
              something bigger.
            </p>
          </div>
        </section>

        {/* Artist Name List */}
        <section className={styles.artistList}>
          <div className={styles.container}>
            <nav className={styles.artistNav}>
              {artists.map((artist) => (
                <a
                  key={artist.slug}
                  href={`#${artist.slug}`}
                  className={styles.artistNavLink}
                >
                  {artist.name}
                </a>
              ))}
              <a
                href="#past-clients"
                className={`${styles.artistNavLink} ${styles.pastClientsLink}`}
              >
                Past Clients
              </a>
            </nav>
          </div>
          <div className={styles.divider} />
        </section>

        {/* Individual Artist Sections */}
        {artists.map((artist, index) => (
          <section
            key={artist.slug}
            id={artist.slug}
            className={styles.artistSection}
          >
            <div className={styles.container}>
              {/* Name & Bio + Photo */}
              <div className={styles.artistHeader}>
                <div className={styles.artistInfo}>
                  <h2 className={styles.artistName}>{artist.name}</h2>
                  {artist.tagline && (
                    <p className={styles.artistTagline}>{artist.tagline}</p>
                  )}
                  <p className={styles.artistBio}>{artist.bio}</p>
                  {/* Links: Socials & Streaming */}
                  <div className={styles.linksRow}>
                    <div className={styles.linkGroup}>
                      <h4 className={styles.linkGroupTitle}>SOCIALS</h4>
                      {artist.socials.map((s) => (
                        <a
                          key={s.label}
                          href={s.url}
                          className={styles.linkItem}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {s.label}
                        </a>
                      ))}
                    </div>
                    <div className={styles.linkGroup}>
                      <h4 className={styles.linkGroupTitle}>STREAM</h4>
                      {artist.streaming.map((s) => (
                        <a
                          key={s.label}
                          href={s.url}
                          className={styles.linkItem}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {s.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={styles.artistPhotoWrapper}>
                  <div className={styles.artistPhotoPlaceholder} />
                </div>
              </div>

              {/* Releases */}
              {artist.releases.length > 0 && (
                <div className={styles.releasesSection}>
                  <h3 className={styles.sectionTitle}>Releases.</h3>
                  <p className={styles.sectionSubtitle}>
                    Listen to {artist.name} releases
                  </p>
                  <div className={styles.releasesGrid}>
                    {artist.releases.map((release, i) => (
                      <a
                        key={i}
                        href={release.link}
                        className={styles.releaseCard}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className={styles.releaseImagePlaceholder} />
                        <span className={styles.releaseTitle}>
                          <strong>{release.title},</strong> by {artist.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Videos */}
              {artist.videos.length > 0 && (
                <div className={styles.videosSection}>
                  <h3 className={styles.sectionTitle}>Videos.</h3>
                  <p className={styles.sectionSubtitle}>
                    Watch {artist.name}&rsquo;s latest music videos.
                  </p>
                  <div className={styles.videosGrid}>
                    {artist.videos.map((video, i) => (
                      <div key={i} className={styles.videoWrapper}>
                        <iframe
                          src={video.embedUrl}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className={styles.videoIframe}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Divider between artists */}
            {index < artists.length - 1 && (
              <div className={styles.artistDivider} />
            )}
          </section>
        ))}

        {/* Past Clients Section */}
        <section id="past-clients" className={styles.pastClientsSection}>
          <div className={styles.pastClientsDivider} />
          <div className={styles.container}>
            <h2 className={styles.pastClientsTitle}>Past Clients</h2>
            
          </div>

          {/* Past Client Artist Sections */}
          {pastClients.map((client, index) => (
            <section
              key={client.slug}
              id={client.slug}
              className={styles.artistSection}
            >
              <div className={styles.container}>
                {/* Name & Bio + Photo */}
                <div className={styles.artistHeader}>
                  <div className={styles.artistInfo}>
                    <h2 className={styles.artistName}>{client.name}</h2>
                    {client.tagline && (
                      <p className={styles.artistTagline}>{client.tagline}</p>
                    )}
                    <p className={styles.artistBio}>{client.bio}</p>
                    {/* Links: Socials & Streaming */}
                    <div className={styles.linksRow}>
                      <div className={styles.linkGroup}>
                        <h4 className={styles.linkGroupTitle}>SOCIALS</h4>
                        {client.socials.map((s) => (
                          <a
                            key={s.label}
                            href={s.url}
                            className={styles.linkItem}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {s.label}
                          </a>
                        ))}
                      </div>
                      <div className={styles.linkGroup}>
                        <h4 className={styles.linkGroupTitle}>STREAM</h4>
                        {client.streaming.map((s) => (
                          <a
                            key={s.label}
                            href={s.url}
                            className={styles.linkItem}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {s.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={styles.artistPhotoWrapper}>
                    <div className={styles.artistPhotoPlaceholder} />
                  </div>
                </div>
              </div>

              {/* Divider between past clients */}
              {index < pastClients.length - 1 && (
                <div className={styles.artistDivider} />
              )}
            </section>
          ))}
        </section>
      </div>
    </PageShell>
  )
}