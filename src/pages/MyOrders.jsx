import { useSelector } from 'react-redux';
import classes from './MyOrders.module.css';
import OrderItems from '../components/OrderItems';

const MyOrders = () => {

const user = useSelector(state => state.user.userData);


if(user.length === 0) {     // to prevent error loading after refreshing
alert('Something went wrong..Please login again to see orders');
return;
}
const ordersList = user[0].orders;

let content  = <div className={classes.emptyList}><h1>No Orders yet.. </h1></div>

    if(ordersList.length > 0) {
        content  = <div className= {classes.myOrders}>
        <h2> My Orders </h2>
        <ul>
        {ordersList.map(order => <div className= {classes.bag} key={Math.random()}> <OrderItems bagList = {order.orderCart} date = {order.orderDate} />
        </div>)}
        </ul></div>
        }





return (
    <div className={classes.ordered}>

        {content}



    </div>
)

}
 export default MyOrders;