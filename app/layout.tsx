import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { AppHeader } from '@/components/layout/AppHeader';
import { useParams } from 'next/navigation';
import { Language } from '@/types/general';
import QueryProvider from '@/components/query-provider';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Umeme upo | Homepage',
  description:
    'A web application to show power status of various locations in Dar es salaam',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <script
        async
        src='https://analytics.eu.umami.is/script.js'
        data-website-id='52ffbed5-9bda-487a-9f25-02ab08228eb5'
      />
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
