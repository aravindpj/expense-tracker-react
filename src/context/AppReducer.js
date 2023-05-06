export default function(state,action){
    switch (action.type) {
        case "ADD_TRANSACTION":
            return {
                ...state,
                transaction:[action.payload,...state.transaction]
            }
        case "DEL_TRANSACTION":
            return {
                ...state,
                transaction:state.transaction.filter(data=>data.id !== action.id)
            }
        default:
           return state
    }
  
}