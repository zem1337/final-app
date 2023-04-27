import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { current, deleteProfil } from "../Redux/Actions/AuthActions"
import { Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import Card from 'react-bootstrap/Card';
const Profile=()=>{
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(current())
    },[])

    const user = useSelector(state=>state.AuthReducer.user)
    const navigate = useNavigate()
    
    return(
        <div className="pro">
            {
                user &&
                // <>
                //     <h1>{user.name}</h1>
                //     <h2>{user.email}</h2>
                //     <Button variant="primary" ><Link style={{color :'white', textDecoration:'none'}} to={`/editprofil/${user._id}`}>EditProfil</Link></Button>
                //     <Button variant="danger" onClick={()=> dispatch(deleteProfil(user._id,navigate))} >Delete</Button>
                // </>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={user.picture} style={{height :"286px", width :'286px'}}/>
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Text>
                    {user.email}
                  </Card.Text>
                  <div className="fless"> 
                  <Button variant="primary" ><Link style={{color :'white', textDecoration:'none'}} to={`/editprofil/${user._id}`}>EditUser</Link></Button>
                  <Button variant="danger" onClick={()=> dispatch(deleteProfil(user._id,navigate))} >Delete</Button>
                  </div>
                </Card.Body>
              </Card>
            }
            
        </div>
    )
}

export default Profile