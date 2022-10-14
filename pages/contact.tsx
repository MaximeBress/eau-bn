import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useForm } from 'react-hook-form';

import { Layout } from 'components/Layout';
import { createClient } from 'prismicio';

type Props = {
  navigation: any;
  settings: any;
}

const Contact = ({ navigation, settings }: Props) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendMail = async (data: any) => {

    try {
      await fetch('/api/contact', {
        'method': 'POST',
        'headers': { 'content-type': 'application/json' },
        'body': JSON.stringify(data),
      });

    } catch (error) {
      // toast error message. whatever you wish
    }

  };

  return (
    <Layout navigation={navigation} settings={settings}>
      <Head>
        <title>
          Contactez nous
        </title>
      </Head>

      <section className="px-6 py-20 md:py-28 bg-white pt-0 md:pt-0">
        <div className="mx-auto w-full max-w-6xl">
          <form onSubmit={handleSubmit(sendMail)} className="flex flex-col gap-3">
            <div className="p-3 flex">
              <label className="mr-3" htmlFor="subject">Subject</label>
              <input className="w-full border" id="subject" type="text" {...register('subject')} />
            </div>
            <div className="p-3 flex">
              <label className="mr-3" htmlFor="email">Email address</label>
              <input className="w-full border" id="email" type="email" {...register('email')} />
            </div>
            <div className="p-3 flex">
              <label className="mr-3" htmlFor="message">Message</label>
              <textarea className="w-full border" id="message" {...register('message')} />
            </div>
            <button type="submit" className="py-2 px-1 bg-blue-500 text-white">
              Submit
            </button>
          </form>
        </div>
      </section>

    </Layout>
  );
};

export default Contact;

export const getStaticProps: GetStaticProps = async ({ locale, previewData }) => {
  const client = createClient({ previewData });

  const navigation = await client.getSingle('navigation', { lang: locale });
  const settings = await client.getSingle('settings', { lang: locale });

  return {
    props: {
      navigation,
      settings,
    },
  };
};

