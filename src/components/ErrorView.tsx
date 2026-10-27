import Image from "next/image";
import { ReactNode } from "react";

import { Container, Eyebrow } from "@/components/ui";

export const ErrorView = ({
  code,
  title,
  text,
  actions,
}: {
  code: string;
  title: string;
  text: string;
  actions: ReactNode;
}) => (
  <section className="relative isolate overflow-hidden">
    <Image
      src="/images/piscine-jardin.jpg"
      alt=""
      fill
      priority
      sizes="100vw"
      className="-z-20 object-cover"
    />
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ivoire via-ivoire/90 to-ivoire/50" />
    <Container className="flex min-h-[70svh] flex-col justify-center py-20">
      <Eyebrow>Erreur {code}</Eyebrow>
      <h1 className="max-w-xl text-5xl leading-[1.05] md:text-7xl">{title}</h1>
      <span aria-hidden="true" className="mt-6 block h-px w-14 bg-petrole" />
      <p className="mt-6 max-w-md text-lg leading-relaxed">{text}</p>
      <div className="mt-9 flex flex-wrap gap-4">{actions}</div>
    </Container>
  </section>
);
