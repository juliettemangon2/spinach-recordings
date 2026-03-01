import { PageShell } from '@/components/PageShell'
import styles from './our-team.module.css'
import Image from 'next/image'

interface FeaturedMember {
  name: string
  role: string
  roleLink: string
  photo: string
  bio: string
}

interface ListMember {
  name: string
  role: string
  roleLink: string
}

const ceo: FeaturedMember = {
  name: 'Bradford Watson',
  role: 'CEO & Founder',
  roleLink: 'https://www.linkedin.com/in/bradfordwatson1/',
  photo: '/team/BRAD-PORTRAIT.webp',
  bio: ' Brad has since positioned himself as a distinguished exemplar of conviction, entrepreneurship and artistry. Versed in all aspects of business development and strategic planning, with a concept to completion mentality. An experienced operator with a demonstrated history across the Accessories, Apparel and overall Fashion industry. A clear understanding of brand market positioning and all related support initiatives, from samples to sell through.',
}

const featuredMembers: FeaturedMember[] = [
  {
    name: 'Henry Love-Schultz',
    role: 'CREATIVE DIRECTOR',
    roleLink: 'https://www.linkedin.com/in/henry-love-36177a94/',
    photo: '/team/HANK-PORTRAIT.webp',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Linda Mindaye',
    role: 'HEAD OF COMMUNITY',
    roleLink: 'https://www.linkedin.com/in/lindamindaye/',
    photo: '/team/Linda-PORTRAIT.webp',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Rachel Lee Heinkel',
    role: 'MOVEMENT DIRECTOR',
    roleLink: 'https://www.rachelheinkel.com/about',
    photo: '/team/RACHEL-PORTRAIT.webp',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

const restOfTeam: ListMember[] = [
  {
    name: 'Syreeta Butler',
    role: 'WELLNESS ADVISOR',
    roleLink: 'https://justbconsulting.net/?fbclid=PAZXh0bgNhZW0CMTEAAaa1IsNTBFjCSMvkKnLI8Hp1AV7FDBfIEN09-RDUMbB_cKIboVHe3b5NhZM_aem_o-15kPUgLpvxH8ZUJKurRA',
  },
  {
    name: 'Steven Smith',
    role: 'DEVELOPMENT PRODUCER | SPINACH FILMS',
    roleLink: 'https://www.linkedin.com/in/stevensmithuga/',
  },
  {
    name: 'Jason Lewis (aka RAPSTRAINER)',
    role: 'PERSONAL TRAINER | LA',
    roleLink: '#',
  },
  {
    name: 'Nasir Wise',
    role: 'TRIPLE WASHED™ PLAYLIST CURATOR',
    roleLink: 'https://fanlink.tv/spinach',
  },
  {
    name: 'Jim Fielding',
    role: 'OPERATIONS ADVISOR',
    roleLink: 'https://www.imdb.com/name/nm11959824/?ref_=mv_close',
  },
  {
    name: 'Michaela Valentina',
    role: 'WARDROBE STYLIST',
    roleLink: 'https://www.michaelavalentina.com/',
  },
  {
    name: 'Keith Nelson Jr',
    role: 'WRITER',
    roleLink: '#',
  },
  {
    name: 'Juliette Mangon',
    role: 'Engineering Consultant',
    roleLink: 'https://www.juliettemangon.com/',
  },

]

export default function OurTeamPage() {
  return (
    <PageShell fullBleed>
      <div className={styles.page}>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>Our Team</span>
          </div>
        </section>

        {/* CEO */}
        <section className={styles.ceoSection}>
          <div className={styles.container}>
            <div className={styles.ceoHeader}>
              <div className={styles.ceoInfo}>
                <h1 className={styles.ceoName}>{ceo.name}</h1>
                <a
                  href={ceo.roleLink}
                  className={styles.ceoRoleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ceo.role}
                </a>
                <p className={styles.ceoBio}>{ceo.bio}</p>
              </div>
              <div className={styles.ceoPhotoWrapper}>
                <Image
                  src={ceo.photo}
                  alt={ceo.name}
                  fill
                  sizes="(max-width: 900px) 80vw, 45vw"
                  className={styles.ceoPhoto}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Three */}
        <section className={styles.featuredSection}>
          <div className={styles.container}>
            
            <div className={styles.featuredGrid}>
              {featuredMembers.map((member) => (
                <div className={styles.featuredCard} key={member.name}>
                  <div className={styles.featuredPhotoWrapper}>
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                      className={styles.featuredPhoto}
                    />
                  </div>
                  <h2 className={styles.featuredName}>{member.name}</h2>
                  <a
                    href={member.roleLink}
                    className={styles.featuredRoleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {member.role}
                  </a>
                  <p className={styles.featuredBio}>{member.bio}</p>
                  
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rest of Team */}
        <section className={styles.listSection}>
          <div className={styles.container}>
           
            <ul className={styles.teamList}>
              {restOfTeam.map((member) => (
                <li className={styles.teamRow} key={member.name}>
                  <span className={styles.memberName}>{member.name}</span>
                  <a
                    href={member.roleLink}
                    className={styles.memberRoleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {member.role}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

      </div>
    </PageShell>
  )
}
