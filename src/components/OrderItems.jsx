import classes from './OrderItems.module.css';

const OrderItems = props => {

    
    return (
        <>
            <div className={classes.pack}>{props.bagList.map(item => 
                <li key={item.id} className={classes.item}>
                <div className={classes.pImage}><img src = {item.imgUrl}/> </div>
                <div className={classes.product}>
                <div className={classes.brand}>{item.brand}</div>
                <div className={classes.name}>{item.name}</div>
                <div>size: {item.size}</div>
                </div>
                <div className={classes.rate}>
                <div>Price: ${item.price}</div>
                <div className={classes.quantity}>qty: {item.quantity}</div>
                
                </div>
            </li>)}
            </div>
            <div className={classes.orderDate}>{props.date}</div>
            </>
    )
}

export default OrderItems;