import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Countrystatecity  from './Countrystatecity'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
     
        <Countrystatecity />
        
        <Link href="/talents/">
          <a className={styles.btn}>See Talents Listing</a>
        </Link>
      </div>
    </>
  )
}
