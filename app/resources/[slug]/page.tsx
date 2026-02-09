import { PageShell } from '@/components/PageShell'
import { notFound } from 'next/navigation'

// Resource data - this could later come from a CMS or database
const resources: Record<string, { title: string; content: string }> = {
  'artist-burnout': {
    title: 'Artist Burnout',
    content: 'Resource content coming soon.',
  },
  'reputation': {
    title: 'Reputation',
    content: 'Resource content coming soon.',
  },
  'public-perception-vs-meta-perception': {
    title: 'Public Perception vs Meta Perception',
    content: 'Resource content coming soon.',
  },
}

// Generate static paths for all resources
export function generateStaticParams() {
  return Object.keys(resources).map((slug) => ({ slug }))
}

interface ResourcePageProps {
  params: Promise<{ slug: string }>
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = await params
  const resource = resources[slug]

  if (!resource) {
    notFound()
  }

  return (
    <PageShell title={resource.title}>
      <div>
        <p>{resource.content}</p>
        {/* Add more resource content sections here */}
      </div>
    </PageShell>
  )
}
