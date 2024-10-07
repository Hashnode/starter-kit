import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '../components/layout';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import Head from 'next/head';

const CustomError = ({ statusCode }: { statusCode?: number }) => {
  const pageTitle = 'Üzgünüz, bir şeyler yanlış gitti.';
  const pageDescription = 'Aradığınız sayfa bulunamadı. Anasayfa dönerek aramaya devam edebilirsiniz.';
  const siteName = 'Temizmama Blog';
  const siteUrl = 'https://blog.temizmama.com/404';
  const themeColor = '#fa9252';
  const twitterHandle = '@temizmamacom';

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
        <link rel="canonical" href={siteUrl} />
        <meta name="theme-color" content={themeColor} />
        <meta name="msapplication-navbutton-color" content={themeColor} />
        <meta name="apple-mobile-web-app-status-bar-style" content={themeColor} />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={pageDescription} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={twitterHandle} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />

        <meta name="description" content="Aradığınız sayfa bulunamadı." />

        <meta name="robots" content="noindex, follow" />
        <meta name="googlebot" content="noindex, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            {statusCode ? `Hata ${statusCode}` : 'Bir Hata Oluştu'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Üzgünüz, bir şeyler yanlış gitti.
          </p>
          <Link href="/" className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-gray-202-pre transition-colors">
            Ana Sayfaya Dön
          </Link>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

CustomError.getInitialProps = ({ res, err }: { res?: { statusCode: number }, err?: { statusCode: number } }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomError;