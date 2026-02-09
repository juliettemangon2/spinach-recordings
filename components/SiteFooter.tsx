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
              in <em className={styles.orange}>D.C.</em>, <em className={styles.orange}>London,</em> and <em className={styles.lightgreen}>New York</em>.
            </p>
            <p>Dedicated to doing their life&apos;s work.</p>
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
                Coming<br />
                Soon
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
        </div>
      </div>
    </footer>
  )
}