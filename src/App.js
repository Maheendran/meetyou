
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Auth } from './pages/Authpages/Auth';
import { Forgotpass } from './pages/Authpages/Forgotpass';
import { Getprofile } from './pages/Authpages/Getprofile';
import { Otp } from './pages/Authpages/Otp';
import { Register } from './pages/Authpages/Register';
import { VerifyNum } from './pages/Authpages/VerifyNum';
function App() {
  return (
   <>

   <Routes>
    <Route path='/' element={<Auth/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/forgotpassword' element={<Forgotpass/>}/>
    <Route path='/updatepassword' element={<Getprofile/>}/>
    <Route path='/otp' element={<Otp/>}/>
    <Route path='/verify' element={<VerifyNum/>}/>
   </Routes>
   </>
  );
}

export default App;
