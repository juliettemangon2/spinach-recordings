import { PageShell } from '@/components/PageShell'
import styles from './artists.module.css'
import Image from 'next/image'


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
  press?: { title: string; url: string }[]
  socials: { label: string; url: string }[]
  streaming: { label: string; url: string }[]
  releases: ArtistRelease[]
  videos: { title: string; embedUrl: string }[]
  isPastClient?: boolean
  layout?: 'default' | 'wideTop'


}


const artists: ArtistData[] = [
  {
    slug: 'raury',
    name: 'Raury',
    tagline: '',
    bio: 'Raury is a free-spirited singer, rapper, guitarist, songwriter, and producer. He mixes alternative folk, rap, and electronic music while counting the diverse likes of Chance the Rapper, King Krule, and Lorde as contemporaries. The Atlanta-based artist made his commercial full-length debut in 2015 with All We Need, a ceaselessly positive album that hit the Billboard 200 with help from the lead single "Friends," featuring Tom Morello. Raury then transitioned from major-label Columbia to independence, and has since released projects such as the comparatively hushed Fervent (2019) and funkier Strawberry Moon (2022)',
    photo: '/artists/raury.jpeg',
    socials: [
      { label: 'INSTAGRAM', url: 'https://www.instagram.com/raury/' },
    ],
    streaming: [
      { label: 'SPOTIFY', url: 'https://open.spotify.com/artist/2PU4qFehXQF7WnlFsJpBiJ?si=Vu7qHW1aQdC_60ZVwx-o3w&nd=1&dlsi=2d6db48fda4448d2' },
      { label: 'APPLE MUSIC', url: 'https://music.apple.com/us/artist/raury/834408903' },
      { label: 'SOUNDCLOUD', url: 'https://soundcloud.com/raury' },
    ],
    releases: [
      { title: 'The Blue Shell Theory', image: '/artist-releases/theblueshelltheory.webp', link: 'https://open.spotify.com/album/4xvV3aQoq8PtWncqDHxlT8' },

      { title: 'Indigo Child', image: '/artist-releases/indigochild.webp', link: 'https://open.spotify.com/album/3HVk2UGwXUfE51s1MmPzrL' },
      { title: 'ALL WE NEED', image: '/artist-releases/allweneed.jpg', link: 'https://open.spotify.com/album/5UOaWbjsdPwjPzzQbCGPWl' },
      { title: 'BONFYE', image: '/artist-releases/bonfye.webp', link: '#' },
    ],
    videos: [
      { title: 'Feel Good ft B.o.B. (Official Music Video)', embedUrl: 'https://www.youtube-nocookie.com/embed/SWXCABmaJ4k' },
      { title: 'Raury "Heatwave" | Zig-Zag Studio Presents: Studio Sessions', embedUrl: 'https://www.youtube-nocookie.com/embed/C1golwUV8qg' },
    ],
    press: [
      { title: 'Raury’s Revolution, Interview Magazine', url: 'https://www.interviewmagazine.com/music/raury-all-we-need' },
    ],

  },
  
  {
    slug: 'savannah-summers',
    name: 'sav!',
    tagline: '',
    bio: 'sav! (Savannah Summers) is a California-born artist and performer whose journey began in childhood, acting in film, commercials, and television. She debuted in the critically acclaimed LGBTQ+ film Psycho Baby, before transitioning to music after studying Theatre in college. sav! launched her music career in 2021 with her debut EP Astral Projection, an acoustic indie project that explores themes of personal growth, confronting the past, and embracing the future. Her notable tracks include "Hollywood," "All the Wrong People," "Free Britney," and "They Don’t Like My Past, They Like My Future."',
    photo: '/artists/savannah-summers.jpg',
    socials: [
      { label: 'INSTAGRAM', url: 'https://www.instagram.com/savannahraesummers/' },
      { label: 'TIKTOK', url: 'https://www.tiktok.com/@savirae' },
    ],
    streaming: [
      { label: 'SPOTIFY', url: 'https://open.spotify.com/artist/5tIBvVy2mmNgrVFEzFCGBA' },
      { label: 'APPLE MUSIC', url: 'https://music.apple.com/us/artist/sav/1573659848' },
    ],
    releases: [
      { title: ' idk (PARTY!)', image: '/artist-releases/idkparty.webp', link: 'https://open.spotify.com/track/3veYET0gnCZLiLvp0piUbQ' },
      { title: '4theindustry (UH OH!) ', image: '/artist-releases/4theindustry.webp', link: 'https://open.spotify.com/album/7JP4Jjc7H7uXS22pr8V0qS' },
      { title: 'ASTRAL PROJECTION (Live) ', image: '/artist-releases/astralprojection.webp', link: 'https://open.spotify.com/album/2gimiECXkh1nlLD1KS40Gt' },


    ],
    videos: [],
  },
  {
    slug: 'lauren-soyung',
    name: 'Lauren Soyung',
    tagline: '',
    bio: 'Lauren is a 24-year old Korean-American singer-songwriter in Los Angeles and raised in the OC now based in Paris. She has received her certificate degree in Innovations In Textiles and Engineering at MIT. With 10+ years of professional dance experience, trained and competing in Ballet, Ballet-en-Pointe, Tap, Jazz, Lyrical, Contemporary, Hip-Hop and Musical Theatre. She started off as a content creator and industry model signed in 5 countries until launching her brand SOYUNG at the end of 2023. Continually expressing her story through multiple mediums of art, she now seeks to do through auditory story.',
    photo: '/artists/lauren-soyung.jpg',
    socials: [
      { label: 'INSTAGRAM', url: 'https://www.instagram.com/laurensoyung/' },
    ],
    streaming: [],
    releases: [],
    videos: [],
  },

  {
    slug: 'ajai',
    name: 'AJAI',
    tagline: '',
    bio: 'Ajai Kasim is a multidisciplinary creator whose work spans music, visual storytelling, fashion design, and millinery. Rooted in legacy, identity, and ritual, Kasim crafts immersive experiences that explore the emotional, spiritual, and cultural layers of Black expression. Whether composing a song, designing a silhouette, or shaping a crown by hand, he offers stories that resonate across medium and meaning.',
    photo: '/artists/ajai.jpg',
    socials: [
      { label: 'INSTAGRAM', url: 'https://www.instagram.com/twisted.cant.fix.it/' },
      { label: 'YOUTUBE', url: 'https://www.youtube.com/@ajaikasim6168' },
    ],
    streaming: [
      { label: 'SPOTIFY', url: 'https://open.spotify.com/artist/3S2igCADbgBn11o3VEEASQ?si=hrf-8BCOTWeo8ZbaxvCONg&nd=1&dlsi=00c7126180ea4eb8' },
      { label: 'APPLE MUSIC', url: 'https://music.apple.com/us/artist/ainae/1375060570' },
      { label: 'SOUNDCLOUD', url: 'https://soundcloud.com/ajaikasim-music' }
    ],
    releases: [
      { title: 'FROM SPIRIT TO MAN', image: '/artist-releases/fromspirittoman.webp', link: 'https://open.spotify.com/album/6cvPNXSNLuGlfaavDfoIJ2?si=eHXDuZYyRkKd6pyyiFPkvQ&nd=1&dlsi=71c513dcb07b43cf' },
      { title: 'Crown', image: '/artist-releases/crown.webp', link: 'https://open.spotify.com/album/3Er0frq10kYpvgFjlbEjGP?si=VaXPwaEbR-GwgjDvoQSNTw&nd=1&dlsi=eb8e2d1a53284ee8' },

    ],
    videos: [
      { title: 'AJAI -FROM SPIRIT TO MAN (Official Video)', embedUrl: 'https://www.youtube-nocookie.com/embed/_jHoGQxqt6I' },
      { title: 'AJAI - ur favorite song (Official Video) ', embedUrl: 'https://www.youtube-nocookie.com/embed/veiF8qmARh0' },
    ],
  },

  
  {
    slug: 'brennan-gregg',
    name: 'Brennan Gregg',
    tagline: '',
    bio: 'Brennan is a singer-songwriter with a penchant for lyric-forward alternative pop. He believes the mind is both a labyrinth and an endless expanse, and music helps us tread between the two. Introspective, potent, and queer — Brennan paints portraits of this complex network of machinations and desires through song. He invites any and all to weave through his ruminations — those of love, loss, addiction — like driving through an empty suburban street at 4am.',
    photo: '/artists/brennan-gregg.jpg',
    socials: [
      { label: 'INSTAGRAM', url: 'https://www.instagram.com/brennangregg/' },
      { label: 'TIKTOK', url: 'https://www.tiktok.com/@brennangregg' },
    ],
    streaming: [
      { label: 'SPOTIFY', url: 'https://open.spotify.com/artist/5NB6dotAQG4rdZ3aDDFq6u?si=lufDzgo5RayZ0YzCRVZi2Q&nd=1&dlsi=a3b90864c6af4602' },
      { label: 'APPLE MUSIC', url: 'https://music.apple.com/us/artist/brennan-gregg/1806348352' },
      { label: 'SOUNDCLOUD', url: 'https://soundcloud.com/brennangregg' }
    ],
    releases: [
      { title: 'Gunpowder', image: '/artist-releases/gunpowder.webp', link: 'https://open.spotify.com/track/1FVmja4j73KbLkPFHsvYjA' },
      { title: 'Arizona', image: '/artist-releases/arizona.webp', link: 'https://open.spotify.com/track/5poytcWxVOQZTdBuneyB5b' },
    ],
    videos: [],
    layout: 'wideTop',
  },
  {
    slug: 'jayna-elise',
    name: 'Jayna Elise',
    tagline: '',
    bio: 'Jayna Elise is a dynamic vocalist and performer whose star continues to rise. A finalist on American Idol, she captivates audiences with her soulful voice and undeniable stage presence. Most recently, Jayna headlined the North American tour of TINA: The Tina Turner Musical, bringing electrifying performances to audiences nationwide. With a style rooted in R&B and pop, her music weaves heartfelt storytelling with powerful melodies, showcasing her unique artistry. At Spinach Records, Jayna Elise is crafting a sound that blends classic influences with a modern edge, setting the stage for a bold and inspiring career.',
    photo: '/artists/jayna-elise.jpg',
    socials: [
      { label: 'INSTAGRAM', url: '#' },
    ],
    streaming: [
      { label: 'SPOTIFY', url: '#' },
      { label: 'APPLE MUSIC', url: '#' },
    ],
    releases: [
      { title: 'Instant Classic', image: '/artist-releases/instantclassic.webp', link: 'https://open.spotify.com/album/0vn2gHOqHBTgzJafil1Axe' },

      { title: 'Forgive', image: '/artist-releases/forgive.webp', link: 'https://open.spotify.com/track/6DcvVvNZ6nIyH9NjFEmlRi' },

    ],
    videos: [
      { title: 'Jayna Elise Sings the House Down With “I Have Nothing” (American Idol 2024) ', embedUrl: 'https://www.youtube-nocookie.com/embed/c5i251aMFok' },
      { title: ' “All I Wanted” by Paramore (American Idol 2024) ', embedUrl: 'https://www.youtube-nocookie.com/embed/o8XqtKKT6pw' },
    ],
    press: [
      { title: 'American Idol Finalist Jayna Elise Leads North American Tour of Tina–The Tina Turner Musical, Playbill', url: 'https://playbill.com/article/photos-american-idol-finalist-jayna-elise-leads-north-american-tour-of-tina-the-tina-turner-musical' },
      { title: ' Tina Turner Musical Broadway National North American Tour showing through Jan 12th at Chrysler Hall, Jayna Elise tells us about it, Flagship', url: 'https://www.militarynews.com/norfolk-navy-flagship/community/tina---the-tina-turner-musical-broadway-national-north-american-tour-is-showing-now/article_3c3bda0e-cddb-11ef-af2e-9b2a38becd92.html' },

    ],
  },
]

const pastClients: ArtistData[] = [
  {
    slug: 'neena-roe',
    name: 'Neena Roe',
    tagline: '',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    photo: '/artists/neena-roe.JPG',
    socials: [
      { label: 'INSTAGRAM', url: 'https://www.instagram.com/neenaroe/' },
    ],
    streaming: [
      { label: 'SPOTIFY', url: 'https://open.spotify.com/artist/75PcrN6zs5AF3hDhxYYM8d' },
    ],
    releases: [],
    videos: [],
    isPastClient: true,
  },
  {
    slug: 'bisou-bisou-radio',
    name: 'Bisou Bisou Radio',
    tagline: '',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    photo: '/artists/bisoubisou.jpeg',
    socials: [
      { label: 'INSTAGRAM', url: 'https://www.instagram.com/bisoubisouradio/' },
    ],
    streaming: [
      { label: 'SPOTIFY', url: 'https://open.spotify.com/user/31em6mwxlmnqr5wt5oehxqyoryca' },
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
        {/* Intro: Hero + Artist List on background image */}
        <div className={styles.introWrapper}>
          <div className={styles.introOverlay} />

          {/* Hero */}
          <section className={styles.hero}>
            <div className={styles.container}>
              <span className={styles.eyebrow}>Our Artists</span>
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
          </section>
        </div>

        {/* Individual Artist Sections */}
        {artists.map((artist, index) => (
          <section
            key={artist.slug}
            id={artist.slug}
            className={[
              styles.artistSection,
              artist.layout === 'wideTop' ? styles.artistSectionWideTop : '',
            ].join(' ')}
          >

            <div className={styles.container}>
              {/* Name & Bio + Photo */}
              <div
                className={[
                  styles.artistHeader,
                  artist.layout === 'wideTop' ? styles.artistHeaderWideTop : ''
                ].join(' ')}
              >
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
                    {artist.streaming.length > 0 && (
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
                    )}
                  </div>
                </div>
                <div
                  className={[
                    styles.artistPhotoWrapper,
                    artist.layout === 'wideTop' ? styles.artistPhotoWideTop : ''
                  ].join(' ')}
                >
                  <Image
                    src={artist.photo}
                    alt={artist.name}
                    fill
                    sizes={
                      artist.layout === 'wideTop'
                        ? '(max-width: 900px) 100vw, 70vw'
                        : '(max-width: 900px) 100vw, 40vw'
                    }
                    className={styles.artistPhoto}
                    priority={index === 0}
                  />
                </div>

              </div>

              {/* Releases */}
              {artist.releases.length > 0 && (
                <div className={styles.releasesSection}>
                  <h3 className={styles.sectionTitle}>Releases.</h3>

                  <div className={styles.releasesGrid}>
                    {artist.releases.map((release, i) => (
                      <a
                        key={i}
                        href={release.link}
                        className={styles.releaseCard}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className={styles.releaseImageWrapper}>
                          <Image
                            src={release.image}
                            alt={release.title}
                            fill
                            sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 25vw"
                            className={styles.releaseImage}
                          />
                        </div>
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
                  <h3 className={styles.videosTitle}>Videos</h3>
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

              {/* Press */}
              {artist.press && artist.press.length > 0 && (
                <div className={styles.pressSection}>
                  <h3 className={styles.pressTitle}>Press.</h3>
                  <ul className={styles.pressList}>
                    {artist.press.map((item, i) => (
                      <li key={i} className={styles.pressItem}>
                        <a
                          href={item.url}
                          className={styles.pressLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {(() => {
                            const idx = item.title.lastIndexOf(',');
                            if (idx === -1) return item.title;
                            const headline = item.title.slice(0, idx);
                            const source = item.title.slice(idx + 1).trim();
                            return (
                              <>
                                {headline}, <span className={styles.pressSource}>{source}</span>
                              </>
                            );
                          })()}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>


          </section>
        ))}

        {/* Past Clients Section */}
        <section id="past-clients" className={styles.pastClientsSection}>
          <div className={styles.container}>
            <h2 className={styles.pastClientsTitle}>Past Clients.</h2>

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
                      {client.streaming.length > 0 && (
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
                      )}
                    </div>
                  </div>
                  <div className={styles.artistPhotoWrapper}>
                    <Image
                      src={client.photo}
                      alt={client.name}
                      fill
                      sizes="(max-width: 900px) 100vw, 40vw"
                      className={styles.artistPhoto}
                    />
                  </div>
                </div>
              </div>


            </section>
          ))}
        </section>
      </div>
    </PageShell>
  )
}