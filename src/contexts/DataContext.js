import { createContext, useContext, useReducer } from "react";

//initial state
const initial_state = {};
//reducers
const reducer=(state,action)={
    // const {type,payload}=action;
    // switch(type){
    //     default:
    //         return state;
    // }

}
const DataContext = createContext();

const [state,dispatch]=useReducer(reducer,initial_state);
const DataProvider = ({ children }) => {
  <DataContext.Provider value={{state,dispatch}}>{children}</DataContext.Provider>;
};

export const useData=()=>useContext(DataContext);

export {DataProvider}
