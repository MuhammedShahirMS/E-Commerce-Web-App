import classes from './Orders.module.css';
import { useLocation, useNavigate } from 'react-router-dom';        
import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import { cartActions } from '../Redux/cart-slice';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';


export const Orders = () => {

const location    = useLocation();
const totalPrice  = location.state.totalAmount || 0; // more details to be shown in case it's 0.
const cart        = location.state.myCart;
const userDetails = useSelector(state => state.user.userData);
const navigate    = useNavigate();
const dispatch    = useDispatch();

if(userDetails.length === 0 ){
    alert('Something went wrong..Please login again to Order');
    return;
}

const nameInput = useRef();
const addressInput = useRef();                          // adjust styling 
const zipInput = useRef();
const phoneInput = useRef();

const placeOrderHandler = () => {

    const name       = nameInput.current.value;
    const address    = addressInput.current.value;
    const zip        = zipInput.current.value;
    const phone      = phoneInput.current.value;

    if(name.trim().length === 0 || address.trim().length === 0 || zip.trim().length === 0 || phone.trim().length === 0) {
        console.log(name.trim().length, address.trim().length )
        alert ('Please fill the fields');
        return;
    }
    let allOrders = userDetails[0].orders;
    const userDoc = doc(db, 'users', userDetails[0].id); 
    const date    = new Date().toString();
    allOrders = [{
        orderCart       : cart,
        orderDate       : date,
        deliveryAddress : `${name}, ${address}  ${zip} ${phone}`
    },
    ...allOrders]

const newField = {orders : allOrders};
updateDoc( userDoc , newField).then(() => {
    alert('Order placed succesfully..Go to my Orders Page to see all Orders');
    dispatch(cartActions.resetCart());
    navigate('/Auth', {state: 'Order Placed'});
})

}

return(
    <div className={classes.page}>
        <div className={classes.container}>
        <div className={classes.details}>
            Total Amount = {totalPrice}
        </div>
        <form>
            <div className={classes.items}>
            <label> Name </label>
            <input type='text' ref = {nameInput}/>
            </div>                                     
            <div className={classes.items}>
            <label>Street</label>
            <input ref = {addressInput}/>  
            </div>
            <div className={classes.items}>
            <label>ZIP</label>
            <input type='number' ref = {zipInput}/>     
                </div>
                <div className={classes.items}>
                    <label>Phone:</label>
                    <input type='number' ref = {phoneInput}/> 
                </div>
                </form>
                <div className = {classes.actions}>
                <button className = {classes['cancel-order']}  >Cancel Order </button>
                <button onClick={placeOrderHandler} className = {classes['place-order']} >Place Order</button>
                </div>
                </div>
                </div>
)

}