import Link from "next/link";

import styles from './page.module.scss'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <div className={styles.main}>
          <div className={styles.layout}>
          <h1>EXERCÍCIO 3- CATÁLOGO DE ESPAÇONAVES</h1>
          <nav>
            <Link  className={styles.nav} href="/" >Início</Link>
            <Link  className={styles.nav} href={"/espaconaves"}>Espaçonaves</Link>
            <Link  className={styles.nav} href="/categorias">Categorias</Link>
          </nav>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
