import { createContext } from "react";

export const TabsData = createContext({
  pageNumber: 0,
  handlePageNumber: () => {},
  coins: [],
  setCoins: () => {},
  loading: false,
  setLoading: () => {},
});
