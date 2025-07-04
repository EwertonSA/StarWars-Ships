'use client'
import Link from "next/link"
import spaceship from "../../data/spaceships.json"
import styles from "../page.module.scss"
import { Button } from "reactstrap"

const Categorias= ()=>{
    const categorySet= new Set(spaceship.map(ship=>ship.category))
    const categoriesArray= Array.from(categorySet)

return(
    <main className={styles.main}>
<div className={styles.inicio}>
    <h1 className={styles.title}>Categorias</h1>
    <div className={styles.naves}>
 
        {categoriesArray.map((category)=>(
            <div key={category}>
                <Link href={`/categorias/${category.replace(' ','_')}`} ><Button className={styles.btn}>{category}</Button></Link>
            </div>
        ))}
 
    </div>
</div>
    </main>
)
}
export default Categorias