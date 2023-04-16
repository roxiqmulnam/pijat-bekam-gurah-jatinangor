import About from '@/components/layouts/About';
import Hero from '@/components/layouts/Hero';
import Layout from '@/components/layouts/Layout';
import Head from 'next/head';
import Order from '@/components/layouts/Order';
import Services from '@/components/layouts/Services';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pijat Bekam Gurah Jatinangor</title>
      </Head>
      <Layout>
        <Hero />
        <About />
        <Order />
        <Services />
      </Layout>
    </>
  );
}
