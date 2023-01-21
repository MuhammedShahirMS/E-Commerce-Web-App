import NavBar from './components/NavBar';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useEffect } from 'react';
import { userActions } from './Redux/user-slice';
import { useDispatch } from 'react-redux';
import  Home  from './pages/Home';
import  {Men, Women } from './pages/MenAndWomen';
import  Product  from './pages/Product';
import  About  from './pages/About';
import  Auth  from './pages/Auth';
import  { Orders }  from './pages/Orders';
import MyOrders from './pages/MyOrders';
import Cart from './Cart/Cart';

function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
  const listen = onAuthStateChanged(auth, (user) => {
  if(user) {
    const expiresBy = localStorage.getItem('expiresAt');
    const remainingTime = new Date(expiresBy).getTime() - new Date().getTime();
    dispatch(userActions.toggleAuthStatus({isLoggedIn: true,
      emailId: user.email,
    })); 
    navigate('/Auth', {state: {isRefreshed: true,
                               timeLeft  : remainingTime
                              }})
           }
      
  })

    return () => {
      listen();
    }
  }, [])
  
  return (
    <>
    <NavBar/>
    <Routes>
    <Route path='/*' element = {<Navigate to = '/Home'/>} />
    <Route path='/Home' element = {<Home/>} />
    <Route path='/Men' element = {<Men/>} />
    <Route path='/Women' element = {<Women/>} />
    <Route path='/Product/:productId' element = {<Product/>} />
    <Route path='/About' element = {<About/>} />
    <Route path='/Auth' element={<Auth/>}/>
    <Route path='/Orders' element={<Orders/>}/>
    <Route path='/MyOrders' element={<MyOrders/>}/>
    </Routes>
    <Cart/>
    </>
    
  )
}

export default App
