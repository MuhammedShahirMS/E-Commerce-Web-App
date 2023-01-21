import { useNavigate } from 'react-router-dom';
import classes from './Item.module.css';

const Item = props => {
 

    const navigate = useNavigate();

    const showItemHandler = () => {
        navigate(`/Product/${props.id}` , {state: props});
        
    }

    const modifiedPrice = `$${props.price.toFixed(2)}`;
    
    return (
        <>
            <img onClick={showItemHandler} src = {props.imgUrl} alt='men' className={classes.itemImg}/>
            <div className={classes.details}>
            <div>
            <h2 className={classes.brand}>{props.brand}</h2>
            <p className={classes.name}>{props.name}</p>
            <p className={classes.price}>{modifiedPrice}</p>
            </div>
            <button className={classes.buyBtn}>WISHLIST</button>
            </div>   
        </>
    )
}

export default Item;