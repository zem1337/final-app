import { GETCOMMANDES } from "../ActionTypes/CommandeType"

const initialState={
    commandes : [],
    myCommandes : [],
    oneCommande : {}
}

const CommandeReducer=(state = initialState,action)=>{
    switch (action.type) {
       case GETCOMMANDES : return {...state,commandes : action.payload}
        default: return state
    }
}

export default CommandeReducer