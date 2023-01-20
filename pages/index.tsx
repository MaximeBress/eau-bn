import { GetStaticProps } from 'next';
import Head from 'next/head';
import { SliceZone } from '@prismicio/react';

import { Layout } from 'components/Layout';
import { createClient } from 'prismicio';
import { components } from 'slices';
import { PageProps } from 'typings';

const Index = ({ page, navigation, settings }: PageProps) => {
  return (
    <Layout navigation={navigation} settings={settings}>
      <Head>
        <title>{page.data.meta_title}</title>
        <meta name="description" content={page.data.meta_description} key="description" />
        <meta property="og:title" content={page.data.meta_title} key="title" />
        <meta property="og:description" content={page.data.meta_description} key="og:description" />
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async ({ locale, previewData }) => {
  const client = createClient({ previewData });

  const page = await client.getByUID('page', 'home', { lang: locale });
  const navigation = await client.getSingle('navigation', { lang: locale });
  const settings = await client.getSingle('settings', { lang: locale });

  return {
    props: {
      page,
      navigation,
      settings,
    },
  };
};
