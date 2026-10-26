import clsx from "clsx";
import { ElementType, ReactNode } from "react";

type Props = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

// Wrapper used by Prismic slices (réalisations).
export const Bounded = ({ as: Comp = "div", className, children }: Props) => {
  return (
    <Comp className={clsx("py-4 md:py-6", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">{children}</div>
    </Comp>
  );
};
