import { useSelector } from 'react-redux';

import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarUser from './NavbarUser/NavbarUser';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import { selectIsLogin } from '../../redux/auth/auth-selectors';

const Navbar = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <nav>
      <NavbarMenu />
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </nav>
  );
};

export default Navbar;
