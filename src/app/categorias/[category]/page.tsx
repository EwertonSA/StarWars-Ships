'use client'
import { useParams } from "next/navigation"
import styles from "../../page.module.scss"
import spaceships from "../../../data/spaceships.json"
import Link from "next/link"
import { Button } from "reactstrap"

export default function Page(){
 
    const {category} =useParams()
       const categoryShips= spaceships.filter(ship=>ship.category === category)
    if(typeof category !== 'string') return null
    return(

        <main className={styles.main}>
            <div className={styles.inicio}>  
            <h1 className={styles.title}>{category.replace('_',' ')}</h1> 
            <div className={styles.naves} >
                {categoryShips.map(ship=>(
                
                  
                    <Link  key={ship.id} href={`/espaconaves/${ship.id}`}><Button className={styles.btn}>{ship.name}</Button></Link>
              
            ))}
       </div>
       </div>
        </main>
    )
}