import { AppProps } from 'next/app';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { ToastContainer } from 'react-nextjs-toast';

import { repositoryName, linkResolver } from 'prismicio';
import 'styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <ToastContainer/>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}
