import Head from 'next/head'

const About = () => {
  return (
    <>
      <Head>
        <title>Talent List | About</title>
        <meta name="keywords" content="talents"/>
      </Head>
      <div>
        <h1>About</h1>
        <p>
          GoodHive connects talents and projects (projet =  Job = JobOffer). 
          Companies submit a job offer and talent can apply.
          This Dapp also allows direct payments in Tokens via a Smart-contract.
        </p>
      
      </div>
    </>
  );
}
 
export default About;