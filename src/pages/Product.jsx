import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { cartActions } from '../Redux/cart-slice';
import SizeButtons from "../components/SizeButtons";
import styles from './Product.module.css';

export const Product = () => {

    const [size, setSize] = useState();

    const params   = useParams();
    const location = useLocation();
    const dispatch = useDispatch();

    const data = location.state;
    const modifiedPrice = `$${data.price.toFixed(2)}`;

    
    const sizeSelectedHandler = (event) => {
        setSize(event.target.getAttribute('sz'));  
    }

    const addToCartHandler = () => {
        const newId = data.id + '-' + size;
        dispatch(cartActions.addToCart({
            ...data,
            id: newId,
            size : size
        }))
    }
    
    let sizeSelector;

    if(data.category === 'Mens Wear' || data.category === 'Womens Tops')
    {
        sizeSelector = <div>
        <p>Select Size</p>
        <SizeButtons onClicked = {sizeSelectedHandler} sizes = {['S', 'M', 'L', 'XL', 'XXL'] }/>
        </div>
    }

    if(data.category === 'Bottom Wear'){
        sizeSelector = <div>
        <p>Select Size</p>
        <SizeButtons onClicked = {sizeSelectedHandler} sizes = {['28', '30', '32', '34', '36'] }/>
        </div>
    }

    if(data.category === 'Footwear'){
        sizeSelector = <div>
        <p>Select Size</p>
        <SizeButtons onClicked = {sizeSelectedHandler} sizes = {['6', '7', '8', '9', '10'] }/>
    </div>
    }

    if(data.category === 'Others'){
        sizeSelector = <div>
        <p>Select Size</p>
        <button onClick = {sizeSelectedHandler} sz = 'onesize'>One Size</button> 
    </div>
    }


    return(
        <div className={styles.productPage}>
        <img src={data.imgUrl} height= '500' style={{objectFit: 'cover'}}/>
        <div className={styles.productDetails}>
        <h1 className={styles.brand}>{data.brand}</h1>
        <h2 className={styles.name}>{data.name}</h2>
        <h2>{modifiedPrice}</h2>
        {sizeSelector}
        <button onClick={addToCartHandler}>Add To Cart</button>
        </div>
        </div>
    )

}

export default Product;