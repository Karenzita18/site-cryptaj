import Head from 'next/head';
import React from 'react';
import { PropsLayout } from '../../types';
import Footer from '../Footer';
import Header from '../Header';

interface PropsLayoutBlog extends PropsLayout {
  ogDate: string;
}

const LayoutBlog: React.FC<PropsLayoutBlog> = ({
  children,
  ogTitle,
  ogDescription,
  ogImageUrl,
  ogOriginalUrl,
  ogKeywords,
  ogDate,
}) => {
  const title = `${ogTitle}`;
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/favicon-96x96.png"
          type="image/x-icon"
        />
        <meta name="robots" content="index, follow" />
        <title>{title}</title>
        <meta name="description" content={ogDescription} />
        <meta name="keywords" content={ogKeywords} />
        <meta name="image" content={ogImageUrl} />
        <meta name="description" content={ogDescription} />
        <link rel="canonical" href={ogOriginalUrl} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:secure_url" content={ogImageUrl} />
        <meta property="og:url" content={ogOriginalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={title} />
        <meta property="og:image:alt" content={title} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="twitter:image:src" content={ogImageUrl} />
        <meta name="twitter:image:alt" content={title} />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta property="article:published_time" content={ogDate} />
        <meta property="article:modified_time" content={ogDate} />
      </Head>
      <Header />
      <main className="mt-20">{children}</main>
      <Footer />
    </>
  );
};

export default LayoutBlog;
