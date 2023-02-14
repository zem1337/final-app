import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthNav from './Components/AuthNav';
import ErrorComponent from './Components/ErrorComponent';
import Home from './Components/Home';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import Profile from './Components/Profile';
import Register from './Components/Register';

function App() {
  return (
    <div>
      <AuthNav/>
      <ErrorComponent/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
      </Routes>
    </div>
  );
}

export default App;
