import { useId } from "react";

export const useGetNewIdOrPassed = (prefix: string, id?: string): string => {
  const currentId = useId();

  return id ?? `${prefix}-${currentId}`;
};
