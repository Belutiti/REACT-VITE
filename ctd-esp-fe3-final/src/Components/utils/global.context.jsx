import { createContext, useContext, useEffect} from "react";
import { useReducer } from "react";
import { reducer } from "../../Reducer/reducer";
import axios from "axios";

const ContextGlobal = createContext();

const initialState = {
  theme: true, 
  favList: [], 
  homeList: [],
  detaiList:[]
}

const ContextProvider= ({ children}) => {
  //ApiCall de Cards en Home
const [state, dispatch]= useReducer(reducer, initialState)
const url= 'https://jsonplaceholder.typicode.com/users'

useEffect(()=>{
  axios(url)
 .then(res=> dispatch({type: 'HOMELIST', payload: res.data}))
}, [])

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider
export const useContextGlobal=()=> useContext(ContextGlobal)

