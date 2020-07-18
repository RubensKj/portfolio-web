import React, { createContext, useContext, useState } from 'react';

interface ILoading {
  isLoading: boolean;
  setIsLoading(set: boolean): void;
}

const LoadingContext = createContext<ILoading>({} as ILoading);

export const LoadingProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);

  function setIsLoading(set: boolean) {
    setLoading(set);
  }

  return (
    <LoadingContext.Provider value={{ isLoading: loading, setIsLoading: setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);

  return context;
};