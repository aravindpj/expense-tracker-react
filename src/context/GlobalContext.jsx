import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

let initailState = {
    transaction : [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
      ]
}

export const  GlobalContext = createContext()

// eslint-disable-next-line react/prop-types
export const ContextProvider = function({children}){
   
    const [state,dispatch]=useReducer(AppReducer,initailState)
   
    const AddTransaction = (transaction) => {
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transaction
        })
    }
    const DelTransaction = (id) => {
        dispatch({
            type:"DEL_TRANSACTION",
            id
        })
    }
    const Addall=(alltrans)=>{
        dispatch({
            type:"ADDALL",
            payload:alltrans
        })
    }
    return (
         <GlobalContext.Provider value={{transaction:state.transaction,AddTransaction,DelTransaction,Addall}}>
            {children}
        </GlobalContext.Provider>
    )

}