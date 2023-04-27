import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteCar } from '../Redux/Actions/CarActions';
import { useState } from 'react';
import { addCommande } from '../Redux/Actions/CommandeActions';

const CardCar=({el})=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [nbrJour,setNbrJour] = useState(0)
    const user = useSelector(state=> state.AuthReducer.user)

    return(
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.picture} style={{height :"286px", width :'286px'}} />
      <Card.Body>
        <Card.Title>{el.brand}</Card.Title>
        <Card.Text>
          {el.model}
        </Card.Text>
        {
          user.role == "admin" ?
     
          <div className='fless'>
          <Button variant="primary" ><Link style={{color :'white', textDecoration:'none'}} to={`/editcar/${el._id}`}>Edit Car</Link></Button>
          <Button variant="danger" onClick={()=> dispatch(deleteCar(el._id))} >Delete</Button>
        
          </div> 
          :
          <>
          <button onClick={()=> nbrJour >0&& setNbrJour(nbrJour-1)}>-</button>
        <span>{nbrJour}</span>
        <button onClick={()=> setNbrJour(nbrJour+1)}>+</button>
        <button onClick={()=> dispatch(addCommande({car : el._id,nbrJour,status : "In progress"},navigate))}>Rent</button>
          </>
        }
        
        

      </Card.Body>
    </Card>
    )
}
export default CardCar
