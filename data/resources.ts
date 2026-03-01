export interface Podcast {
  id: string
  spotifyEmbedUrl: string 
  podcast: string
  episode: string
  hideEpisode?: boolean
}

export interface Book {
    id: string
    title: string
    coverImage: string 
    buyUrl?: string
}

export interface ResourceData {
    title: string
    slug: string
    podcasts: Podcast[]
    books: Book[]
}

export const resourcesData: ResourceData[] = [
    {
        title: 'Artist Burnout',
        slug: 'artist-burnout',
        podcasts: [
            {
                id: 'ab-pod-1',
                spotifyEmbedUrl: 'https://open.spotify.com/embed/episode/42FW2dCx3FfEIRj37o2thl',
                podcast: "Black Girl burnout",
                episode: '',
                hideEpisode: true,
            },
            {
                id: 'ab-pod-2',
                spotifyEmbedUrl: 'https://open.spotify.com/embed/episode/2LT46ipHz1VHtPQSbKaQ5U',
                podcast: 'Naked Beauty',
                episode: ' How to Manage Your Time to Manage Your Health" ft. Daphne Javitch',
            },
            {
                id: 'ab-pod-3',
                spotifyEmbedUrl: 'https://open.spotify.com/embed/episode/2aDJrpnjqR04vQcRziKiYB',
                podcast: 'The Hapiness Lab',
                episode: 'Burnout and How to Avoid It',
            },
            {
                id: 'ab-pod-4',
                spotifyEmbedUrl: 'https://open.spotify.com/embed/episode/1g8EJ1CBA3Yiez5grWZ1O7',
                podcast: 'We can Do Hard Things',
                episode: ' Real Self-Care: Burnout Is Not Your Fault & the Way Out with Dr. Pooja Lakshmin',
            },
            {
                id: 'ab-pod-5',
                spotifyEmbedUrl: 'https://open.spotify.com/embed/episode/0nV4tFhr5wcyfmVdeqUytw',
                podcast: 'WorkLife with Adam Grant',
                episode: 'How be productive without burining out, with Cal Newport',
            },
            {
                id: 'ab-pod-6',
                spotifyEmbedUrl: 'https://open.spotify.com/embed/episode/64TfMtvBVU7hrw7ZSHVrcp',
                podcast: 'Magical Overthinkers',
                episode: 'Overthinking about Burnout',
            },
            {
                id: 'ab-pod-7',
                spotifyEmbedUrl: 'https://open.spotify.com/embed/episode/5IIMmgac27IaeChTYQMKIn',
                podcast: 'The Tim Ferriss Show',
                episode: 'Naval Ravikant on Happiness, Reducing Anxiety, Crypto Stablecoins, and Crypto Strategy',
            },
            {
                id: 'ab-pod-8',
                spotifyEmbedUrl: 'https://open.spotify.com/embed/episode/5V68tzVl6a94diru9mCXpZ',
                podcast: 'Mentwell with Nikki Williams',
                episode: 'Marni Wandner- Bouncing Back: Strategies for Overcoming Burnout',
            },
            {
                id: 'ab-pod-9',
                spotifyEmbedUrl: 'https://open.spotify.com/embed/episode/2PTthvj7cyjIsp6HfD4uLm',
                podcast: 'The Marie Forleo Podcast',
                episode: 'Tim Ferriss on Overcoming Fear, Battling Depression and Finding Self Love. ',
            },
        ],
        books: [
            {
                id: 'ab-book-1',
                title: "Touring and Mental health",
                coverImage: '/books/touring.jpg',
                buyUrl: 'https://www.touringmanual.com/',
            },
            {
                id: 'ab-book-2',
                title: 'The Art of Learning',
                coverImage: '/books/theartoflearning.jpg',
                buyUrl: 'https://www.amazon.ca/Art-Learning-Journey-Optimal-Performance/dp/0743277465/ref=sr_1_1?dib=eyJ2IjoiMSJ9._KaPRPqmSyCQ49eapnImrilIJhJMmjzkklmjCoXn0gScRp9wBPSErN0HZdTfxP1e74ZLSTXpZIxJZFoeje6l68lrOHw9RsPQfTDYRcjM1bHXVdzhQ-lSBayWbZhzmEyMdyNOzXCZl8YU9qGPn8h0fUAFddjRK0qMVLXFZbdajBtILCNdrQuPBPilJdISZEGmWmg9__FRQqzoYDanCM1jnya7Mqgt-be_PqO4hG4rOjcGyfbfDcFKSx1ljIG3j_4soaTnwDYg2KBOKZ6u8jBaxjEJfkbz2CbSKHrc0_kIWxY.QlH5KVPzOEmvXsbLq5mMn0W7YFAUXo03cDxVcRG9YAs&dib_tag=se&hvadid=667095410377&hvdev=c&hvlocphy=9001560&hvnetw=g&hvqmt=e&hvrand=656271235488348491&hvtargid=kwd-296018361350&hydadcr=23336_13656850&keywords=the+art+of+learning&qid=1726122117&sr=8-1',
            },
            {
                id: 'ab-book-3',
                title: 'This is How You Heal',
                coverImage: '/books/thisishowyouheal.jpg',
                buyUrl: 'https://www.amazon.ca/When-Youre-Ready-This-Heal/dp/194975944X/ref=sr_1_1?dib=eyJ2IjoiMSJ9.1fWjcomh6CbjfbLRfhzisdLnIq1dKsdijYKCWwYJapzPOzxHq_pep1CbeaaEi4OwiXNVOumPBhdbM2uQ1ulzQtqUvhpwXayCd4YTwhWSsL5tv6Scr0FOBrVaWXM7hPOYCTK1abagf7TW4wscZI7huWZIBhbmeGg52KTyN6wmynBAxZQarq_g5ygQnggKv_A3xtUicFgnGJ3W1gZdUkoi3DtPVgxtrd1ysWO81UBbBBwUgTSTdQjCK0yfbk7Be7Fio0775toLfv6i-C-YxEzT029vXc2mynJySJII96CP7qM.12_3WHpFxMV79ttTFlcAGxBGXMwQh_eCFdvhFQdpUlI&dib_tag=se&hvadid=671307030916&hvdev=c&hvlocphy=9001560&hvnetw=g&hvqmt=e&hvrand=13148372253927186850&hvtargid=kwd-1664203558078&hydadcr=22460_13497881&keywords=book+this+is+how+you+heal&qid=1726122162&sr=8-1',
            },
            
        ],
    },
    {
        title: 'Reputation',
        slug: 'reputation',
        podcasts: [
            {
                id: 'rep-pod-1',
                spotifyEmbedUrl: 'https://open.spotify.com/embed/episode/4w10VMTyY6W1WUnHJOWuBV',
                podcast: ' Lenny’s Podcast | Growth | Career',
                episode: 'Growth tactics, retention strategies, and becoming a better writer',
            },
            {
                id: 'rep-pod-2',
                spotifyEmbedUrl: 'https://open.spotify.com/embed/episode/464rnP7SLBztsIk484HrBl',
                podcast: 'Trapital',
                episode: 'Improving The Artist-Fan Relationship',
            },
            {
                id: 'rep-pod-3',
                spotifyEmbedUrl: 'https://open.spotify.com/embed/episode/2inbL0aNp08rsQydh0OOlo',
                podcast: 'Zeitcase',
                episode: 'Your Digital Afterlife',
            },
             {
                id: 'rep-pod-4',
                spotifyEmbedUrl: 'https://open.spotify.com/embed/episode/2B8DHvctVzTYK0hEwydZ95',
                podcast: 'EARN THE RIGHT with Trevor Young',
                episode: 'Purpose, passion, Principles+Profit with Dr John Tickell',
            },
             {
                id: 'rep-pod-5',
                spotifyEmbedUrl: 'https://open.spotify.com/embed/episode/4pJ8K9qfpK2O3w2jZglI3T',
                podcast: 'On Purpose with Jay Shetty',
                episode: 'Liz Plosser ON: Becoming a Morning Person Even if You Aren’t One & How to Create a Morning Routine That Works For You ',
            },
        ],
        books: [
            {
                id: 'ab-book-1',
                title: "The Perfectionist's Guide to Losing Control",
                coverImage: '/books/perfectionist-guide.jpg',
                buyUrl: 'https://www.amazon.com/Perfectionists-Guide-Losing-Control-Peace/dp/059332952X',
            },
            {
                id: 'ab-book-2',
                title: 'Designing Your Life',
                coverImage: '/images/books/designing-your-life.jpg',
                buyUrl: 'https://www.amazon.com/Designing-Your-Life-Well-Lived-Joyful/dp/1101875321',
            },
            {
                id: 'ab-book-3',
                title: 'The Garden Within',
                coverImage: '/images/books/the-garden-within.jpg',
                buyUrl: 'https://www.amazon.com/Garden-Within-Emotions-Powerful-Begins/dp/1400232988',
            },
        ],
    },
    {
        title: 'Public Perception vs Meta Perception',
        slug: 'public-perception-vs-meta-perception',
        podcasts: [
            {
                id: 'pp-pod-1',
                spotifyEmbedUrl: 'https://open.spotify.com/embed/episode/0ezlWYeWuzpNBzkfzF5V6h',
                podcast: 'Short Story Long',
                episode: '191-Koreen | We’re Not Really Strangers',
            },
            {
                id: 'pp-pod-2',
                spotifyEmbedUrl: 'https://open.spotify.com/embed/episode/3WmKY5n3giPsykw9JorYUi',
                podcast: 'World’s Your Oysta',
                episode: 'How to Develop a Distinct Voice and Achieve Sucess in Today’s Digital World with Iglee Okafor',
            },
            {
                id: 'pp-pod-3',
                spotifyEmbedUrl: 'https://open.spotify.com/embed/episode/4bWNQHGcK4zP8jdQKs9yjE',
                podcast: 'More or Less with Jess',
                episode: 'Burnout & Business with LVRN',
            },
            {
                id: 'pp-pod-4',
                spotifyEmbedUrl: 'https://open.spotify.com/embed/episode/2m8D8RxyTyZuDOFFT1zFss',
                podcast: 'The Tim Ferriss Show',
                episode: 'Jon Batiste—The Quest for Originality, How to Get Unstuck, His Favorite Mantras, and Strategies for Living a Creative Life',
            },
        ],
        books: [
            {
                id: 'pp-book-1',
                title: 'All You Need to Know About the Music Business: Eleventh Edition',
                coverImage: 'books/industry.jpg',
                buyUrl: 'https://www.amazon.com/Need-Know-About-Music-Business/dp/1668011069',
            },
             {
                id: 'pp-book-2',
                title: 'How to Win Friends and Influence People',
                coverImage: 'books/influence.jpg',
                buyUrl: 'https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034',
            },
             {
                id: 'pp-book-3',
                title: 'You Are Not a Gadget: A Manifesto',
                coverImage: 'books/gadget.jpg',
                buyUrl: 'https://www.amazon.com/You-Are-Not-Gadget-Manifesto/dp/0307389979',
            },
        ],
    },
]