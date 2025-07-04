'use client'
import Link from "next/link"
import spaceships from "../../data/spaceships.json"
import styles from "../page.module.scss"
import { Button } from "reactstrap"

const Espaconaves= ()=>{
return(
    <main className={styles.main}>
<div className={styles.inicio}>
    <h1 className={styles.title}>Todas as espaçonaves</h1>

  <div className={styles.naves}>
    {spaceships.map(ship=>(
        <Link href={`/espaconaves/${ship.id}`} key={ship.id}><Button className={styles.btn}>{ship.name}</Button></Link>
    ))}
  </div>
    </div>

    </main>
)
}
export default Espaconaves