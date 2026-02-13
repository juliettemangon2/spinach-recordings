import { PageShell } from '@/components/PageShell'
import styles from './our-team.module.css'

interface TeamMember {
  name: string
  location: string
  role: string
  roleLink: string
  photo: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Bradford Watson',
    location: 'NYC',
    role: 'CEO',
    roleLink: 'https://podcasts.apple.com/us/podcast/93-understanding-music-wellness-in-your-20s-with/id1518519692?i=1000557892415',
    photo: '/team/bradford-watson.jpg',
  },
  {
    name: 'Whitney Andrews',
    location: 'NYC',
    role: 'HEAD OF DEVELOPMENT | SPINACH FILMS',
    roleLink: 'https://www.imdb.com/name/nm7627558/',
    photo: '/team/whitney-andrews.jpg',
  },
  {
    name: 'Henry Love-Schultz',
    location: 'Portland',
    role: 'CREATIVE DIRECTOR',
    roleLink: 'https://www.linkedin.com/in/henry-love-36177a94/',
    photo: '/team/henry-love-schultz.jpg',
  },
  {
    name: 'Syreeta Butler',
    location: 'Los Angeles',
    role: 'WELLNESS ADVISOR',
    roleLink: 'https://justbconsulting.net/?fbclid=PAZXh0bgNhZW0CMTEAAaa1IsNTBFjCSMvkKnLI8Hp1AV7FDBfIEN09-RDUMbB_cKIboVHe3b5NhZM_aem_o-15kPUgLpvxH8ZUJKurRA',
    photo: '/team/syreeta-butler.jpg',
  },
  {
    name: 'Steven Smith',
    location: 'Los Angeles',
    role: 'DEVELOPMENT PRODUCER | SPINACH FILMS',
    roleLink: 'https://www.linkedin.com/in/stevensmithuga/',
    photo: '/team/steven-smith.jpg',
  },
  {
    name: 'Linda Mindaye',
    location: 'Boston',
    role: 'HEAD OF COMMUNITY',
    roleLink: 'https://www.linkedin.com/in/lindamindaye/',
    photo: '/team/linda-mindaye.jpg',
  },
  {
    name: 'Rachel Lee Heinkel',
    location: 'NYC',
    role: 'MOVEMENT DIRECTOR',
    roleLink: 'https://www.rachelheinkel.com/about',
    photo: '/team/rachel-lee-heinkel.jpg',
  },
  {
    name: 'Jason Lewis, (aka) RAPSTRAINER',
    location: 'Los Angeles',
    role: 'PERSONAL TRAINER | LA',
    roleLink: '#',
    photo: '/team/jason-lewis.jpg',
  },
  {
    name: 'Nasir Wise',
    location: 'Atlanta',
    role: 'TRIPLE WASHED™ PLAYLIST CURATOR',
    roleLink: 'https://fanlink.tv/spinach',
    photo: '/team/nasir-wise.jpg',
  },
  {
    name: 'Jim Fielding',
    location: 'Atlanta',
    role: 'OPERATIONS ADVISOR',
    roleLink: 'https://www.imdb.com/name/nm11959824/?ref_=mv_close',
    photo: '/team/jim-fielding.jpg',
  },
  {
    name: 'Michaela Valentina',
    location: 'NYC',
    role: 'WARDROBE STYLIST',
    roleLink: 'https://www.michaelavalentina.com/',
    photo: '/team/michaela-valentina.jpg',
  },
  {
    name: 'Keith Nelson Jr',
    location: 'NYC',
    role: 'WRITER',
    roleLink: '#',
    photo: '/team/keith-nelson-jr.jpg',
  },
]

export default function OurTeamPage() {
  return (
    <PageShell fullBleed>
      <div className={styles.page}>
        {/* Header */}
        <section className={styles.headerSection}>
          <div className={styles.container}>
            <h1 className={styles.heading}>Our Team</h1>
          </div>
        </section>

        {/* Team Grid */}
        <section className={styles.teamSection}>
          <div className={styles.container}>
            <div className={styles.grid}>
              {teamMembers.map((member) => (
                <div className={styles.card} key={member.name}>
                  <div className={styles.photoWrapper}>
                    {/* Replace with <Image /> or <img> when photos are available */}
                    <div className={styles.photoPlaceholder} />
                  </div>
                  <div className={styles.info}>
                    <h3 className={styles.name}>{member.name}</h3>
                    <p className={styles.location}>{member.location}</p>
                    <a
                      href={member.roleLink}
                      className={styles.roleButton}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {member.role}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  )
}