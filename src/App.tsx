import './App.css';
import Greeting from './components/Greeting';
import LuckyNumbers from './components/LuckyNumbers';

function Header() {
  const firstName = 'Miguel';
  const lastName = 'Silva';

  return (
    <>
      <Greeting />
      <LuckyNumbers />
    </>
  );
}

export default Header;
