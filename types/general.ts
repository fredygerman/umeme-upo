import { LucideProps } from 'lucide-react';

export type BoltProps = LucideProps & {
  status: Status;
};

export type Status = 'on' | 'off' | 'maybe off' | 'unknown';

export type Language = 'en' | 'sw';

export type Location = 'makumbusho' | 'others';

export type Quote = {
  location: Location;
  status: Status;
  message: {
    [key in Language]: string;
  };
};

export type Quotes = Quote[];
