import { PageShell } from '@/components/PageShell'
import { CardGrid } from '@/components/CardGrid'

const artists = [
  { name: 'Raury', slug: 'raury', image: '/images/artists/raury.jpg' },
  { name: 'AJAI', slug: 'ajai', image: '/images/artists/ajai.jpg' },
  { name: 'Jayna Elise', slug: 'jayna-elise', image: '/images/artists/jayna-elise.jpg' },
  { name: 'Brennan Gregg', slug: 'brennan-gregg', image: '/images/artists/brennan-gregg.jpg' },
  { name: 'Savannah Summers', slug: 'savannah-summers', image: '/images/artists/savannah-summers.jpg' },
]

export default function ArtistsPage() {
  return (
    <PageShell title="Artists">
      <CardGrid 
        items={artists.map(artist => ({
          title: artist.name,
          href: `/artists/${artist.slug}`,
          image: artist.image,
        }))}
      />
    </PageShell>
  )
}