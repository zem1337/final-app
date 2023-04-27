import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCar } from '../Redux/Actions/CarActions';

const AddCar=()=>{
    const [brand, setBrand] = useState('')
    const [model,setModel] = useState('')
    const [picture,setPicture] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleAdd=(a)=>{
        a.preventDefault()
        dispatch(addCar({brand,model,picture},navigate))
    }

    return(
      <div className='fo'>

       <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Brand</Form.Label>
          <Form.Control onChange={(e)=>setBrand(e.target.value)} type="text" placeholder="Enter brand" />          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Model</Form.Label>
          <Form.Control onChange={(e)=>setModel(e.target.value)} type="text" placeholder="Enter model" />          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Picture</Form.Label>
          <Form.Control onChange={(e)=>setPicture(e.target.value)} type="text" placeholder="Enter model" />          
        </Form.Group>
  
        <Button onClick={(e)=>handleAdd(e)} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    )
}

export default AddCar