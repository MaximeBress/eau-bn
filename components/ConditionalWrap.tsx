import { PageProps } from 'typings';

/**
 * Adds a wrapper around children if a condition is true.
 */
export const ConditionalWrap = ({ condition, wrap: Wrap, children }: PageProps) => {
  return condition ? <Wrap>{children}</Wrap> : children;
};
