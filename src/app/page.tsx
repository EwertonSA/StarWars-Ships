'use client'
import {Button} from 'reactstrap'
import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main  className={styles.main } >
      <div className={styles.inicio}>
      <h1 className={styles.title}>Conheça as naves do mundo Star Wars</h1>
     
      <Link   href="/espaconaves"><Button className={styles.button}>Veja todas</Button></Link>
    
      </div>
    </main>
 
  );
}
