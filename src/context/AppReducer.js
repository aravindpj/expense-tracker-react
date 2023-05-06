export default function(state,action){
    
    switch (action.type) {
        case "ADD_TRANSACTION":
            localStorage.setItem("transaction",JSON.stringify( {
                ...state,
                transaction:[action.payload,...state.transaction]
            }))
            return {
                ...state,
                transaction:[action.payload,...state.transaction]
            }
        case "DEL_TRANSACTION":
            localStorage.setItem("transaction",JSON.stringify( {
                ...state,
                transaction:state.transaction.filter(data=>data.id !== action.id)
            }))
            return {
                ...state,
                transaction:state.transaction.filter(data=>data.id !== action.id)
            }
        case "ADDALL":
            return{
                ...state,
                transaction:[...action.payload]
            }       
        default:
           return state
    }
  
}