import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Layout } from 'components/Layout';
import { createClient } from 'prismicio';

type Props = {
  navigation: any;
  settings: any;
  achievements: any;
}

const Achievements = ({ navigation, settings, achievements }: Props) => {
  return (
    <Layout navigation={navigation} settings={settings}>
      <Head>
        <title>
          Nos réalisations
        </title>
      </Head>

      <section className="px-6 py-20 md:py-28 bg-white pt-0 md:pt-0">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="text-xl mb-4">Liste de nos réalisations</h1>
          <div className="flex">
            {achievements && achievements.map((achievement: any, index: number) =>
              <a href={achievement.url} key={index} className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-50 hover:border-gray-100">
                <img className="rounded-t-lg" src={achievement.data.image.url} alt="" />
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
              </a>,
            )}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Achievements;

export const getStaticProps: GetStaticProps = async ({ locale, previewData }) => {
  const client = createClient({ previewData });

  const navigation = await client.getSingle('navigation', { lang: locale });
  const settings = await client.getSingle('settings', { lang: locale });
  // @ts-ignore
  const achievements = await client.getAllByType('achievement', { lang: locale });

  return {
    props: {
      navigation,
      settings,
      achievements,
    },
  };
};

