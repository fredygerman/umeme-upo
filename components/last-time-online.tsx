import { LastTimeOnline, Status } from '@/types/general';

export default function LastTimeOnline({
  lastTimeOnline,
  status,
  language,
}: {
  lastTimeOnline: LastTimeOnline;
  status: Status;
  language: string;
}) {
  return (
    <h3 className='mb-8 text-center text-2xl font-bold'>
      {status === 'off'
        ? language === 'en'
          ? `It has been offline for: ${lastTimeOnline}`
          : `Imekuwa haipo kwa: ${lastTimeOnline}`
        : ''}
      {status === 'on'
        ? language === 'en'
          ? `Last checked: ${lastTimeOnline} ago`
          : `Tuli angalia: ${lastTimeOnline} ago`
        : ''}
      {status === 'unknown' ? '' : ''}
    </h3>
  );
}
