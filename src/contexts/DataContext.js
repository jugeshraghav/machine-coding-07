import { createContext, useContext, useReducer } from "react";
import { data } from "../constants/Data";

const DataContext = createContext({
  state: {},
  dispatch: () => {},
});

const initialState = {
  data: data,
};

const reducer = (state, action) => {};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);

export default DataProvider;
