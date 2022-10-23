import { GetStaticProps } from 'next';
import Head from 'next/head';
import { SliceZone } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';

import { Layout } from 'components/Layout';
import { createClient } from 'prismicio';
import { components } from 'slices';
import { PageProps } from 'typings';

const Index = ({ page, navigation, settings }: PageProps) => {
  return (
    <Layout navigation={navigation} settings={settings}>
      <Head>
        <title>{prismicH.asText(page.data.title)}</title>
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
