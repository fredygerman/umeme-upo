import { cookies } from 'next/headers';
import { createServerClient, type CookieOptions } from '@supabase/ssr';

const cookieStore = cookies();

export default createServerClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
    },
  } as CookieOptions
);
