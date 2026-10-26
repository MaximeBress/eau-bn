"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { Bounded } from "@/components/Bounded";

type FormProps = {
  subject: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormProps>();

  const toastifySuccess = () => {
    toast.success("Formulaire envoyé !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const toastifyError = () => {
    toast.error("Il y'a eu un problème lors de l'envoi du formulaire", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const sendMail = async (data: FormProps) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toastifySuccess();
        reset();
      } else {
        toastifyError();
      }
    } catch {
      toastifyError();
    }
  };

  return (
    <Bounded>
      <section className="icon-mail relative rounded-lg bg-gray-100 p-16 md:p-24">
        <div className="flex flex-col gap-y-3 md:max-w-[65%] md:gap-y-6">
          <h2 className="text-lg font-bold text-orange-500 md:text-xl">
            Contactez Nous
          </h2>
          <h1 className="text-2xl font-bold text-blue-500 md:text-5xl">
            Vous avez un projet en tête ?
          </h1>
          <p>
            Envoyez nous un message et nous nous occuperons de vous recontacter
            dans les plus brefs délais
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-6 md:grid md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <div className="text-lg font-bold">Eau B.N Piscines</div>
            <div>1595 route de berre</div>
            <div>13510 Eguilles</div>
            <div>06 21 05 50 84</div>
            <div>contact.eaubn@gmail.com</div>
          </div>
          <form
            onSubmit={handleSubmit(sendMail)}
            className="flex flex-col gap-4 md:col-span-2"
            noValidate
          >
            <div className="flex gap-4">
              <div className="w-full">
                <input
                  className="w-full border px-6 py-3 focus:border-orange-500 focus-visible:ring-0 focus-visible:outline-0"
                  id="subject"
                  type="text"
                  placeholder="Sujet"
                  {...register("subject", {
                    required: {
                      value: true,
                      message: "Veuillez entrer le sujet de votre message",
                    },
                  })}
                />
                {errors.subject && (
                  <span className="ml-4 text-sm text-red-600">
                    {errors.subject.message}
                  </span>
                )}
              </div>
              <div className="w-full">
                <input
                  className="w-full border px-6 py-3 focus:border-orange-500 focus-visible:ring-0 focus-visible:outline-0"
                  id="email"
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Veuillez entrer une adresse email valide",
                    },
                    pattern:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                />
                {errors.email && (
                  <span className="ml-4 text-sm text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>
            <div className="w-full">
              <textarea
                className="w-full border px-6 py-3 focus:border-orange-500 focus-visible:ring-0 focus-visible:outline-0"
                rows={8}
                id="message"
                placeholder="Message"
                {...register("message", {
                  required: {
                    value: true,
                    message:
                      "Votre message doit contenir au moins un caractère",
                  },
                })}
              />
              {errors.message && (
                <span className="ml-4 text-sm text-red-600">
                  {errors.message.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-lg bg-gradient-to-br from-pink-500 to-orange-500 p-4 text-white hover:from-pink-400 hover:to-orange-400 hover:text-white focus:ring-4 focus:ring-pink-200 focus:outline-none"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>
    </Bounded>
  );
}
