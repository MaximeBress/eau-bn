import { SliceZone } from "@prismicio/react";
import { Metadata } from "next";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("page", "home");

  return {
    title: page.data.meta_title || page.data.title || "Eau BN - Accueil",
    description: page.data.meta_description || undefined,
  };
}

export default async function Home() {
  const client = createClient();
  const page = await client.getByUID("page", "home");

  return <SliceZone slices={page.data.slices} components={components} />;
}
