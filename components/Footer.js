import Image from 'next/image'

const Footer = () => {
  return (
    <footer>
      Copyright 2022 GoodHive
      <div className="logo">
        <Image src="/logo.png" alt="site logo" width={128} height={77} />
      </div>
    </footer>
  );
}
 
export default Footer;