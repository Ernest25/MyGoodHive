import styles from '../../styles/Talents.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}

const Talents = ({ ninjas }) => {
  // console.log(ninjas)

  return (
    <div>
      <h1>All Talents</h1>
      {ninjas.map(ninja => (
        <Link href={'/talents/' + ninja.id} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ ninja.name }</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Talents;