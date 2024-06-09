import { createContext, FC, PropsWithChildren, useContext } from "react";
import { plugins } from "../../core";

const ServicesContext = createContext(plugins);

export const useService = (key: keyof typeof plugins) =>
  useContext(ServicesContext)[key];
export const ServicesProvider: FC<PropsWithChildren> = ({ children }) => (
  <ServicesContext.Provider value={plugins}>
    {children}
  </ServicesContext.Provider>
);
