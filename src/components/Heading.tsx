import clsx from "clsx";
import { ElementType, ReactNode } from "react";

type Props = {
  as?: ElementType;
  size?: "xl" | "lg" | "md" | "sm";
  children: ReactNode;
  className?: string;
};

export const Heading = ({
  as: Comp = "h1",
  size = "lg",
  children,
  className,
}: Props) => {
  return (
    <Comp
      className={clsx(
        "leading-tight font-semibold tracking-tight md:leading-tight",
        size === "xl" && "text-5xl md:text-7xl",
        size === "lg" && "text-4xl md:text-5xl",
        size === "md" && "text-3xl md:text-4xl",
        size === "sm" && "text-xl md:text-2xl",
        className,
      )}
    >
      {children}
    </Comp>
  );
};
