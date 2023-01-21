import { useNavigate } from 'react-router-dom';
import laugh from '../assets/laugh.jpg';
import manSits from '../assets/manSits.jpg';
import gta from '../assets/gta.jpg';
import way from '../assets/way.jpg';
import shoe from '../assets/shoe.jpg';
import indian from '../assets/indian.jpg';
import run from '../assets/run.jpg';
import classes from './Home.module.css';


export const Home = () => {

    const navigate = useNavigate();

    const shopMensHandler = () => {
        navigate('/Men');
    }

    const shopWomensHandler = () => {
        navigate('/Women');
    }


    return(
        <div className={classes.page}>
            <div className={classes.topImages}>
                <div className={classes.item}>
                <button onClick={shopWomensHandler} className={classes.shopBtn}>Shop Women's</button>
                <img src = {laugh} height='430'  alt='women'/>
                </div>
                <div className={classes.item}>
                <button onClick={shopMensHandler} className={classes.shopBtn}>Shop Men's</button>
                <img src = {gta} style={{width:665 , height:400}} alt='men'/>
                </div>
                <p> Explore the latest Collections and Premium Clothing</p>
                </div>
                <div className={classes.stylish}>
                <img src = {indian} alt='indian'/>
                <img src = {run} alt='run'/>
                <img src = {way} alt='quote'/> 
                </div>
                <div className={classes.bottomImages}>
                <img src = {manSits} style={{width:600 , height:400}} alt='man'/>
                <img src = {shoe} style={{width:730 , height:400}} alt='shoe'/> 
                </div>
        </div>
    )

}

export default Home;