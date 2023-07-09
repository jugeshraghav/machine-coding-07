import { createContext, useContext, useReducer } from "react";

//initial state
const initial_state = {};
//reducers
const reducer = (state, action) => {
  // const {type,payload}=action;
  // switch(type){
  //     default:
  //         return state;
  // }
};
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial_state);
  <DataContext.Provider value={{ state, dispatch }}>
    {children}
  </DataContext.Provider>;
};

export const useData = () => useContext(DataContext);

export { DataProvider };
