'use client';

import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Language, Location, Status } from '@/types/general';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PowerStatus({
  location,
  language,
}: {
  location: Location;
  language: Language;
}) {
  const router = useRouter();

  const searchParams = useSearchParams();
  const [status, setStatus] = useState<Status>(
    (searchParams.get('status') as Status) || 'unknown'
  );

  // every 10 seconds, change the status
  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(status === 'on' ? 'off' : 'on');
      // update the praram in the url
      router.push(
        `?${createQueryString('status', status === 'on' ? 'off' : 'on')}`
      );
      // refresh the page
      router.refresh();
    }, 10000);

    return () => clearInterval(interval);
  }, [status]);

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    return params.toString();
  };

  return (
    <div className='flex flex-col items-center justify-center '>
      <h2 className={cn('mb-8 text-center text-3xl font-bold')}>
        {/* Power Status */}
        {language === 'en' ? 'Power Status' : 'Hali ya Umeme'}
      </h2>
      <Icons.bolt className='mb-4 h-24 w-24' status={status} />
      <h3
        className={cn(
          'mb-8 text-center text-2xl font-bold uppercase',
          status === 'on' ? 'text-power-on' : 'color-power-off'
        )}
      >
        {status}
      </h3>
    </div>
  );
}
