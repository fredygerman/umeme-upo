'use client';
import Image from 'next/image';

// Local imports
import { ModeToggle } from '@/components/misc/theme-toggle';
import { LocationDropDown } from '@/components/misc/location-dropdown';
import { TranslateToggle } from '@/components/misc/translate-dropdown';
import { Suspense } from 'react';
import { FetchLocationsResponse } from '@/types/general';
import { useQuery } from '@tanstack/react-query';
import { fetchLocations } from '@/actions/supabase';

export function AppHeader() {
  const { data, isError, isLoading, isSuccess, isFetching, refetch } =
    useQuery<FetchLocationsResponse>({
      queryKey: ['locations'],
      queryFn: () => fetchLocations() as any,
      refetchOnMount: true,
      // 2000000 is 33 minutes !TODO: might need to keep this configurable in the future
      refetchInterval: 2000000,
    });
  return (
    <div className='flex w-full flex-row items-center justify-between px-8 py-2 md:px-16'>
      <div className='flex flex-col items-center justify-between pr-16'>
        <Image
          src='/images/logo/brand/main.svg'
          alt='Umeme Upo? Logo'
          width={100}
          height={100}
        />
      </div>
      <div className='flex flex-col items-center justify-between '>
        <Suspense fallback={<div>Loading...</div>}>
          <LocationDropDown
            locations={data?.locations ?? null}
            isError={isError}
          />
        </Suspense>
      </div>

      <div className='flex flex-row items-center justify-between'>
        <TranslateToggle />
        <ModeToggle />
      </div>
    </div>
  );
}
