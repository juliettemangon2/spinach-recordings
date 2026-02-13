'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
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

  return (
    <header className={styles.header}>
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

            <Link
              href="/"
              className={pathname === '/' ? styles.active : ''}
            >
              Home
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
              <div className={styles.dropdownMenu}>
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

        {/* Right Side - Social/Utils */}
        <div className={styles.rightNav}>
          <div className={styles.socialIcons}>
            {/* Instagram */}
            
             <a href="https://instagram.com/spinach"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>

            {/* Spotify */}
            <a
              href="https://open.spotify.com/spinach"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Spotify" >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com/spinach"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="X"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/spinach"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="YouTube"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          {/* Language Selector */}
          <button className={styles.languageSelector} aria-label="Select language">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.globeIcon}>
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span>English</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          {/* Cart */}
          <Link href="/cart" className={styles.cart} aria-label="Cart">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className={styles.cartCount}>0</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className={styles.mobileNav}>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className={pathname === '/about' ? styles.active : ''}>About</Link>

          <button className={`${styles.mobileDropdownTrigger} ${pathname.startsWith('/artists') ? styles.active : ''}`} onClick={() => setArtistsOpen(!artistsOpen)}>
            Artists {artistsOpen ? '−' : '+'}
          </button>
          {artistsOpen && (
            <div className={styles.mobileSubmenu}>
              {artists.map((artist) => (
                <Link key={artist.slug} href={`/artists/${artist.slug}`} onClick={() => setMobileMenuOpen(false)}>{artist.name}</Link>
              ))}
            </div>
          )}

          <Link href="/our-team" onClick={() => setMobileMenuOpen(false)} className={pathname === '/our-team' ? styles.active : ''}>Our Team</Link>
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className={pathname === '/' ? styles.active : ''}>Home</Link>
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

          {/* Mobile Social Icons */}
          <div className={styles.mobileSocials}>
            <a href="https://instagram.com/spinach" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg>
            </a>
            <a href="https://open.spotify.com/spinach" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Spotify">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" /></svg>
            </a>
            <a href="https://x.com/spinach" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="https://youtube.com/spinach" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="YouTube">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}