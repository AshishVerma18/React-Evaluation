
import React, { createContext, useContext } from 'react';

const Context = createContext(undefined);

export const AppContextProvider = ({ app, children }) => (
  <Context.Provider value={app} children={children} />
);

export const useApp = () => {
  const app = useContext(Context);
  if (!app) {
    throw new Error('No app context available');
  }
  return app;
};