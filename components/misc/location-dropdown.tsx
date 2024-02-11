'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

// Local imports
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Location } from '@/types/general';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function LocationDropDown({
  locations,
}: {
  locations: Location[] | Error;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [location, setLocation] = useState<string>(
    (searchParams.get('location') as string) || 'makumbusho'
  );

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    return params.toString();
  };

  useEffect(() => {
    router.push(pathname + '?' + createQueryString('location', location));
  }, [location, pathname]);

  const isError = locations instanceof Error;
  const dropdownItems = isError ? (
    <DropdownMenuRadioItem value='makumbusho'>Makumbusho</DropdownMenuRadioItem>
  ) : (
    Array.isArray(locations) &&
    locations.map((location) => (
      <DropdownMenuRadioItem key={location.id} value={location.name}>
        {location.name}
      </DropdownMenuRadioItem>
    ))
  );

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
            {location}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          <DropdownMenuLabel>Choose Location</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={location}
            onValueChange={(value) => {
              setLocation(value as string);
              router.push(`?${createQueryString('location', value)}`);
            }}
          >
            {dropdownItems}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
