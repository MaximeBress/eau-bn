import clsx from "clsx";
import { ElementType, ReactNode } from "react";

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

export const Heading = ({ as: Comp = "h2", children, className }: Props) => {
  return (
    <Comp className={clsx("text-4xl leading-tight md:text-5xl", className)}>
      {children}
    </Comp>
  );
};
