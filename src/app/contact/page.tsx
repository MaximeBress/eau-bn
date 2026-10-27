"use client";

import clsx from "clsx";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import {
  ExternalIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "@/components/icons";
import { Container, Eyebrow } from "@/components/ui";
import { site } from "@/config/site";

type FormProps = {
  subject: string;
  email: string;
  message: string;
};

const toastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
} as const;

const fieldClassName = (hasError: boolean) =>
  clsx(
    "w-full rounded-md border bg-white px-4 py-3 text-anthracite transition-colors placeholder:text-anthracite/50 focus:border-petrole focus:ring-1 focus:ring-petrole focus:outline-none",
    hasError ? "border-red-600" : "border-sable",
  );

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormProps>();

  const sendMail = async (data: FormProps) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success("Formulaire envoyé !", toastOptions);
        reset();
      } else {
        toast.error(
          "Il y a eu un problème lors de l’envoi du formulaire",
          toastOptions,
        );
      }
    } catch {
      toast.error(
        "Il y a eu un problème lors de l’envoi du formulaire",
        toastOptions,
      );
    }
  };

  return (
    <section className="py-14 md:py-24">
      <Container className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:gap-16">
        <div>
          <Eyebrow>Contactez-nous</Eyebrow>
          <h1 className="text-4xl leading-[1.1] md:text-6xl">
            Vous avez un projet en tête ?
          </h1>
          <span
            aria-hidden="true"
            className="mt-6 block h-px w-14 bg-petrole"
          />
          <p className="mt-6 text-lg leading-relaxed">
            Envoyez-nous un message et nous vous recontacterons dans les plus
            brefs délais pour en parler.
          </p>

          <ul className="mt-10 flex flex-col gap-5">
            <li className="flex gap-4">
              <PinIcon className="mt-0.5 size-5 shrink-0 text-petrole" />
              <span>
                <span className="block font-medium">{site.name}</span>
                {site.address.street}
                <br />
                {site.address.city}
              </span>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="flex gap-4 hover:text-petrole"
              >
                <PhoneIcon className="size-5 shrink-0 text-petrole" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex gap-4 break-all hover:text-petrole"
              >
                <MailIcon className="size-5 shrink-0 text-petrole" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex gap-4 hover:text-petrole"
              >
                <InstagramIcon className="size-5 shrink-0 text-petrole" />
                Suivez nos chantiers sur Instagram
              </a>
            </li>
            <li>
              <a
                href={site.nuancier.url}
                target="_blank"
                rel="noreferrer"
                className="flex gap-4 hover:text-petrole"
              >
                <ExternalIcon className="size-5 shrink-0 text-petrole" />
                {site.nuancier.label}
              </a>
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit(sendMail)}
          className="flex flex-col gap-5 self-start rounded-lg bg-sable-clair p-6 md:p-10"
          noValidate
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Sujet
              </label>
              <input
                className={fieldClassName(!!errors.subject)}
                id="subject"
                type="text"
                placeholder="Rénovation de mon bassin"
                aria-invalid={!!errors.subject}
                {...register("subject", {
                  required: "Veuillez entrer le sujet de votre message",
                })}
              />
              {errors.subject && (
                <span className="text-sm text-red-700">
                  {errors.subject.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                className={fieldClassName(!!errors.email)}
                id="email"
                type="email"
                autoComplete="email"
                placeholder="vous@exemple.fr"
                aria-invalid={!!errors.email}
                {...register("email", {
                  required: "Veuillez entrer une adresse email valide",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Veuillez entrer une adresse email valide",
                  },
                })}
              />
              {errors.email && (
                <span className="text-sm text-red-700">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              className={fieldClassName(!!errors.message)}
              rows={8}
              id="message"
              placeholder="Parlez-nous de votre bassin et de votre projet…"
              aria-invalid={!!errors.message}
              {...register("message", {
                required: "Votre message doit contenir au moins un caractère",
              })}
            />
            {errors.message && (
              <span className="text-sm text-red-700">
                {errors.message.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-md bg-petrole px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-petrole-fonce disabled:opacity-60 md:self-start"
          >
            {isSubmitting ? "Envoi en cours…" : "Envoyer le message"}
          </button>
        </form>
      </Container>
    </section>
  );
}
