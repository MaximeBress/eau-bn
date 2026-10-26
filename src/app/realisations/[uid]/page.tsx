import { SliceZone } from "@prismicio/react";
import { Metadata } from "next";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

type Params = { uid: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const achievement = await client.getByUID("achievement", uid);

  return {
    title:
      achievement.data.meta_title ||
      achievement.data.title ||
      "Réalisation Eau BN",
    description: achievement.data.meta_description || undefined,
  };
}

export default async function Achievement({
  params,
}: {
  params: Promise<Params>;
}) {
  const { uid } = await params;
  const client = createClient();
  const achievement = await client.getByUID("achievement", uid);
  return <SliceZone slices={achievement.data.slices} components={components} />;
}
