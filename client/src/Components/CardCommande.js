import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCommande, updateCommande } from '../Redux/Actions/CommandeActions';

const CardCommande=({el})=>{
    const dispatch = useDispatch()
    const user = useSelector(state=> state.AuthReducer.user)
    return(
        <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Owner : {el.owner.name}</Card.Title>
        <Card.Title>{el.status}</Card.Title>
        <Card.Title>{el.prixTotal}</Card.Title>
        <Card.Title>{el.nbrJour}</Card.Title>
        <Card.Text>
          {el.car.brand}
        </Card.Text>
        {
          user.role == "admin" ? 
          <>
          <div className='fless'>
          <Button variant="danger" onClick={()=> dispatch(deleteCommande(el._id))} >Delete Commande</Button> 
          </div>
        <br/>
      
        <div className='fless'>
        <Button variant="danger" onClick={()=> dispatch(updateCommande({status : "Rejected"},el._id))} >Rejected</Button> 
        <Button variant="success" onClick={()=> dispatch(updateCommande({status : "Accepted"},el._id))} >Accepted</Button> 
        </div> </>
          :
          <>
           <Button variant="danger" onClick={()=> dispatch(deleteCommande(el._id))} >Delete Commande</Button> 
          </>
        }
        
       
       
        {/* <Button variant="primary" ><Link style={{color :'white', textDecoration:'none'}} to={`/editcar/${el._id}`}>Edit Car</Link></Button>
        
        <Button variant="danger" onClick={()=> dispatch(deleteCar(el._id))} >Delete</Button> */}
      </Card.Body>
    </Card>
    )
}
export default CardCommande
