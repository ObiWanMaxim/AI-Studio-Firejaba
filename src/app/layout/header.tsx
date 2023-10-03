import './header.scss';
import Image from "next/image";


function Header() {
  return (
    <header>
      <div className="logo">
      <a href="/">

        <Image
        
            width="100"
            height="20"
            alt="background"
            src="/assets/logo.png"
            className="logoicon"
          />
          </a>
      <a href="https://wivo.co.il">
        <Image
        
            width="100"
            height="20"
            alt="background"
            src="/assets/wivo.png"
            className="wivo"
          />
      </a>
      </div>

    </header>
  );
}

export default Header;
