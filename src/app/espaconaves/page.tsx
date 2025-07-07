'use client'
import Link from "next/link"
import spaceships from "../../data/spaceships.json"
import styles from "../page.module.scss"

const Espaconaves= ()=>{
return(
    <main className={styles.main}>
<div className={styles.inicio}>
    <h1 className={styles.title}>Todas as espaçonaves</h1>

  <div className={styles.naves}>
    {spaceships.map(ship=>(
        <Link className={styles.btn} href={`/espaconaves/${ship.id}`} key={ship.id}>{ship.name}</Link>
    ))}
  </div>
    </div>

    </main>
)
}
export default Espaconaves