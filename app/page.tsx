export const dynamic = 'force-dynamic';
import PowerStatus from '@/components/power-status';

export default async function Home(searchParams: { searchParams: any }) {
  const language = (searchParams?.searchParams as any)?.language || 'en';
  const location =
    (searchParams?.searchParams as any)?.location || 'makumbusho';

  return (
    <main className='flex  flex-col items-center justify-between pb-9 pt-8  md:pb-20 md:pt-16'>
      <PowerStatus location={location} language={language} />
    </main>
  );
}
