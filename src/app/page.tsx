'use client'

import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main  className={styles.main } >
      <div className={styles.inicio}>
      <h1 className={styles.title}>Conheça as naves do mundo Star Wars</h1>
     
      <Link  className={styles.btn}  href="/espaconaves">Veja todas</Link>
    
      </div>
    </main>
 
  );
}
