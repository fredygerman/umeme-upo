'use client';

import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Language, Location, Status } from '@/types/general';
import { useState } from 'react';

export default function PowerStatus({
  location,
  language,
}: {
  location: Location;
  language: Language;
}) {
  const [status, setStatus] = useState<Status>('on');
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
