import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import {Form,Button} from 'react-bootstrap'
import { getOneCar,updateCar } from "../Redux/Actions/CarActions"
const EditCar=()=>{
    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOneCar(id))
    },[])

    const oneCar = useSelector(state=> state.CarReducer.oneCar)
    const [brand,setBrand] = useState(oneCar.brand)
    const [model,setModel] = useState(oneCar.model)
    const [picture,setPicture] = useState(oneCar.picture)

    useEffect(()=>{
        setBrand(oneCar.brand)
        setModel(oneCar.model)
    },[oneCar])
    const navigate = useNavigate()
    const handleEdit=(a)=>{
        a.preventDefault()
        dispatch(updateCar({brand,model,picture},id,navigate))
    }
    return(
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Brand</Form.Label>
                <Form.Control value={brand} onChange={(e)=>setBrand(e.target.value)} type="text" placeholder="Enter car brand" />       
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>model</Form.Label>
                <Form.Control value={model} onChange={(e)=>setModel(e.target.value)} type="text" placeholder="Enter car model" />       
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Picture</Form.Label>
                <Form.Control value={picture} onChange={(e)=>setPicture(e.target.value)} type="text" placeholder="Enter car model" />       
            </Form.Group>

            <Button onClick={(e)=>handleEdit(e)} variant="primary" type="submit">
                Edit
            </Button>
        </Form>
    )
}

export default EditCar