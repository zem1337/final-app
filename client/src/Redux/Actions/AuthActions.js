import { CURRENT, FAIL, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/AuthTypes"
import axios from "axios"
import { handleError } from "./ErrorAction"
export const register=(signUser,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/auth/SignUp',signUser)

        dispatch(
            {
                type : REGISTER,
                payload : res.data
            }
        )
        navigate('/profile')
    } catch (error) {
        // console.log(error)
        // dispatch(
        //     {
        //         type : FAIL,
        //         payload : error.response.data
        //     }
        // )
        error.response.data.errors.forEach(el => {
            dispatch(handleError(el.msg))
        });
    }
}

export const login=(logUser,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post("/api/auth/SignIn",logUser)

        dispatch(
            {
                type : LOGIN,
                payload : res.data
            }
        )

        navigate("/profile")
    } catch (error) {
        // dispatch(
        //     {
        //         type : FAIL,
        //         payload : error.response.data
        //     }
        // )
        error.response.data.errors.forEach(el => {
            dispatch(handleError(el.msg))
        });
    }
}


export const current=()=>async(dispatch)=>{
    const config = {
        headers : {
            Authorized : localStorage.getItem("token")
        }
    }
    try {
        const res = await axios.get("/api/auth/currentUser",config)

        dispatch(
            {
                type : CURRENT,
                payload : res.data
            }
        )
    } catch (error) {
        dispatch(
            {
                type : FAIL,
                payload : error.response.data
            }
        )
    }
}

export const logout=()=>{
    return(
        {
            type : LOGOUT
        }
    )
}