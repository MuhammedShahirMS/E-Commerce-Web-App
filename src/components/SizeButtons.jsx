import styles from './SizeButtons.module.css';
import { useState } from 'react';

const SizeButtons = props => {

const [activeButtonIndex, setActiveButtonIndex] = useState();


let classes = [styles.inactive, styles.inactive, styles.inactive, styles.inactive, styles.inactive, styles.inactive ];

if(activeButtonIndex >= 0) 
classes[activeButtonIndex] = styles.active;

const clickHandler = (e) => {
    props.onClicked(e);
    const sizeSelected = e.target.getAttribute('sz');
    const index = props.sizes.findIndex(size => sizeSelected === size);
    setActiveButtonIndex(index);
    }



    return (
        <div className = {styles.btnsContainer}>
        <button className = {classes[0]}  onClick={clickHandler} sz={props.sizes[0]}>{props.sizes[0]}</button>
        <button className = {classes[1]}  onClick={clickHandler} sz={props.sizes[1]}>{props.sizes[1]}</button>
        <button className = {classes[2]}  onClick={clickHandler} sz={props.sizes[2]}>{props.sizes[2]}</button>
        <button className = {classes[3]}  onClick={clickHandler} sz={props.sizes[3]}>{props.sizes[3]}</button>
        <button className = {classes[4]}  onClick={clickHandler} sz={props.sizes[4]}>{props.sizes[4]}</button>
        </div>
        
    )
}

export default SizeButtons;