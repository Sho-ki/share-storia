'use client';

import { useEffect } from 'react';
import useAuth from '@/hooks/use-auth';
import { Routes } from '@/config/routes';
import { useRouter } from 'next/navigation';
import DashboardHeader from '@/components/header/dashboard';
import MobileNav from '@/components/ui/mobile-nav';
import Footer from '@/components/footer/footer';
import { UserProvider, useUser } from '@auth0/nextjs-auth0/client';

export default function UserLayout({ children }: React.PropsWithChildren<{}>) {
  const router = useRouter();
  const { user, error } = useUser();

  // Note: need this check if someone manually clear their cookie from browser
  useEffect(() => {
    if (!user) {
      router.push(Routes.public.home);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <DashboardHeader />
      <main className="flex-grow">{children}</main>
      <Footer className="hidden md:block" />
      <MobileNav />
    </>
  );
}
