export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(talent => {
    return {
      params: { id: talent.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: { talent: data }
  }
}

const Details = ({ talent }) => {
  return (
    <div>
      <h1>{ talent.name }</h1>
      <p>{  talent.email }</p>
      <p>{  talent.website }</p>
      <p>{  talent.address.city }</p>
    </div>
  );
}

export default Details;