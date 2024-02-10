'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

// Local imports
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Location, fetchLocationsResponse } from '@/types/general';
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
  locations: fetchLocationsResponse[];
}) {
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
  }, []);

  useEffect(() => {
    router.refresh();
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
            {location === 'makumbusho' ? 'Makumbusho' : location || 'Others'}
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
            {locations.map(({ id, location }) => (
              <DropdownMenuRadioItem key={id} value={location}>
                {location}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
