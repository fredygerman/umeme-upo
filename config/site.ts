import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  title:
    'Umeme Upo? | Jipatie hali ya umeme katika maeneo mbalimbali ya Dar es Salaam.',
  titleEn:
    'Umeme Upo? | Get power status of various locations in Dar es Salaam.',
  name: 'Umeme Upo?',
  domain: 'https://umeme-upo.vercel.app/',
  githubUrl: 'https://github.com/fredygerman/umeme-upo',
  image: '/images/logo/brand/main.svg',
  type: 'website',
  twitterHandle: '@fredygerman_',
  descriptionEn:
    'A web application to show power status of various locations in Dar es salaam',
  descriptionSw:
    'Programu ya wavuti inayoonyesha hali ya Umeme katika maeneo mbalimbali jijini Dar es salaam',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    //    use the above as a template for adding more nav items
  ],
  // Other contributors need to be added here
  authors: [
    {
      name: 'Fredy German Mgimba',
      url: 'www.fredygerman.com',
    },
  ],
  tags: [
    'umeme',
    'umeme upo',
    'umeme dar es salaam',
    'umeme upo dar es salaam',
    'umeme upo tanzania',
    'umeme tanzania',
    'umeme upo app',
    'umeme upo web app',
    'umeme upo web application',
  ],

  icons: {
    apple: 'public/favicon/apple-touch-icon.png',
    shortcut: 'public/favicon/favicon-16x16.png',
    icon: 'public/favicon/favicon.ico',
    logo: 'public/favicon/images/logo/brand/main.svg',
    manifest: 'public/favicon/site.webmanifest',
    maskIcon: 'public/favicon/safari-pinned-tab.svg',
    msTileColor: '#000000',
    themeColor: '#ffffff',
  },

  socials: [
    {
      name: 'Twitter',
      url: 'https://twitter.com/fredygerman_',
      asset: '/twitter.svg',
    },
    {
      name: 'Github',
      url: 'https://github.com/fredygerman',
      asset: '/github.svg',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/fredygerman/',
      asset: '/linkedin.svg',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/fredygerman_/',
      asset: '/instagram.svg',
    },
  ],
  contacts: [
    {
      name: 'Email',
      url: 'mailto:fredygerman30@gmail.com',
      asset: '/email.svg',
    },
    {
      name: 'Phone',
      url: 'tel:+255-000-000-000',
      asset: '/phone.svg',
    },
  ],
  version: publicRuntimeConfig?.version || 'unknown', // TODO: this is not working as expected but it should be possible to get the version from package.json
  author: 'fredygerman', // we can even get this from package.json
  authorUrl: 'https://github.com/fredygerman',
};
