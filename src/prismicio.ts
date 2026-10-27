import {
  type ClientConfig,
  createClient as baseCreateClient,
  type Route,
} from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";

import sm from "../slicemachine.config.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || sm.repositoryName;

const routes: Route[] = [{ type: "achievement", path: "/realisations/:uid" }];

export const createClient = (config: ClientConfig = {}) => {
  const client = baseCreateClient(repositoryName, {
    routes,
    // Production is refreshed by the Prismic webhook (/api/revalidate), which
    // cannot reach preview deployments: those refresh every minute instead.
    fetchOptions:
      process.env.NODE_ENV !== "production"
        ? { next: { revalidate: 5 } }
        : process.env.VERCEL_ENV === "preview"
          ? { next: { tags: ["prismic"], revalidate: 60 } }
          : { next: { tags: ["prismic"] }, cache: "force-cache" },
    ...config,
  });

  enableAutoPreviews({ client });

  return client;
};
