import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Component/User/Signup';
import ForgetPassword from './Component/User/ForgetPassword';
import Verify from './Component/User/Verify';
import Home from './Component/Home/Home';
import Login from './Component/User/Login';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<Login/>}/>
     
      <Route  path='/signup' element={<Signup/>}/>
     
      <Route  path='/forget' element={<ForgetPassword/>}/>
     
      <Route  path='/verify/:token' element={<Verify/>}/>
     
      <Route  path='/home' element={<Home/>}/>
    
      

      </Routes>
    </div>
  );
}

export default App;
