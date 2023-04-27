import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCommandes } from "../Redux/Actions/CommandeActions"
import CardCommande from "./CardCommande"

const ListCommandes=()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCommandes())
    },[])
    const user = useSelector(state=> state.AuthReducer.user)
    const commandes = useSelector(state=> state.CommandeReducer.commandes)
    return(
        <div className="pro">
            {/* {
                commandes ? <>
                 {
            user.role == "admin" && commandes.map(el=><CardCommande el={el}/>)
            }</> : 
            <>
            {
                commandes.filter(el=> el.owner._id == user._id).map(el=><CardCommande el={el}/>)
            }
            </>
                
            } */}

            {
                commandes &&<> {
                    user.role == "admin" ? commandes.map(el=><CardCommande el={el}/>) : commandes.filter(el=> el.owner._id == user._id).map(el=><CardCommande el={el}/>)
                }</>
            }
     
        </div>
    )
}

export default ListCommandes