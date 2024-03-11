import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { AppHeader } from '@/components/layout/AppHeader';
import QueryProvider from '@/components/query-provider';
import { siteConfig } from '@/config/site';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });

// ! TODO : get the language from the user's browser and use it to choose what title and description to to use on metadata
const language = 'swahili';

export const metadata: Metadata = {
  title: language === 'swahili' ? siteConfig.title : siteConfig.titleEn,
  description:
    language === 'swahili'
      ? siteConfig.descriptionSw
      : siteConfig.descriptionEn,
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    images: siteConfig.icons.logo,
  },
  metadataBase: new URL(siteConfig.domain),
  applicationName: siteConfig.name,
  authors: siteConfig.authors,
  icons: siteConfig.icons,
  keywords: siteConfig.tags,
  creator: 'Fredy German Mgimba',
  assets: `${siteConfig.domain}/public`,
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: siteConfig.domain,
    title: siteConfig.title,
    description: siteConfig.descriptionEn,
    images: [
      {
        url: siteConfig.icons.logo,
        width: 800,
        height: 600,
        alt: 'Umeme Upo? Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {process.env.NODE_ENV === 'production' && (
        <script
          async
          src='https://analytics.eu.umami.is/script.js'
          data-website-id='52ffbed5-9bda-487a-9f25-02ab08228eb5'
        />
      )}

      <body className={roboto.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='custom-background min-h-screen '>
            <QueryProvider>
              <AppHeader />
              {children}
            </QueryProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
