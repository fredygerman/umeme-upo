'use client';

import { useState } from 'react';
import { Language, Location, Status } from '@/types/general';
import { Icons } from '@/components/icons';

export type Quote = {
  location: Location;
  status: Status;
  message: {
    [key in Language]: string;
  };
};

export type Quotes = Quote[];

export default function SocialShare({
  paramLocation,
  language,
}: {
  paramLocation: Location;
  language: Language;
}) {
  const [status, setStatus] = useState<Status>('on');

  const quotes: Quotes = [
    {
      location: 'makumbusho',
      status: 'on',
      message: {
        en: 'Power is on at Makumbusho',
        sw: 'Kuna umeme Makumbusho',
      },
    },
    {
      location: 'makumbusho',
      status: 'off',
      message: {
        en: 'Power is off at Makumbusho',
        sw: 'Hakuna umeme Makumbusho',
      },
    },
    {
      location: 'others',
      status: 'on',
      message: {
        en: 'Power is on at Others',
        sw: 'Kuna umeme Others',
      },
    },
    {
      location: 'others',
      status: 'off',
      message: {
        en: 'Power is off at Others',
        sw: 'Hakuna umeme Others',
      },
    },
  ];

  const [quote, setQuote] = useState<Quote>(
    quotes.find(
      (quote) => quote.location === paramLocation && quote.status === status
    ) as Quote
  );

  return (
    <div className='flex flex-col items-center justify-center'>
      <h4 className='mb-8 text-center text-2xl font-bold'>
        "{(quote.message as any)[language]}"
      </h4>
      <div className='flex flex-row items-center justify-center '>
        <Icons.twitter className='mb-4 mr-4 h-4 w-4 ' />
        <span className='mb-4 mr-4 h-5 w-4'>Twitter</span>
      </div>
    </div>
  );
}
