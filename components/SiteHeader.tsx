'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import styles from './SiteHeader.module.css'

const artists = [
  { name: 'Raury', slug: 'raury' },
  { name: 'Lauren Soyung', slug: 'lauren-soyung' },
  { name: 'AJAI', slug: 'ajai' },
  { name: 'Jayna Elise', slug: 'jayna-elise' },
  { name: 'Brennan Gregg', slug: 'brennan-gregg' },
  { name: 'Savannah Summers', slug: 'savannah-summers' },
]

const resources = [
  { name: 'Artist Burnout', slug: 'artist-burnout' },
  { name: 'Reputation', slug: 'reputation' },
  { name: 'Public Perception vs Meta Perception', slug: 'public-perception-vs-meta-perception' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [artistsOpen, setArtistsOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  const isSolidBg = pathname.startsWith('/founders-notes')
  const isOurTeam = pathname === '/our-team'
  const isResourcesPage = pathname.startsWith('/resources/')
  const useLightText = pathname === '/' || pathname === '/about' || pathname === '/artists' || pathname === '/programs'

  const headerClass = [
    styles.header,
    isSolidBg ? styles.solidBg : '',
    isOurTeam ? styles.creamBg : '',
    isResourcesPage ? styles.charcoalBg : '',
    useLightText ? styles.lightText : '',
  ].filter(Boolean).join(' ')

  return (
    <header className={headerClass}>
      <div className={styles.container}>
        {/* Left Navigation - Two Rows */}
        <nav className={styles.leftNav}>
          {/* Row 1 */}
          <div className={styles.navRow}>
            <Link
              href="/about"
              className={pathname === '/about' ? styles.active : ''}
            >
              About
            </Link>

            <div className={styles.dropdown}>
              <Link
                href="/artists"
                className={`${styles.dropdownTrigger} ${pathname.startsWith('/artists') ? styles.active : ''}`}
              >
                Artists
              </Link>
              <div className={styles.dropdownMenu}>
                {artists.map((artist) => (
                  <Link key={artist.slug} href={`/artists/#${artist.slug}`}>
                    {artist.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/our-team"
              className={pathname === '/our-team' ? styles.active : ''}
            >
              Our Team
            </Link>

          </div>

          {/* Row 2 */}
          <div className={styles.navRow}>
            <Link
              href="/founders-notes"
              className={pathname === '/founders-notes' ? styles.active : ''}
            >
              Founder&apos;s Notes
            </Link>

            <Link
              href="/programs"
              className={pathname === '/programs' ? styles.active : ''}
            >
              Programs
            </Link>

            <div className={styles.dropdown}>
              <button
                className={`${styles.dropdownTrigger} ${pathname.startsWith('/resources') ? styles.active : ''}`}
              >
                Resources
              </button>
              <div className={`${styles.dropdownMenu} ${styles.dropdownMenuRight}`}>
                {resources.map((resource) => (
                  <Link key={resource.slug} href={`/resources/${resource.slug}`}>
                    {resource.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Center Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>SPINACH</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`${styles.mobileMenuButton} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Backdrop */}
      {mobileMenuOpen && (
        <div className={styles.backdrop} onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className={styles.mobileNav}>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className={pathname === '/about' ? styles.active : ''}>About</Link>

          <div className={styles.mobileDropdownRow}>
            <Link href="/artists" onClick={() => setMobileMenuOpen(false)} className={pathname === '/artists' ? styles.active : ''}>Artists</Link>
            <button className={styles.mobileDropdownToggle} onClick={() => setArtistsOpen(!artistsOpen)} aria-label={artistsOpen ? 'Collapse artists' : 'Expand artists'}>
              {artistsOpen ? '−' : '+'}
            </button>
          </div>
          {artistsOpen && (
            <div className={styles.mobileSubmenu}>
              {artists.map((artist) => (
                <Link key={artist.slug} href={`/artists/#${artist.slug}`} onClick={() => setMobileMenuOpen(false)}>{artist.name}</Link>
              ))}
            </div>
          )}

          <Link href="/our-team" onClick={() => setMobileMenuOpen(false)} className={pathname === '/our-team' ? styles.active : ''}>Our Team</Link>
          <Link href="/founders-notes" onClick={() => setMobileMenuOpen(false)} className={pathname === '/founders-notes' ? styles.active : ''}>Founder&apos;s Notes</Link>
          <Link href="/programs" onClick={() => setMobileMenuOpen(false)} className={pathname === '/programs' ? styles.active : ''}>Programs</Link>

          <button className={`${styles.mobileDropdownTrigger} ${pathname.startsWith('/resources') ? styles.active : ''}`} onClick={() => setResourcesOpen(!resourcesOpen)}>
            Resources {resourcesOpen ? '−' : '+'}
          </button>
          {resourcesOpen && (
            <div className={styles.mobileSubmenu}>
              {resources.map((resource) => (
                <Link key={resource.slug} href={`/resources/${resource.slug}`} onClick={() => setMobileMenuOpen(false)}>{resource.name}</Link>
              ))}
            </div>
          )}

        </nav>
      )}
    </header>
  )
}