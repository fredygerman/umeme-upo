import { quote } from '@/data/quotes';
import { Quote, QuoteStatus } from '@/types/general';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function timeSince(date: Date) {
  var seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + ' years';
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + ' months';
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + ' days';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ' hours';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ' minutes';
  }
  return Math.floor(seconds) + ' seconds';
}

export function getQuotes(location: string, status: string): Quote | null {
  const selectedQuote: Quote = quote[status as keyof QuoteStatus];

  if (!selectedQuote) {
    return null; // No matching quotes found
  }

  return {
    en: selectedQuote.en.replace(
      'Location',
      location.charAt(0).toUpperCase() + location.slice(1)
    ),
    sw: selectedQuote.sw.replace(
      'Location',
      location.charAt(0).toUpperCase() + location.slice(1)
    ),
  };
}

export function nameFromValue(value: string) {
  return value
    .replace(/_/g, '-')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase());
}
