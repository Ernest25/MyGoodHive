import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" alt="site logo" width={100} height={50} />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/talents/"><a>Talents</a></Link>
      <Link href="/jobs/"><a>JobOffers</a></Link>
      <Link href="/about"><a>About</a></Link>
    </nav>
  );
}
 
export default Navbar;