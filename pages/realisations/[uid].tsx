import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { SliceZone } from '@prismicio/react';

import { Layout } from 'components/Layout';
import { createClient } from 'prismicio';
import { components } from 'slices';

type Props = {
  achievement: any;
  navigation: any;
  settings: any;
}

const Achievement = ({ achievement, navigation, settings }: Props) => {
  return (
    <Layout navigation={navigation} settings={settings}>
      <Head>
        <title>{achievement.data.meta_title}</title>
        <meta name="description" content={achievement.data.meta_description} key="description" />
        <meta property="og:title" content={achievement.data.meta_title} key="title" />
        <meta property="og:description" content={achievement.data.meta_description} key="og:description" />
      </Head>
      <SliceZone slices={achievement.data.slices} components={components} />
    </Layout>
  );
};

export default Achievement;

export const getStaticProps: GetStaticProps = async ({ params, locale, previewData }) => {
  const client = createClient({ previewData });
  if (!params?.uid) {
    return { notFound: true };
  }
  // @ts-ignore
  const achievement = await client.getByUID('achievement', params.uid as string, { lang: locale });
  const navigation = await client.getSingle('navigation', { lang: locale });
  const settings = await client.getSingle('settings', { lang: locale });

  return {
    props: {
      achievement,
      navigation,
      settings,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient();

  // @ts-ignore
  const achievements = await client.getAllByType('achievement', { lang: '*' });

  return {
    paths: achievements.map((achievement: any) => {
      return {
        params: { uid: achievement.uid },
        locale: achievement.lang,
      };
    }),
    fallback: false,
  };
};
