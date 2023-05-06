export default function(state,action){
    switch (action.type) {
        case "ADD_TRANSACTION":
            return {
                ...state,
                transaction:[action.payload,...state.transaction]
            }
        default:
           return state
    }
  
}