// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Neil Berry',
  role: 'Senior UX Designer with 15+ years’ experience driving digital transformation through customer-centred design',
  email: 'neilberry24@gmail.com',
  tagline: 'Neil Berry - Product Designer & Builder',
  description:
    'Portfolio of Neil Berry. Senior Product Designer with 15+ years leading design at Aviva, Direct Line Group, Charities Aid Foundation, and Logistics UK',
  status: 'Currently designing at Aviva',
  social: [
    { label: 'GitHub', href: 'https://github.com/neilberry/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/neilberryux/' },
    { label: 'X', href: 'https://x.com/neil_berry' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
] as const;
