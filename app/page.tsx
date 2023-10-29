import PowerCheckTimer from '@/components/power-check-timer';
import PowerStatus from '@/components/power-status';
import SocialShare from '@/components/social-share';
import { Language } from '@/types/general';
import { useSearchParams } from 'next/navigation';

export default function Home(searchParams: {
  [key: string]: string | string[] | undefined;
}) {
  const language = (searchParams?.searchParams as any)?.language || 'en';
  const location =
    (searchParams?.searchParams as any)?.location || 'makumbusho';

  return (
    <main className='flex  flex-col items-center justify-between pb-9 pt-8  md:pb-20 md:pt-16'>
      <PowerStatus location={location} language={language} />
      <div className='flex flex-col items-center justify-center'>
        <h4 className='mb-8 text-center text-2xl font-bold'>
          {language === 'en'
            ? 'Next power check in : '
            : 'Tuta angalia tena baada ya : '}
        </h4>
        <PowerCheckTimer />
        <SocialShare paramLocation={location} language={language} />
      </div>
    </main>
  );
}
