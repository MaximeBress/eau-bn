import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { repositoryName, linkResolver } from 'prismicio';

import 'styles/globals.css';
import { Gtag } from 'components/Gtag';

export default function App({ Component, pageProps }: AppProps) {
    return (
    <PrismicProvider linkResolver={linkResolver}>
        <Gtag />
        <PrismicPreview repositoryName={repositoryName}>
            <Component {...pageProps} />
         </PrismicPreview>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
    </PrismicProvider>
  );
}
