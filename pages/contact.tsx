import { GetStaticProps } from 'next';
import Head from 'next/head';
import { createClient } from 'prismicio';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { Bounded } from 'components/Bounded';
import { Layout } from 'components/Layout';

type Props = {
    navigation: any;
    settings: any;
}

type FormProps = {
    subject: string;
    email: string;
    message: string;
}

const Contact = ({ navigation, settings }: Props) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormProps>();

    const toastifySuccess = () => {
        toast.success('Formulaire envoyé !', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    };

    const toastifyError = () => {
        toast.error('Il y\'a eu un problème lors de l\'envoi du formulaire', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    };

    const sendMail = async (data: any) => {
        try {
            const response = await fetch('/api/contact', {
                'method': 'POST',
                'headers': { 'content-type': 'application/json' },
                'body': JSON.stringify(data),
            });
            if (response.status === 200) {
                toastifySuccess();
                reset();
            }
        } catch (error) {
            toastifyError();
        }
    };

    return (
        <Layout navigation={navigation} settings={settings}>
            <Head>
                <title>
                    Contactez nous
                </title>
                <meta name="description" content="Contactez Eau BN via notre formulaire de contact" key="description"/>
                <meta property="og:title" content="Formulaire de contact Eau BN" key="title"/>
                <meta property="og:description" content="Contactez Eau BN via notre formulaire de contact"
                      key="og:description"/>
            </Head>

            <Bounded>
                <section className="bg-gray-100 p-16 md:p-24 rounded-lg icon-mail relative">
                    <div className="flex flex-col gap-y-3 md:gap-y-6 md:max-w-[65%]">
                        <h2 className="text-lg md:text-xl text-orange-500 font-bold">Contactez Nous</h2>
                        <h1 className="text-2xl md:text-5xl text-blue-500 font-bold">Vous avez un projet en tête ?</h1>
                        <p>Envoyez nous un message et nous nous occuperons de vous recontacter dans les plus brefs
                            délais</p>
                    </div>
                    <div className="flex flex-col md:grid md:grid-cols-3 gap-6 mt-10">
                        <div className="flex flex-col gap-2">
                            <div className="font-bold text-lg">Eau B.N Piscines</div>
                            <div>1595 route de berre</div>
                            <div>13510 Eguilles</div>
                            <div>06 21 05 50 84</div>
                            <div>contact.eaubn@gmail.com</div>
                        </div>
                        <form onSubmit={handleSubmit(sendMail)} className="md:col-span-2 flex flex-col gap-4"
                              noValidate>
                            <div className="flex gap-4">
                                <div className="w-full">
                                    <input
                                        className="w-full border py-3 px-6 focus-visible:ring-0 focus-visible:outline-0 focus:border-orange-500"
                                        id="subject"
                                        type="text"
                                        placeholder="Sujet"
                                        {...register('subject', {
                                            required: {
                                                value: true,
                                                message: 'Veuillez entrer le sujet de votre message'
                                            },
                                        })}
                                    />
                                    {errors.subject &&
                                        <span className="text-red-600 ml-4 text-sm">{errors.subject.message}</span>}
                                </div>
                                <div className="w-full">
                                    <input
                                        className="w-full border py-3 px-6 focus-visible:ring-0 focus-visible:outline-0 focus:border-orange-500"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        {...register('email', {
                                            required: {
                                                value: true,
                                                message: 'Veuillez entrer une adresse email valide'
                                            },
                                            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                        })}
                                    />
                                    {errors.email &&
                                        <span className="text-red-600 ml-4 text-sm">{errors.email.message}</span>}
                                </div>
                            </div>
                            <div className="w-full">
                              <textarea
                                  className="w-full border py-3 px-6 focus-visible:ring-0 focus-visible:outline-0 focus:border-orange-500"
                                  rows={8}
                                  id="message"
                                  placeholder="Message"
                                  {...register('message', {
                                      required: {
                                          value: true,
                                          message: 'Votre message doit contenir au moins un caractère'
                                      },
                                  })}
                              />
                                {errors.message &&
                                    <span className="text-red-600 ml-4 text-sm">{errors.message.message}</span>
                                }
                            </div>
                            <button type="submit"
                                    className="p-4 bg-gradient-to-br from-pink-500 to-orange-500 hover:from-pink-400 hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 rounded-lg text-white">
                                Envoyer
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

