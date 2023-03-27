import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { NextUIProvider } from '@nextui-org/react';
import Header from '@/components/Header';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Component {...pageProps} />
      </QueryClientProvider>
    </NextUIProvider>
  )
}
