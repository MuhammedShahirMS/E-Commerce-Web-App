import mensItems from "../assets/MenItems.json";
import womensItems from "../assets/WomensItems.json";
import Item from "../components/Item";
import styles from './MenAndWomen.module.css';

export const Men = () => {

    return(
        <div className={styles.page}>
            <ul>
                {mensItems.map(item => <li key={item.id}><Item {...item}/></li>)}
            </ul>
        </div>
    )

}

export const Women = () => {

    return(
        <div className={styles.page}>
            <ul>
                {womensItems.map(item => <li key={item.id}><Item {...item}/></li>)}
            </ul>
        </div>
    )

}