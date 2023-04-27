import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthNav from './Components/AuthNav';
import ErrorComponent from './Components/ErrorComponent';
import Home from './Components/Home';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import Profile from './Components/Profile';
import Register from './Components/Register';
import ListUsers from './Components/LIstUsers';
import EditUser from './Components/EditUser';
import EditProfil from './Components/EditProfil';
import ListCars from './Components/ListCars';
import AddCar from './Components/AddCar';
import EditCar from './Components/EditCar';
import ListCommandes from './Components/ListCommandes';
import { useEffect } from 'react';
import { current } from './Redux/Actions/AuthActions';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(current())
  },[])
  return (
    <div>
      <AuthNav/>
      <ErrorComponent/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/commandes' element={<ListCommandes/>}/>
        <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
        <Route path='/listusers' element={<ListUsers/>} />
        <Route path='/listcars' element={<ListCars/>} />
        <Route path='/addcar' element={<AddCar/>} />
        <Route path='/edituser/:id' element={<EditUser/>}/>
        <Route path='/editcar/:id' element={<EditCar/>}/>
        <Route path='/editprofil/:id' element={<EditProfil/>}/>
      </Routes>
    </div>
  );
}

export default App;
