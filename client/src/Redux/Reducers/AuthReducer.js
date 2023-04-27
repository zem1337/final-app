import { CURRENT, FAIL, GETONEUSER, GETUSERS, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/AuthTypes"

const initialState={
    user : {},
    errors : [],
    users : [],
    oneUser : {}
}

const AuthReducer=(state = initialState,action)=>{
    switch (action.type) {
        case FAIL : return {...state,errors : action.payload.errors,user : null}

        case REGISTER : 
        localStorage.setItem("token",action.payload.token)
        return {...state,user : action.payload.newUser,errors : null}

        case LOGIN :
        localStorage.setItem("token",action.payload.token)
        return {...state,user: action.payload.found,errors : null}

        case CURRENT : return {...state, user : action.payload}
        
        case LOGOUT : 
        localStorage.removeItem("token")
        return {...state, user : null,errors : null}

        case GETUSERS : return {...state,users : action.payload}

        case GETONEUSER : return {...state,oneUser : action.payload}
        default: return state
    }
}

export default AuthReducer