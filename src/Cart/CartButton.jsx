import { useSelector, useDispatch } from 'react-redux';
import cartImg from '../assets/shoppingCart.svg';
import { cartActions }  from '../Redux/cart-slice';
import classes from './CartButton.module.css';

const CartButton = () => {
    
    const cart = useSelector(state => state.mxCart.cart);
    const dispatch = useDispatch();
    
    const toggleCartHandler = () => {
        dispatch(cartActions.toggleCart());
    }

    const totalNoOfItems = cart.reduce((currSum, item) => {
        return currSum + item.quantity;
    }, 0) 



    return(
        <button onClick={toggleCartHandler} className={classes.cartBtn}>
        <p>My Cart</p>
        <img src = {cartImg} style={{height:42, width:42}} alt= "myCart"/>
        <div className={classes.itemNos}>{totalNoOfItems || 0 }</div>
        </button>
    )
}

export default CartButton;