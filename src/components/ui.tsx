import clsx from "clsx";
import Link from "next/link";
import { ComponentProps, ElementType, ReactNode } from "react";

import { ArrowRightIcon, ExternalIcon } from "@/components/icons";

export const Container = ({
  as: Comp = "div",
  className,
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) => (
  <Comp className={clsx("mx-auto w-full max-w-6xl px-5 md:px-8", className)}>
    {children}
  </Comp>
);

export const Section = ({
  className,
  tone = "ivoire",
  children,
  id,
}: {
  className?: string;
  tone?: "ivoire" | "sable" | "blanc";
  children: ReactNode;
  id?: string;
}) => (
  <section
    id={id}
    className={clsx(
      "py-16 md:py-24",
      tone === "sable" && "bg-sable-clair",
      tone === "blanc" && "bg-white",
      className,
    )}
  >
    {children}
  </section>
);

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-petrole uppercase">
    {children}
  </p>
);

export const SectionTitle = ({
  children,
  eyebrow,
  align = "left",
  as: Comp = "h2",
  className,
}: {
  children: ReactNode;
  eyebrow?: string;
  align?: "left" | "center";
  as?: ElementType;
  className?: string;
}) => (
  <div
    className={clsx(
      "mb-10 md:mb-14",
      align === "center" && "text-center",
      className,
    )}
  >
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <Comp className="text-4xl leading-tight md:text-5xl">{children}</Comp>
    <span
      aria-hidden="true"
      className={clsx(
        "mt-5 block h-px w-14 bg-petrole",
        align === "center" && "mx-auto",
      )}
    />
  </div>
);

type ButtonProps = {
  href: string;
  variant?: "primary" | "outline" | "light";
  external?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"a">, "href">;

const buttonClasses = (variant: ButtonProps["variant"]) =>
  clsx(
    "group inline-flex items-center justify-center gap-3 rounded-md px-6 py-3.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrole",
    variant === "primary" && "bg-petrole text-white hover:bg-petrole-fonce",
    variant === "outline" &&
      "border border-petrole text-petrole hover:bg-petrole hover:text-white",
    variant === "light" && "bg-ivoire text-petrole hover:bg-white",
  );

export const ButtonLink = ({
  href,
  variant = "primary",
  external = false,
  className,
  children,
  ...rest
}: ButtonProps) => {
  const content = (
    <>
      <span>{children}</span>
      {external ? (
        <ExternalIcon className="size-4" />
      ) : (
        <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={clsx(buttonClasses(variant), className)}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={clsx(buttonClasses(variant), className)}>
      {content}
    </Link>
  );
};

export const buttonClassName = buttonClasses;
