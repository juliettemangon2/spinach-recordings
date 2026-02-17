import { PageShell } from '@/components/PageShell'
import styles from './our-team.module.css'
import Image from 'next/image'

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
    photo: '/team/BRAD-PORTRAIT.webp',
  },
  
  {
    name: 'Henry Love-Schultz',
    location: 'Portland',
    role: 'CREATIVE DIRECTOR',
    roleLink: 'https://www.linkedin.com/in/henry-love-36177a94/',
    photo: '/team/HANK-PORTRAIT.webp',
  },
  {
    name: 'Syreeta Butler',
    location: 'Los Angeles',
    role: 'WELLNESS ADVISOR',
    roleLink: 'https://justbconsulting.net/?fbclid=PAZXh0bgNhZW0CMTEAAaa1IsNTBFjCSMvkKnLI8Hp1AV7FDBfIEN09-RDUMbB_cKIboVHe3b5NhZM_aem_o-15kPUgLpvxH8ZUJKurRA',
    photo: '/team/Syreeta-Portrait.webp',
  },
  {
    name: 'Steven Smith',
    location: 'Los Angeles',
    role: 'DEVELOPMENT PRODUCER | SPINACH FILMS',
    roleLink: 'https://www.linkedin.com/in/stevensmithuga/',
    photo: '/team/STEVE-PORTRAIT.webp',
  },
  {
    name: 'Linda Mindaye',
    location: 'Boston',
    role: 'HEAD OF COMMUNITY',
    roleLink: 'https://www.linkedin.com/in/lindamindaye/',
    photo: '/team/Linda-PORTRAIT.webp',
  },
  {
    name: 'Rachel Lee Heinkel',
    location: 'NYC',
    role: 'MOVEMENT DIRECTOR',
    roleLink: 'https://www.rachelheinkel.com/about',
    photo: '/team/RACHEL-PORTRAIT.webp',
  },
  {
    name: 'Jason Lewis, (aka) RAPSTRAINER',
    location: 'Los Angeles',
    role: 'PERSONAL TRAINER | LA',
    roleLink: '#',
    photo: '/team/JASON-PORTRAIT.webp',
  },
  {
    name: 'Nasir Wise',
    location: 'Atlanta',
    role: 'TRIPLE WASHED™ PLAYLIST CURATOR',
    roleLink: 'https://fanlink.tv/spinach',
    photo: '/team/NASIR-PORTRAIT.webp',
  },
  {
    name: 'Jim Fielding',
    location: 'Atlanta',
    role: 'OPERATIONS ADVISOR',
    roleLink: 'https://www.imdb.com/name/nm11959824/?ref_=mv_close',
    photo: '/team/JIM-PORTRAIT.webp',
  },
  {
    name: 'Michaela Valentina',
    location: 'NYC',
    role: 'WARDROBE STYLIST',
    roleLink: 'https://www.michaelavalentina.com/',
    photo: '/team/Michaela-Portrait.webp',
  },
  {
    name: 'Keith Nelson Jr',
    location: 'NYC',
    role: 'WRITER',
    roleLink: '#',
    photo: '/team/KEITH-PORTRAIT.webp',
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
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className={styles.photo}
                    />
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