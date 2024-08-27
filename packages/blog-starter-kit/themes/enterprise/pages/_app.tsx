// pages/_app.tsx
import { AppProps } from 'next/app';
import { AppProvider } from '../components/contexts/appContext';
import Modal  from '../components/modal';
import '../styles/index.css';
import '../styles/globals.css';
import '../styles/OverlaySearch.css';
import { useState } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApprove = () => {
    console.log('Action approved');
    setIsModalOpen(false);
  };

  if (!pageProps.publication) {
    return <Component {...pageProps} />;
  }

  return (
    <AppProvider 
      publication={pageProps.publication || {}}
      post={pageProps.post}
      page={pageProps.page}
      series={pageProps.series}
    >
      <Component {...pageProps} />
	  <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onApprove={handleApprove}
        title="Confirm Action"
        message="Are you sure you want to proceed with this action? This cannot be undone."
      />
    </AppProvider>
  );
}