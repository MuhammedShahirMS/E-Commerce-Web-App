import laugh from '../assets/laugh.jpg';
import manSits from '../assets/manSits.jpg';
import gta from '../assets/gta.jpg';
import way from '../assets/way.jpg';
import shoeDisplay from '../assets/shoeDisplay.jpeg';
import indian from '../assets/indian.jpg';
import run from '../assets/run.jpg';
import classes from './Home.module.css';


const Home = () => {

    return(
        <div className={classes.page}>
            <div className={classes.topImages}>
            <button className={classes.shopWomenBtn}>Shop Women's</button>
                <img src = {laugh} height='450' style={{objectFit: 'cover'}} alt='women'/>
                <img src = {gta} style={{width:665 , height:400}} alt='men'/>
                </div>
                <div className={classes.quote}>
                <img src = {indian} height='300' style={{objectFit: 'cover'}} alt='indian'/>
                <img src = {run} height='300' style={{objectFit: 'cover'}} alt='run'/>
                <img src = {way} height='230' style={{objectFit: 'cover'}} alt='quote'/> 
                </div>
                <img src = {manSits} style={{width:600 , height:400}} alt='man'/>
                <img src = {shoeDisplay} style={{width:600 , height:400}} alt='shoe'/>
                
            
            <button className={classes.shopWomenBtn}>Shop Women's</button>
        
        </div>
    )

}

export default Home;