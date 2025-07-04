
"use client"
import { useParams } from "next/navigation";
import spaceships from "../../../data/spaceships.json"
import Image from 'next/image';
import styles from "../../page.module.scss"
import Link from "next/link";

const Page=()=>{
const {id}=useParams()

if(!id || typeof id !== 'string' ){
    return null
}
const ship= spaceships.find(ship=>ship.id === +id)
if(!ship) return null
return(
    <main className={styles.main}>
        <div className={styles.inicio}> 
         
        <h1>Nome:{ship.name}</h1>
        <Image src={ship.imageUrl} alt={ship.name} width={800} height={432}/>

              
        <h1>Modelo:{ship.model}</h1>
       
              
        <h1>Categoria:{ship.category}</h1>
     
                 
        <h1>Descrição:{ship.description}</h1>
       
       <div className={styles.layout}>
        
     <Link className={styles.button} href="/espaconaves">Voltar para a página de espaço naves</Link>
       
        <Link href={`/espaconaves/${+id -1}`} className={styles.button} style={{display:+id ===1 ? 'none':'block'}}>
        Anterior
        
        </Link>
        
        <Link href={`/espaconaves/${+id+1}`} className={styles.button} style={{display:+id === spaceships.length ? 'none':'block'}}>
        Próxima        
        </Link>
            </div> 
       </div>

    </main>
)
}
export default Page