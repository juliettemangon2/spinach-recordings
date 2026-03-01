import styles from './SiteFooter.module.css'

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Column 1 */}
        <div className={styles.column1}>
          <div className={styles.teamsTitle}>
            <h2>Our Teams</h2>
          </div>

          <div className={styles.newsletter}>
            <h3 className={styles.newsletterTitle}>Join the Mission</h3>
            <form className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className={styles.emailInput}
                required
              />
              <button type="submit" className={styles.submitButton}>
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Column 2 */}
        <div className={styles.column2}>
          <div className={styles.tagline}>
            <p>
              in <em className={styles.green}>D.C.</em>, <em className={styles.green}>London,</em> and <em className={styles.green}>New York</em>.
            </p>
          </div>

          <div className={styles.locations}>
            <div className={styles.location}>
              <p className={styles.locationCity}>New York</p>
              <p className={styles.locationAddress}>
                45 Main Street,<br />
                6th Floor,<br />
                Brooklyn, NY<br />
                11201
              </p>
            </div>

            <div className={styles.location}>
              <p className={styles.locationCity}>Freudian Slip Publishing</p>
              <p className={styles.locationAddress}>
                78 Crosby St, 2nd Floor,<br />
                Brooklyn, NY 10012
              </p>
            </div>

            <div className={styles.location}>
              <p className={styles.locationCity}>London HQ</p>
              <p className={styles.locationAddress}>
                Coming Soon
              </p>
            </div>
          </div>
        </div>

        {/* Column 3 - Contact (spans both rows) */}
        <div className={styles.contact}>
          <h3 className={styles.contactTitle}>Contact Us</h3>
          <p className={styles.contactText}>
            To learn more about our previous projects, or to discuss potential engagement, you can reach us at
          </p>
          <a href="mailto:contact@spinach-records.com" className={styles.contactEmail}>
            contact@spinach-records.com
          </a>
          <div className={styles.footerSocials}>
            <a href="https://instagram.com/spinachgang" target="_blank" rel="noopener noreferrer" className={styles.footerSocialIcon} aria-label="Instagram">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="https://open.spotify.com/playlist/41zCaDK56B96cKVPAVSYqd?si=4abc05a128dc46ac&nd=1&dlsi=5f38865e511b429f" target="_blank" rel="noopener noreferrer" className={styles.footerSocialIcon} aria-label="Spotify">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </a>
            <a href="https://x.com/whoisspinach" target="_blank" rel="noopener noreferrer" className={styles.footerSocialIcon} aria-label="X">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://youtube.com/spinach" target="_blank" rel="noopener noreferrer" className={styles.footerSocialIcon} aria-label="YouTube">
              <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}