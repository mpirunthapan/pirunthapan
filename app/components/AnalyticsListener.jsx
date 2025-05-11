'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AnalyticsListener() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-75NYCV657M', {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
