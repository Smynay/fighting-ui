import { createContext, FC, PropsWithChildren, useContext } from "react";
import { viewModels } from "../../core";
import { observer, useLocalObservable } from "mobx-react-lite";

const ViewModelsContext = createContext(viewModels);

export const useViewModel = <T extends keyof typeof viewModels>(
  key: T,
): (typeof viewModels)[T] => useContext(ViewModelsContext)[key];
export const ViewModelsProvider: FC<PropsWithChildren> = observer(
  ({ children }) => {
    const services = useLocalObservable(() => viewModels);

    return (
      <ViewModelsContext.Provider value={services}>
        {children}
      </ViewModelsContext.Provider>
    );
  },
);
