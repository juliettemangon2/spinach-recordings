import { PageShell } from '@/components/PageShell'
import { notFound } from 'next/navigation'

// Artist data - this could later come from a CMS or database
const artists: Record<string, { name: string; bio: string }> = {
  'raury': {
    name: 'Raury',
    bio: 'Artist bio coming soon.',
  },
  'ajai': {
    name: 'AJAI',
    bio: 'Artist bio coming soon.',
  },
  'jayna-elise': {
    name: 'Jayna Elise',
    bio: 'Artist bio coming soon.',
  },
  'brennan-gregg': {
    name: 'Brennan Gregg',
    bio: 'Artist bio coming soon.',
  },
  'savannah-summers': {
    name: 'Savannah Summers',
    bio: 'Artist bio coming soon.',
  },
}

// Generate static paths for all artists
export function generateStaticParams() {
  return Object.keys(artists).map((slug) => ({ slug }))
}

interface ArtistPageProps {
  params: Promise<{ slug: string }>
}

export default async function ArtistPage({ params }: ArtistPageProps) {
  const { slug } = await params
  const artist = artists[slug]

  if (!artist) {
    notFound()
  }

  return (
    <PageShell title={artist.name}>
      <div>
        <p>{artist.bio}</p>
        {/* Add more artist content sections here */}
      </div>
    </PageShell>
  )
}
