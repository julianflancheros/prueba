'use client';

import { useEffect, useState, useRef } from 'react';
import LoadingScreen from './LoadingScreen';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);
  const hasLoaded = useRef(false);

  useEffect(() => {
    if (hasLoaded.current) return;

    const hideLoading = () => {
      hasLoaded.current = true;
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    if (document.readyState === 'complete') {
      hideLoading();
    } else {
      const handleLoad = () => hideLoading();
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      {children}
    </>
  );
}
