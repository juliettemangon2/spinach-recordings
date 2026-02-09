import { PageShell } from '@/components/PageShell'
import { CardGrid } from '@/components/CardGrid'

const resources = [
  { 
    title: 'Artist Burnout', 
    slug: 'artist-burnout',
    description: 'Understanding and preventing burnout in the music industry.'
  },
  { 
    title: 'Reputation', 
    slug: 'reputation',
    description: 'Building and maintaining your reputation as an artist.'
  },
  { 
    title: 'Public Perception vs Meta Perception', 
    slug: 'public-perception-vs-meta-perception',
    description: 'Understanding how others see you versus how you think they see you.'
  },
]

export default function ResourcesPage() {
  return (
    <PageShell title="Resources">
      <CardGrid 
        items={resources.map(resource => ({
          title: resource.title,
          href: `/resources/${resource.slug}`,
          description: resource.description,
        }))}
        columns={2}
      />
    </PageShell>
  )
}
