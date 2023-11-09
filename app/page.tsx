import PowerStatus from '@/components/power-status';
import { Language } from '@/types/general';
import { fetchStatus } from '../actions/general';

export default async function Home(searchParams: {
  // [key: string]: string | string[] | undefined | null | any; // TODO: i think this is the correct type but it was giving build errors
  searchParams: any;
}) {
  const language = (searchParams?.searchParams as any)?.language || 'en';
  const location =
    (searchParams?.searchParams as any)?.location || 'makumbusho';
  const initialData = await fetchStatus(location);

  console.log('initialData', initialData);
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
