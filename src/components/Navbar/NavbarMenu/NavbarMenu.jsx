import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import styles from './navbar-menu.module.css';

import { selectIsLogin } from '../../../redux/auth/auth-selectors';
import menuItems from './menu-items';

const NavbarMenu = () => {
  const isLogin = useSelector(selectIsLogin);

  const filteredMenuItems = !isLogin
    ? menuItems.filter(item => !item.private)
    : menuItems;

  const elements = filteredMenuItems.map(({ id, to, text }) => (
    <li className={styles.navMenuList} key={id}>
      <NavLink className={styles.homeNav} to={to}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={styles.navMenuContainer}>{elements}</ul>;
};

export default NavbarMenu;
