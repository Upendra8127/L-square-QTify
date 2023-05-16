import React, { useEffect } from 'react';
import styles from "./Section.module.css";

function Section({title, dataSource}) {
    const [cards, setCards] = useState([])
    useEffect(() => {
        dataSource().then((data)=>{
            setCards(data);
        });
    }, []);
    
  return( 
    <div>
        <div className={styles.wrapper}>
            <div><h4>{title}</h4></div>
            <div><h4>Show All</h4></div>
        </div>
        <div>(
            {cards.map(()=>(
            <Card/>
            ))}
        </div>
     </div>
 )

}

export default Section