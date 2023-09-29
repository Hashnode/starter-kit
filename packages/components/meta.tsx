import Head from "next/head";
import { useAppContext } from "./contexts/appContext";
import parse from 'html-react-parser';

const Meta = () => {
  const { publication } = useAppContext();
  const { metaTags, favicon } = publication;
  const defaultFavicons = (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000" />
    </>
  );

  return (
    <Head>
      {favicon ? <link rel="icon" type="image/png" href={favicon} /> : defaultFavicons}
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`Blog Starter Kit powered by Hashnode APIs`}
      />
      {metaTags && parse(metaTags)}
    </Head>
  );
};

export default Meta;
