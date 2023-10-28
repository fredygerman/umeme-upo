import Image from 'next/image';
import { ModeToggle } from '../misc/theme-toggle';

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
      <div className='flex flex-col items-center justify-between'>
        <h1 className='text-2xl font-bold'>Makumbusho</h1>
      </div>
      <div className='flex flex-col items-center justify-between'>
        <div className='flex flex-row items-center justify-between'>
          <p className='pr-4 text-sm font-bold'>Translate</p>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
