import { InferGetStaticPropsType } from 'next';
import { getStaticProps } from 'pages/[uid]';

export type PageProps = InferGetStaticPropsType<typeof getStaticProps>;
