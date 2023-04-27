import axios from "axios"
import { GETCOMMANDES } from "../ActionTypes/CommandeType"

export const getCommandes=()=>async(dispatch)=>{
    try {
        const res = await axios.get('/api/commande/getAllCommandes')
        dispatch({
            type : GETCOMMANDES,
            payload : res.data.commandes
        })
    } catch (error) {
        console.log(error)
    }
}

export const addCommande=(newCommande,navigate)=>async(dispatch)=>{
    const config = {
        headers : {
            Authorized: localStorage.getItem("token")
        }
    }
    try {
        await axios.post('/api/commande/addCommande',newCommande,config)
        dispatch(getCommandes())        
        navigate('/commandes')
    } catch (error) {
        console.log(error)
    }
}

export const deleteCommande=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/commande/deletecommande/${id}`)
        dispatch(getCommandes())
    } catch (error) {
        console.log(error)
    }
}

// export const getOneCar=(id)=>async(dispatch)=>{
//     try {
//         const res = await axios.get(`/api/car/readCar/${id}`)
//         dispatch({
//             type : GETONECAR,
//             payload : res.data.oneCar
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

export const updateCommande=(upComm,id)=>async(dispatch)=>{
    try {
        await axios.put(`/api/commande/updatecommande/${id}`,upComm)
        dispatch(getCommandes())
        // navigate('/Listcars')
    } catch (error) {
        console.log(error)
    }
}