import { SliceZone } from '@prismicio/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { createClient } from 'prismicio';

import { Layout } from 'components/Layout';
import { components } from 'slices';
import { PageProps } from 'typings';

const Page = ({ page, navigation, settings }: PageProps) => {
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

export default Page;

export const getStaticProps: GetStaticProps = async ({ params, locale, previewData }) => {
  const client = createClient({ previewData });
  if (!params?.uid) {
    return { notFound: true };
  }
  const page = await client.getByUID('page', params.uid as string, { lang: locale });
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

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient();

  const pages = await client.getAllByType('page', { lang: '*' });

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
        locale: page.lang,
      };
    }),
    fallback: false,
  };
};
