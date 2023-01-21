import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
//import { onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";
//import { auth } from "../firebase";
import styles from './NavBar.module.css';
import Logo from '../assets/mxLogo.svg';
import login from '../assets/login.svg';
import CartButton from '../Cart/CartButton';


const NavBar = () => {

const isLoggedIn =  useSelector(state => state.user.isAuthenticated);
  
/*  const [user, setUser] = useState(null); */

 /*  */


 
  return(
    <header className={styles.headerMain}>
        <div className={styles.logo}>
            <img src={Logo} style={{height:75, width:75}} alt= "mySVG"/>
        </div>
        <nav className={styles.nav}>
        <ul>
            <li>
             <NavLink className={(navData) => navData.isActive ? styles.active: ''} to = '/Home'>Home</NavLink>
            </li>
            <li>
            <NavLink className={(navData) => navData.isActive ? styles.active: ''} to = '/Men'>Men</NavLink>
            </li>
            <li>
            <NavLink className={(navData) => navData.isActive ? styles.active: ''} to = '/Women'>Women</NavLink>
            </li>
            {isLoggedIn && <li>
            <NavLink className={(navData) => navData.isActive ? styles.active: ''} to = '/MyOrders'>My Orders</NavLink>
            </li>}
            <li>
            <NavLink className={navData => navData.isActive ? styles.active: ''} to = '/About'>About</NavLink>
            </li>
            <CartButton className = {styles.cartBtn}/>
            <li>
            <div className={styles.profile}>
            <NavLink to = '/Auth'>
            <img className={styles.profileIcon} src={login}  alt= "login"/>
            </NavLink>
            {isLoggedIn ? <p>Logged In</p>: <p>Logged out</p>}
            </div>
            </li>
            </ul>
            </nav>
        
        </header>
    )

}

export default NavBar;