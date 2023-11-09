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
import { useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Language } from '@/types/general';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export function TranslateToggle() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [language, setLanguage] = useState<Language>(
    (searchParams.get('language') as Language) || 'en'
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    router.push(pathname + '?' + createQueryString('language', language));
  }, []);

  useEffect(() => {
    // when language changes, refresh the page
    router.refresh();
  }, [language]);

  return (
    <div className='pr-4'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost'>
            <Icons.translate
              className={cn(
                'mr-2 h-[1.4rem] w-[1.2rem] rotate-0 scale-100 uppercase transition-all '
              )}
            />

            {language === 'en' ? 'English' : 'Swahili'}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          <DropdownMenuLabel>
            {language === 'en' ? 'Badili Lugha' : 'Change Language'}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={language}
            onValueChange={(value: Language | string) => {
              setLanguage(value as Language);
              router.push(
                pathname + '?' + createQueryString('language', value)
              );
            }}
          >
            <DropdownMenuRadioItem value='en'>English</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='sw'>Kiswahili</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
