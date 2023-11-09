import { fetchStatus } from '@/actions/general';
import PowerStatus from '@/components/power-status';

export default async function Home(searchParams: {
  // [key: string]: string | string[] | undefined | null | any; // TODO: i think this is the correct type but it was giving build errors
  searchParams: any;
}) {
  const language = (searchParams?.searchParams as any)?.language || 'en';
  const location =
    (searchParams?.searchParams as any)?.location || 'makumbusho';
  const initialData = await fetchStatus(location);

  console.log('initialData fetched on server', initialData);
  return (
    <main className='flex  flex-col items-center justify-between pb-9 pt-8  md:pb-20 md:pt-16'>
      <PowerStatus
        location={location}
        language={language}
        initialData={initialData}
      />
    </main>
  );
}
