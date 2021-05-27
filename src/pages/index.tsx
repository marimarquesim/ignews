import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButon';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>  
        <title>Inicio | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
        <span>
        👏 Hey, welcome
        </span>
        <h1>News about the <span>React</span> word.</h1>
        <p>
          Get acess to all the publictions <br/>
          <span>for $9,90 month</span>
        </p>
        <SubscribeButton/>
        </section>
        <img src="../images/avatar.svg" alt="Girl Coding"/>

      </main>
    </>  
  )
}
