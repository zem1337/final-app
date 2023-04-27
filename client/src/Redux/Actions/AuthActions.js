import { CURRENT, FAIL, GETONEUSER, GETUSERS, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/AuthTypes"
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

export const getUsers=()=>async(dispatch)=>{
    try {
        const res = await axios.get('/api/auth/getAllUsers')
        dispatch({
            type : GETUSERS,
            payload : res.data.users

        })
    } catch (error) {
        console.log(error)
    }
}



export const deleteUser=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/auth/deleteUser/${id}`)
        dispatch(getUsers())
    } catch (error) {
        console.log(error)
    }
}

export const deleteProfil=(id,navigate)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/auth/deleteUser/${id}`)
        dispatch(logout())
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const getOneUser=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/auth/readUser/${id}`)
        dispatch({
            type : GETONEUSER,
            payload : res.data.oneUser
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateUser=(upUser,id,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/auth/updateUser/${id}`,upUser)
        dispatch(getUsers())
        navigate('/listusers')
    } catch (error) {
        console.log(error)
    }
}

export const updateProfile=(upUser,id,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/auth/updateUser/${id}`,upUser)
        dispatch(getUsers())
        navigate('/profile')
    } catch (error) {
        console.log(error)
    }
}