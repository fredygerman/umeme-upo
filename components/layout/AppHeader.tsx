import Image from 'next/image';
import { ModeToggle } from '@/components/misc/theme-toggle';
import { LocationDropDown } from '@/components/misc/location-dropdown';
import { Icons } from '@/components/icons';
import { TranslateToggle } from '@/components/misc/translate-dropdown';

export function AppHeader() {
  return (
    <div className='flex w-full flex-row items-center justify-between px-8 py-2 md:px-16'>
      <div className='flex flex-col items-center justify-between pr-16'>
        <Image
          src='/images/logo-light.png'
          alt='Umeme Upo? Logo'
          width={50}
          height={20}
        />
      </div>
      <div className='flex flex-col items-center justify-between '>
        <LocationDropDown />
      </div>

      <div className='flex flex-row items-center justify-between'>
        <TranslateToggle />
        <ModeToggle />
      </div>
    </div>
  );
}
