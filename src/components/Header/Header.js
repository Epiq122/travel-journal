import logo from '../../img/logo.png';
import './Header.css';
function Header() {
  return (
    <header>
      <img src={logo} alt='logo' />
      <h1>my travel journal.</h1>
    </header>
  );
}

export default Header;
