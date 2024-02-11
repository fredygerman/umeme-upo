import { LucideProps } from 'lucide-react';

export type BoltProps = LucideProps & {
  status: Status;
};

export type fetchStatusResponse = {
  lastTimeOnline: LastTimeOnline;
  status: Status;
};

export type Location = {
  id: string;
  name: string;
  is_available: boolean;
};

export type fetchStatusResponseError = {
  error: string;
};

export type locationError = fetchStatusResponseError;

export type LastTimeOnline = string | 'unknown';

export type Status = 'on' | 'off' | 'unknown';

export type Language = 'en' | 'sw';

export type Quote = {
  location: Location;
  status: Status;
  message: {
    [key in Language]: string;
  };
};

export type Quotes = Quote[];
