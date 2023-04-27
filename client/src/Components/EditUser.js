import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getOneUser, updateUser } from "../Redux/Actions/AuthActions"
import {Form,Button} from 'react-bootstrap'
const EditUser=()=>{
    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOneUser(id))
    },[])

    const oneUser = useSelector(state=> state.AuthReducer.oneUser)
    const [name,setName] = useState(oneUser.name)
    const [email,setEmail] = useState(oneUser.email)
    const [picture,setPicture] = useState(oneUser.picture)

    useEffect(()=>{
        setName(oneUser.name)
        setEmail(oneUser.email)
        setPicture(oneUser.picture)
    },[oneUser])
    const navigate = useNavigate()
    const handleEdit=(a)=>{
        a.preventDefault()
        dispatch(updateUser({name,email,picture},id,navigate))
    }
    return(
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />       
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />       
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Picture</Form.Label>
                <Form.Control value={picture} onChange={(e)=>setPicture(e.target.value)} type="text" placeholder="Enter picture" />       
            </Form.Group>


            <Button onClick={(e)=>handleEdit(e)} variant="primary" type="submit">
                Edit
            </Button>
        </Form>
    )
}

export default EditUser