import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul style={{ margin: 0 }}>
        <li className='nav-item'>
          <Link href='/'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link href='/about'>About</Link>
        </li>
        <li className='nav-item'>
          <Link href='/family'>Family</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
