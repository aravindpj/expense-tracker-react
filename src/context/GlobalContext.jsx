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

export const  GlobalContext = createContext(initailState)

// eslint-disable-next-line react/prop-types
export const ContextProvider = function({children}){
   
    const [state,dispatch]=useReducer(AppReducer,initailState)
   
    const AddTransaction = (transaction) => {
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transaction
        })
    }

    return (
         <GlobalContext.Provider value={{transaction:state.transaction,AddTransaction}}>
            {children}
        </GlobalContext.Provider>
    )

}