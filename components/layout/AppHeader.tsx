import Image from 'next/image';

// Local imports
import { fetchLocations } from '@/actions/supabase';
import { ModeToggle } from '@/components/misc/theme-toggle';
import { LocationDropDown } from '@/components/misc/location-dropdown';
import { TranslateToggle } from '@/components/misc/translate-dropdown';

export async function AppHeader() {
  const locations = await fetchLocations();

  return (
    <div className='flex flex-row items-center justify-between w-full px-8 py-2 md:px-16'>
      <div className='flex flex-col items-center justify-between pr-16'>
        <Image
          src='/images/logo/brand/main.svg'
          alt='Umeme Upo? Logo'
          width={100}
          height={100}
        />
      </div>
      <div className='flex flex-col items-center justify-between '>
        <LocationDropDown locations={locations} />
      </div>

      <div className='flex flex-row items-center justify-between'>
        <TranslateToggle />
        <ModeToggle />
      </div>
    </div>
  );
}
