import axios from "axios"
import { GETCARS, GETONECAR } from "../ActionTypes/CarTypes"
export const getCars=()=>async(dispatch)=>{
    try {
        const res = await axios.get('/api/car/CarList')
        dispatch({
            type : GETCARS,
            payload : res.data.Cars
        })
    } catch (error) {
        console.log(error)
    }
}

export const addCar=(newCar,navigate)=>async(dispatch)=>{
    try {
        await axios.post('/api/car/addCar',newCar)
        dispatch(getCars())
        navigate('/listcars')
    } catch (error) {
        console.log(error)
    }
}

export const deleteCar=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/car/deleteCar/${id}`)
        dispatch(getCars())
    } catch (error) {
        console.log(error)
    }
}

export const getOneCar=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/car/readCar/${id}`)
        dispatch({
            type : GETONECAR,
            payload : res.data.oneCar
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateCar=(upCar,id,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/car/updateCar/${id}`,upCar)
        dispatch(getCars())
        navigate('/Listcars')
    } catch (error) {
        console.log(error)
    }
}