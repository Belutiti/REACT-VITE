import { createContext, useContext, useEffect} from "react";
import { useReducer } from "react";
import { reducer } from "../../Reducer/reducer";
import axios from "axios";
import { useParams } from 'react-router-dom'


const ContextGlobal = createContext();

const initialState = {
  theme: "", 
  favList: [], 
  homeList: [],
  detaiList:[]
}

const ContextProvider = ({ children }) => {

  //ApiCall de Cards en Home
const [state, dispatch]= useReducer(reducer, initialState)
const url= 'https://jsonplaceholder.typicode.com/users'

useEffect(()=>{
  axios(url)
 .then(res=> dispatch({type: 'HOMELIST', payload: res.data}))
}, [])

//ApiCall de detalles  en Card
const {id}= useParams()
const urlDinamico= `https://jsonplaceholder.typicode.com/users/${id}`

useEffect(()=>{
    axios(urlDinamico)
    .then((response)=>dispatch({type: 'DETAILIST', payload: response.data}))
  }, [id])


  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider
export const useContextGlobal=()=> useContext(ContextGlobal)

