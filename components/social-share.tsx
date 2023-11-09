'use client';

import { useEffect, useState } from 'react';
import { Language, Location, Status } from '@/types/general';
import { Icons } from '@/components/icons';
import { quotes } from '@/data/messages';

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
  status,
}: {
  paramLocation: Location;
  language: Language;
  status: Status;
}) {
  useEffect(() => {
    // when the status changes, update the quote
    setQuote(
      quotes.find(
        (quote) => quote.location === paramLocation && quote.status === status
      ) as Quote
    );
  }, [status]);

  const [quote, setQuote] = useState<Quote>(
    quotes.find(
      (quote) => quote.location === paramLocation && quote.status === status
    ) as Quote
  );

  return (
    <div className='flex flex-col items-center justify-center'>
      {status !== 'unknown' && (
        <h4 className='mb-8 text-center text-2xl font-bold'>
          "{(quote.message as any)[language]}"
        </h4>
      )}
      <div className='flex flex-row items-center justify-center '>
        <Icons.twitter className='mb-4 mr-4 h-4 w-4 ' />
        <span className='mb-4 mr-4 h-5 w-4'>Twitter</span>
      </div>
    </div>
  );
}
