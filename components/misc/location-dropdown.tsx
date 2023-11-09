'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Icons } from '@/components/icons';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Location } from '@/types/general';

export function LocationDropDown() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [location, setLocation] = useState<Location>(
    (searchParams.get('location') as Location) || 'makumbusho'
  );

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    return params.toString();
  };

  useEffect(() => {
    router.push(pathname + '?' + createQueryString('location', location));
  }, [location]);

  return (
    <div className='pl-1'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost'>
            <Icons.arrowDown
              className={cn(
                'mr-2 h-[1.4rem] w-[1.2rem] rotate-0 scale-100 uppercase transition-all '
              )}
            />
            {location === 'makumbusho' ? 'Makumbusho' : 'Others'}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          <DropdownMenuLabel>Choose Location</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={location}
            onValueChange={(value: Location | string) => {
              setLocation(value as Location);
              router.push(`?${createQueryString('location', value)}`);
            }}
          >
            <DropdownMenuRadioItem value='makumbusho'>
              Makumbusho
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='others' disabled>
              Others coming soon..
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
