import Head from 'next/head';
import React from 'react';
import { Inter } from 'next/font/google';

import HeaderComponent from '@/component/HeaderComponent';
import TopbanComponent from '@/component/TopbanComponent';
import TopbreadcrumComponent from '@/component/TopbreadcrumComponent';

import ProductComponent from '@/component/ProductComponent';
import FooterComponent from '@/component/FooterComponent';

export default function Home() {
  return (
    <>
      <Head>
        <title>Product Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TopbanComponent />
        <HeaderComponent />
        <TopbreadcrumComponent />
        <ProductComponent />
        <FooterComponent />
      </main>
    </>
  );
}
