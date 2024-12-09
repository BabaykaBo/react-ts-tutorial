import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

interface AppStateValue {
  cart: {
    items: {
      id: number;
      name: string;
      price: number;
      quantity: number;
    }[];
  };
}

const defaultStateValue: AppStateValue = {
  cart: {
    items: [],
  },
};

type SetStateType =
  | React.Dispatch<React.SetStateAction<AppStateValue>>
  | undefined;

export const AppStateContext = createContext(defaultStateValue);
export const AppSetStateContext = createContext<SetStateType>(undefined);

export const useSetState = () => {
  const setState = useContext(AppSetStateContext);
  if (!setState) {
    throw Error(
      "useSetState was called outside of the AppStateContext provider!"
    );
  }
  return setState;
};

const AppStateProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState(defaultStateValue);
  return (
    <AppStateContext.Provider value={state}>
      <AppSetStateContext.Provider value={setState}>
        {children}
      </AppSetStateContext.Provider>
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
