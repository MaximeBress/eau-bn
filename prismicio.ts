import * as prismic from '@prismicio/client';
import { CreateClientConfig } from '@prismicio/next';
import * as prismicNext from '@prismicio/next';

import sm from './sm.json';

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

/**
 * The project's Prismic Link Resolver. This function determines the URL for a
 * given Prismic document.
 *
 * @type {prismicH.LinkResolverFunction}
 */
export const linkResolver = (doc: any) => {
  if (doc.url === '/home') {
    return '/';
  }
};

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - A configuration object to
 */
export const createClient = (config: CreateClientConfig = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, {
    routes: [
      { type: 'page', path: '/:uid' },
      { type: 'achievement', path: '/realisations' },
      { type: 'achievement', path: '/realisations/:uid' },
      { type: 'settings', path: '/' },
      { type: 'navigation', path: '/' },
    ],
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
