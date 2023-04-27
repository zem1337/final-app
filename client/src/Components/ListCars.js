import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCars } from "../Redux/Actions/CarActions"
import CardCar from "./CardCar"

const ListCars=()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCars())
    },[])

    const cars = useSelector(state=> state.CarReducer.cars)
    return(
        <div className="pro">
            {
                cars && cars.map(el=> <CardCar el={el}/>)
            }
        </div>
    )
}

export default ListCars