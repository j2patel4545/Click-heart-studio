import {
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';
const experiences = [
  {
    title: 'Photographer',
    company_name: 'asistent',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2022',
  },
  {
    title: 'freelancer photographers',
    company_name: 'Self',
    icon: microverse,
    iconBg: '#333333',
    date: ' from Mar-2022 ',
  },
  {
    title: 'photographer partnerships',
    company_name: 'Unai',
    icon: kelhel,
    iconBg: '#333333',
    date: ' from May-2023',
  },
  {
    title: 'Instablish Click Heart Studio',
    company_name: 'Unai',
    icon: dcc,
    iconBg: '#333333',
    date: 'from  Aug-2024',
  },
];

const projects = [
  {
    id: 'project-1',
    name: ' Pre Weding',
    description: '"Capturing love, joy, and excitement, preserving precious pre-wedding memories forever.".',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Engagement',
    description:
      'Celebrating love and commitment, an engagement marks the start of forever together.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Baby Photoshoot',
    description: 'Capturing tiny smiles, giggles, and wonder, creating memories of pure innocence forever.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Product Shoot',
    description: `Showcasing product details, style, and quality, capturing its essence to attract and inspire.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Modeling & more...',
    description:
      'Highlighting beauty, style, and personality, capturing unique moments that tell a story.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export {  experiences, projects };
