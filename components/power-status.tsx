'use client';

import { fetchStatus } from '@/actions/supabase';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Language, Location, fetchStatusResponse } from '@/types/general';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import LastTimeOnline from '@/components/last-time-online';
import SocialShare from '@/components/social-share';

export default function PowerStatus({
  location,
  language,
  initialData,
}: {
  location: Location;
  language: Language;
  initialData?: fetchStatusResponse | Error;
}) {
  const { data, isError, isLoading, isSuccess, isFetching, refetch } =
    useQuery<fetchStatusResponse>({
      queryKey: ['get-status'],
      queryFn: () => fetchStatus(location) as any,
      initialData: initialData as any,
      refetchInterval: 30 * 1000,
    });

  // console.log({ data });

  return (
    <div className='flex flex-col items-center justify-center '>
      <h2 className={cn('mb-8 text-center text-3xl font-bold')}>
        {language === 'en' ? 'Power Status' : 'Hali ya Umeme'}
      </h2>
      {(isLoading || isFetching) && !isError && (
        <>
          <Icons.bolt className='h-24 w-24 animate-spin' status='off' />
          <h3
            className={cn(
              'mb-8 pt-4 text-center text-2xl font-bold uppercase',
              'color-power-off'
            )}
          >
            {language === 'en'
              ? 'Fetching power status...'
              : 'Tuna angalia hali ya umeme...'}
          </h3>
        </>
      )}

      {!isFetching && isSuccess && (
        <>
          <Icons.bolt className='h-24 w-24' status={data?.status} />
          <h3
            className={cn(
              'mb-8 pt-4 text-center text-2xl font-bold  uppercase',
              data?.status === 'on' ? 'text-power-on' : 'color-power-off'
            )}
          >
            {data?.status === 'on'
              ? language === 'en'
                ? 'Power is On'
                : 'Umeme upo'
              : language === 'en'
              ? 'Power is Off'
              : 'Umeme haupo'}
          </h3>
          {/*
           // !TODO: fix this, it's not working
           <Button onClick={() => refetch()}>
            {language === 'en' ? 'Refresh' : 'Angalia tena'}
          </Button> */}
        </>
      )}

      {!isFetching && isError && (
        <>
          {' '}
          <Icons.bolt className='h-24 w-24' status='off' />
          <h3
            className={cn(
              'mb-8 pt-4 text-center text-2xl font-bold  uppercase',
              'color-power-off'
            )}
          >
            {language === 'en'
              ? 'Error fetching power status'
              : 'Kuna tatizo katika kuangalia hali ya umeme'}
          </h3>
        </>
      )}
      {data && data.lastTimeOnline && data.status && (
        <>
          {' '}
          <LastTimeOnline
            lastTimeOnline={data?.lastTimeOnline}
            status={data?.status}
            language={language}
          />
          <SocialShare
            paramLocation={location}
            language={language}
            status={data?.status}
          />
        </>
      )}
    </div>
  );
}
