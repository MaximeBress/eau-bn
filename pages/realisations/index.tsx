import { PrismicLink } from '@prismicio/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { createClient } from 'prismicio';

import { Layout } from 'components/Layout';
import { Bounded } from 'components/Bounded';

type Props = {
  navigation: any;
  settings: any;
  achievements: any;
}

const Achievements = ({ navigation, settings, achievements }: Props) => {
  return (
    <Layout navigation={navigation} settings={settings}>
      <Head>
        <title>Nos réalisations</title>
        <meta name="description" content="Voici la liste des réalisations Eau BN" key="description" />
        <meta property="og:title" content="Nos réalisations" key="title" />
        <meta property="og:description" content="Voici la liste des réalisations Eau BN" key="og:description" />
      </Head>

      <Bounded>
        <div className="text-center max-w-lg flex flex-col gap-5 mx-auto mb-14">
          <h1 className="text-6xl text-blue-500 font-bold">Nos Réalisations</h1>
          <p className="text-lg">From year to year we strive to invent the most innovative technology that is used by both small enterprises and space enterprises.</p>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.length > 0 && achievements.map((achievement: any, index: number) =>
            <PrismicLink href={achievement.url} key={index}>
              <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale">
                <img className="rounded-lg" src={achievement.data.image.url} alt={achievement.data.title} />
                <p className="absolute bottom-6 px-4 text-lg text-white">{achievement.data.title}</p>
              </figure>
            </PrismicLink>
          )}
        </section>
      </Bounded>

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

