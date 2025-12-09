import { ReactElement, ReactNode } from "react";

type Props = {
  condition: boolean;
  wrap: ({ children }: { children: ReactNode }) => ReactElement;
  children: ReactNode;
};
export const ConditionalWrap = ({ condition, wrap: Wrap, children }: Props) => {
  return condition ? <Wrap>{children}</Wrap> : children;
};
