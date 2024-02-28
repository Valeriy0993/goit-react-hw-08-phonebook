import { useSelector } from 'react-redux';

import styles from './navbar.module.css';

import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarUser from './NavbarUser/NavbarUser';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import { selectIsLogin } from '../../redux/auth/auth-selectors';

const Navbar = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <nav className={styles.navbar}>
      <NavbarMenu />
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </nav>
  );
};

export default Navbar;
