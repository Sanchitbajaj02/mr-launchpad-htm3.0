import { createContext } from 'react'

export type AppContext = {
  store: {
    walletAddress: string;
  }
  setStore: (store: {
    walletAddress: string;
  }) => void; 
}

export const DataContext = createContext<AppContext | null>({
  store: {
    walletAddress: "lorem",
  },
  setStore: (store) => {
    console.log('setStore', store.walletAddress)
  },

});

