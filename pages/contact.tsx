import { createClient } from 'prismicio';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { toast } from 'react-nextjs-toast';

import { Layout } from 'components/Layout';
import { Bounded } from 'components/Bounded';

type Props = {
  navigation: any;
  settings: any;
}

const Contact = ({ navigation, settings }: Props) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const sendMail = async (data: any) => {

    try {
      const response = await fetch('/api/contact', {
        'method': 'POST',
        'headers': { 'content-type': 'application/json' },
        'body': JSON.stringify(data),
      });
      if(response.status === 200) {
        reset();
        console.log(response);
        toast.notify('Votre message a bien été envoyé !', {
          duration: 2000,
          type: "success"
        });
      }
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

      <Bounded>
        <section className="bg-gray-100 p-16 md:p-24 rounded-lg icon-mail relative">
          <div className="flex flex-col gap-y-3 md:gap-y-6 md:max-w-[65%]">
            <h2 className="text-lg md:text-xl text-orange-500 font-bold">Contactez Nous</h2>
            <h1 className="text-2xl md:text-5xl text-blue-500 font-bold">Vous avez un projet en tête ?</h1>
            <p>Envoyez nous un message et nous nous occuperons de vous recontacter dans les plus brefs délais</p>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-3 gap-6 mt-10">
            <div className="flex flex-col gap-2">
              <div className="font-bold text-lg">Eau B.N Piscines</div>
              <div>1595 route de berre</div>
              <div>13510 Eguilles</div>
              <div>06 06 06 06 06</div>
              <div>contact@eau-bn.fr</div>
            </div>
            <form onSubmit={handleSubmit(sendMail)} className="md:col-span-2 flex flex-col gap-4">
              <div className="flex gap-4">
                <input className="w-full border py-3 px-6 focus-visible:ring-0 focus-visible:outline-0 focus:border-orange-500" id="subject" type="text" placeholder="Sujet" {...register('subject')} />
                <input className="w-full border py-3 px-6 focus-visible:ring-0 focus-visible:outline-0 focus:border-orange-500" id="email" type="email" placeholder="Email" {...register('email')} />
              </div>
              <textarea className="w-full border py-3 px-6 focus-visible:ring-0 focus-visible:outline-0 focus:border-orange-500" rows={8} id="message" placeholder="Message" {...register('message')} />
              <button type="submit" className="p-4 bg-orange-500 hover:bg-orange-400 rounded-lg text-white">
                Submit
              </button>
            </form>
          </div>
        </section>
      </Bounded>
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

