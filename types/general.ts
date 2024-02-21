import { LucideProps } from 'lucide-react';
import { Tables } from './supabase';

export type BoltProps = LucideProps & {
  status: Status;
};

export type fetchStatusResponse = {
  lastTimeOnline: LastTimeOnline;
  status: Status;
};

export type Location = Tables<'locations'>;

export type Locations = Location[];

export type FetchLocationsResponse = {
  locations: Locations;
  success: boolean;
  error?: string;
};

export type fetchStatusResponseError = {
  error: string;
};

export type locationError = fetchStatusResponseError;

export type LastTimeOnline = string | 'unknown';

export type Status = 'on' | 'off' | 'unknown';

export type Language = 'en' | 'sw';

export type Quote = {
  en: string;
  sw: string;
};

export type QuoteStatus = {
  on: Quote;
  off: Quote;
  unknown: Quote;
};

export type Quotes = Quote[];
